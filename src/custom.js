document.addEventListener("DOMContentLoaded", () => {
  initLightbox();
  initSiteHeader();
  waitForSlides(initDeckEnhancements);
});

function initLightbox() {
  const zoomables = Array.from(document.querySelectorAll(".zoomable"));
  if (!zoomables.length) {
    return;
  }

  zoomables.forEach((img) => {
    if (!img.hasAttribute("tabindex")) {
      img.setAttribute("tabindex", "0");
    }
  });

  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.setAttribute("aria-hidden", "true");
  lightbox.innerHTML = [
    '<div class="lightbox__frame" role="dialog" aria-modal="true" aria-label="Expanded image view">',
    '  <button class="lb-nav lb-prev" type="button" aria-label="Previous image">Prev</button>',
    '  <button class="lb-nav lb-next" type="button" aria-label="Next image">Next</button>',
    '  <button class="lb-close" type="button" aria-label="Close image">Close</button>',
    '  <img alt="">',
    '  <div class="lightbox__caption" hidden></div>',
    "</div>"
  ].join("");
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector("img");
  const caption = lightbox.querySelector(".lightbox__caption");
  const prevButton = lightbox.querySelector(".lb-prev");
  const nextButton = lightbox.querySelector(".lb-next");
  let activeIndex = -1;
  let previousFocus = null;

  const getZoomables = () => Array.from(document.querySelectorAll(".zoomable"));

  const getCaptionText = (img) => {
    const figure = img.closest("figure");
    const figcaption = figure ? figure.querySelector("figcaption") : null;
    return normalizeText((figcaption && figcaption.textContent) || img.alt || "");
  };

  const renderImage = (index) => {
    const items = getZoomables();
    if (!items.length) {
      return;
    }

    activeIndex = ((index % items.length) + items.length) % items.length;
    const img = items[activeIndex];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || "";

    const text = getCaptionText(img);
    caption.textContent = text;
    caption.hidden = !text;

    const multiImage = items.length > 1;
    prevButton.hidden = !multiImage;
    nextButton.hidden = !multiImage;
  };

  const openLightbox = (img) => {
    const items = getZoomables();
    activeIndex = items.indexOf(img);
    previousFocus = document.activeElement;
    renderImage(activeIndex);
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lb-open");
    lightbox.querySelector(".lb-close").focus();
  };

  const closeLightbox = () => {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lb-open");
    lightboxImg.removeAttribute("src");
    caption.textContent = "";
    caption.hidden = true;

    if (previousFocus && typeof previousFocus.focus === "function") {
      previousFocus.focus();
    }
  };

  const moveImage = (delta) => {
    renderImage(activeIndex + delta);
  };

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(".zoomable");
    if (trigger) {
      openLightbox(trigger);
      return;
    }

    if (event.target === lightbox || event.target.classList.contains("lb-close")) {
      closeLightbox();
      return;
    }

    if (event.target.classList.contains("lb-prev")) {
      moveImage(-1);
      return;
    }

    if (event.target.classList.contains("lb-next")) {
      moveImage(1);
    }
  });

  document.addEventListener("keydown", (event) => {
    const target = event.target;

    if (
      target &&
      target.classList &&
      target.classList.contains("zoomable") &&
      (event.key === "Enter" || event.key === " ")
    ) {
      event.preventDefault();
      openLightbox(target);
      return;
    }

    if (!lightbox.classList.contains("open")) {
      return;
    }

    if (event.key === "Escape") {
      closeLightbox();
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveImage(-1);
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveImage(1);
    }
  });
}

function initSiteHeader() {
  const host = document.getElementById("site-header");
  if (!host) {
    return;
  }

  const applyHeaderEnhancements = () => {
    const header = host.querySelector(".site-header");
    if (!header) {
      return;
    }

    const currentPage = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    header.querySelectorAll(".main-nav a[href]").forEach((link) => {
      const href = link.getAttribute("href").replace(/^\.\//, "").split("#")[0].toLowerCase();
      link.classList.toggle("is-active", href === currentPage);
    });

    if (header.dataset.enhanced === "true") {
      return;
    }

    header.dataset.enhanced = "true";
    const toggle = header.querySelector(".site-header__toggle");
    const closeHeader = () => {
      header.classList.remove("is-open");
      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
      }
    };

    if (toggle) {
      toggle.addEventListener("click", (event) => {
        event.stopPropagation();
        const isOpen = header.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
      });
    }

    header.querySelectorAll(".main-nav a").forEach((link) => {
      link.addEventListener("click", () => {
        closeHeader();
      });
    });

    document.addEventListener("click", (event) => {
      if (!header.contains(event.target)) {
        closeHeader();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeHeader();
      }
    });
  };

  applyHeaderEnhancements();
  const observer = new MutationObserver(applyHeaderEnhancements);
  observer.observe(host, { childList: true, subtree: true });
}

