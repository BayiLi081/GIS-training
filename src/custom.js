document.addEventListener('DOMContentLoaded', () => {
  // Create a single reusable overlay
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <img alt="">
    <button class="lb-close" aria-label="Close">[ X ]</button>
  `;
  document.body.appendChild(lightbox);

  const lbImg = lightbox.querySelector('img');

  // Open on any .zoomable click
  document.querySelectorAll('.zoomable').forEach(img => {
    img.addEventListener('click', () => {
      lbImg.src = img.src;
      lbImg.alt = img.alt || '';
      lightbox.classList.add('open');
      document.body.classList.add('lb-open');
    });
  });

  // Close when clicking backdrop, close button, or pressing Esc
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lb-close')) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.classList.remove('lb-open');
    lbImg.removeAttribute('src'); // free memory
  }
});