function waitForSlides(callback) {
  let attempts = 0;
  const timer = window.setInterval(() => {
    const slides = getSlides();
    if (slides.length) {
      window.clearInterval(timer);
      callback(slides);
      return;
    }

    attempts += 1;
    if (attempts > 80) {
      window.clearInterval(timer);
    }
  }, 100);
}

function initDeckEnhancements(initialSlides) {
  if (document.querySelector(".deck-controls")) {
    return;
  }

  let slides = initialSlides.length ? initialSlides : getSlides();
  if (!slides.length) {
    return;
  }

  let slideData = buildSlideData(slides);

  const controls = document.createElement("div");
  controls.className = "deck-controls";
  controls.innerHTML = [
    '<button class="deck-button deck-button--secondary" type="button" data-action="prev" aria-label="Previous slide">Prev</button>',
    '<button class="deck-button deck-button--secondary" type="button" data-action="toggle-overview" aria-expanded="false" aria-controls="slide-overview">Slides</button>',
    '<div class="deck-controls__meta">',
    `  <span class="deck-controls__eyebrow">${escapeHtml(normalizeText(document.title))}</span>`,
    '  <strong class="deck-controls__title"></strong>',
    "</div>",
    '<div class="deck-controls__counter" aria-live="polite"></div>',
    '<button class="deck-button" type="button" data-action="next" aria-label="Next slide">Next</button>',
    '<div class="deck-controls__progress">',
    '  <div class="deck-controls__progress-fill"></div>',
    '  <img class="deck-controls__progress-pig" src="src/pig.svg" alt="" aria-hidden="true">',
    '</div>'
  ].join("");

  const backdrop = document.createElement("div");
  backdrop.className = "slide-overview-backdrop";

  const overview = document.createElement("aside");
  overview.className = "slide-overview";
  overview.id = "slide-overview";
  overview.setAttribute("aria-hidden", "true");
  overview.innerHTML = [
    '<div class="slide-overview__header">',
    "  <div>",
    '    <div class="slide-overview__eyebrow">Course Slides</div>',
    '    <h2 class="slide-overview__title">Jump By Topic</h2>',
    '    <p class="slide-overview__hint">Browse the deck by slide title and move directly to the section you want.</p>',
    "  </div>",
    '  <button class="deck-button deck-button--ghost" type="button" data-action="close-overview" aria-label="Close slide overview">Close</button>',
    "</div>",
    '<div class="slide-overview__list"></div>'
  ].join("");

  document.body.appendChild(backdrop);
  document.body.appendChild(overview);
  document.body.appendChild(controls);

  const titleEl = controls.querySelector(".deck-controls__title");
  const counterEl = controls.querySelector(".deck-controls__counter");
  const progressFill = controls.querySelector(".deck-controls__progress-fill");
  const overviewList = overview.querySelector(".slide-overview__list");
  const overviewToggle = controls.querySelector('[data-action="toggle-overview"]');
  const prevButton = controls.querySelector('[data-action="prev"]');
  const nextButton = controls.querySelector('[data-action="next"]');

  const renderOverview = () => {
    overviewList.innerHTML = slideData
      .map(({ index, title, meta }) => {
        const safeMeta = meta ? `<span class="slide-overview__item-meta">${escapeHtml(meta)}</span>` : "";
        return [
          `<button class="slide-overview__item" type="button" data-slide-index="${index}">`,
          `  <span class="slide-overview__index">${String(index + 1).padStart(2, "0")}</span>`,
          '  <span class="slide-overview__item-copy">',
          `    <span class="slide-overview__item-title">${escapeHtml(title)}</span>`,
          `    ${safeMeta}`,
          "  </span>",
          "</button>"
        ].join("");
      })
      .join("");
  };

  const goToSlide = (index) => {
    const nextIndex = clamp(index, 0, slideData.length - 1);
    if (window.slideshow && typeof window.slideshow.gotoSlide === "function") {
      window.slideshow.gotoSlide(nextIndex + 1);
    } else {
      window.location.hash = `#${nextIndex + 1}`;
    }
  };

  const setOverviewOpen = (shouldOpen) => {
    overview.classList.toggle("open", shouldOpen);
    backdrop.classList.toggle("open", shouldOpen);
    document.body.classList.toggle("overview-open", shouldOpen);
    overview.setAttribute("aria-hidden", String(!shouldOpen));
    overviewToggle.setAttribute("aria-expanded", String(shouldOpen));

    if (shouldOpen) {
      const activeItem = overview.querySelector(".slide-overview__item.is-active");
      if (activeItem) {
        activeItem.scrollIntoView({ block: "nearest" });
      }
    }
  };

  const currentSlideIndex = () => {
    const visible = document.querySelector(".remark-slides-area > .remark-slide-container.remark-visible .remark-slide-content");
    if (visible) {
      const visibleIndex = slides.indexOf(visible);
      if (visibleIndex >= 0) {
        return visibleIndex;
      }
    }

    const parsedHash = Number.parseInt(window.location.hash.replace("#", ""), 10);
    if (!Number.isNaN(parsedHash) && parsedHash > 0) {
      return clamp(parsedHash - 1, 0, slideData.length - 1);
    }

    return 0;
  };

  const syncUi = () => {
    const currentIndex = currentSlideIndex();
    const current = slideData[currentIndex] || { title: `Slide ${currentIndex + 1}` };
    const progress = ((currentIndex + 1) / slideData.length) * 100;

    titleEl.textContent = current.title;
    counterEl.textContent = `${currentIndex + 1} / ${slideData.length}`;
    progressFill.style.width = `${progress}%`;
    controls.style.setProperty("--deck-progress", `${progress}%`);

    prevButton.disabled = currentIndex <= 0;
    nextButton.disabled = currentIndex >= slideData.length - 1;

    overview.querySelectorAll(".slide-overview__item").forEach((item) => {
      const itemIndex = Number.parseInt(item.getAttribute("data-slide-index"), 10);
      item.classList.toggle("is-active", itemIndex === currentIndex);
    });
  };

  const refreshSlides = () => {
    const latestSlides = getSlides();
    if (!latestSlides.length) {
      return;
    }

    if (latestSlides.length !== slides.length) {
      slides = latestSlides;
      slideData = buildSlideData(slides);
      renderOverview();
    }

    syncUi();
  };

  controls.addEventListener("click", (event) => {
    const action = event.target.closest("[data-action]");
    if (!action) {
      return;
    }

    const type = action.getAttribute("data-action");
    if (type === "prev") {
      goToSlide(currentSlideIndex() - 1);
      return;
    }

    if (type === "next") {
      goToSlide(currentSlideIndex() + 1);
      return;
    }

    if (type === "toggle-overview") {
      setOverviewOpen(!overview.classList.contains("open"));
    }
  });

  overview.addEventListener("click", (event) => {
    const closeButton = event.target.closest('[data-action="close-overview"]');
    if (closeButton) {
      setOverviewOpen(false);
      return;
    }

    const slideButton = event.target.closest("[data-slide-index]");
    if (!slideButton) {
      return;
    }

    goToSlide(Number.parseInt(slideButton.getAttribute("data-slide-index"), 10));
    setOverviewOpen(false);
  });

  backdrop.addEventListener("click", () => {
    setOverviewOpen(false);
  });

  const handleDeckShortcut = (event) => {
    if (matchesEscape(event) && overview.classList.contains("open")) {
      setOverviewOpen(false);
      return;
    }

    if (isTypingContext(event.target) || hasModifierKey(event)) {
      return;
    }

    if (!matchesOverviewShortcut(event)) {
      return;
    }

    event.preventDefault();
    setOverviewOpen(!overview.classList.contains("open"));
  };

  window.addEventListener("keydown", handleDeckShortcut, true);
  window.addEventListener("keypress", handleDeckShortcut, true);

  const slidesArea = document.querySelector(".remark-slides-area");
  if (slidesArea) {
    const observer = new MutationObserver(syncUi);
    observer.observe(slidesArea, {
      subtree: true,
      attributes: true,
      attributeFilter: ["class"]
    });
  }

  if (window.slideshow && typeof window.slideshow.on === "function") {
    try {
      window.slideshow.on("showSlide", syncUi);
    } catch (error) {
      // Ignore event binding failures from older Remark builds.
    }
  }

  window.addEventListener("hashchange", syncUi);
  window.addEventListener("resize", refreshSlides);

  renderOverview();
  syncUi();
}

function getSlides() {
  return Array.from(document.querySelectorAll(".remark-slides-area > .remark-slide-container .remark-slide-content"));
}

function buildSlideData(slides) {
  return slides.map((slide, index) => {
    const titleNode = slide.querySelector("h1, h2, h3");
    const title = normalizeText((titleNode && titleNode.textContent) || `Slide ${index + 1}`);

    const metaCandidates = Array.from(slide.querySelectorAll("h2, h3, p"))
      .map((node) => normalizeText(node.textContent))
      .filter((text) => text && text !== title);

    const meta = metaCandidates.length ? metaCandidates[0].slice(0, 96) : "";
    return { index, title, meta };
  });
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function normalizeText(text) {
  return String(text || "").replace(/\s+/g, " ").trim();
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isTypingContext(target) {
  if (!target || !target.tagName) {
    return false;
  }

  const tag = target.tagName.toLowerCase();
  return tag === "input" || tag === "textarea" || target.isContentEditable;
}

function hasModifierKey(event) {
  return Boolean(event.metaKey || event.ctrlKey || event.altKey);
}

function matchesEscape(event) {
  return event.key === "Escape" || event.keyCode === 27;
}

function matchesOverviewShortcut(event) {
  if (event.code === "KeyO") {
    return true;
  }

  if (typeof event.key === "string" && event.key.length === 1) {
    return event.key.toLowerCase() === "o";
  }

  const which = event.which || event.keyCode;
  if (!which) {
    return false;
  }

  return String.fromCharCode(which).toLowerCase() === "o";
}
