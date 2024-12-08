import pandas as pd
import shutil

data = pd.read_csv("../../data/leaflet_popupimg/subsampled.csv")

image_path = '/mnt/c/Users/LiBayi/Documents/work/streetview/streetvideo/gopro-sve/specific_frames/'

# select the files that are in the image_path based on the image_id column
data['image_path'] = data['id'].apply(lambda x: image_path + str(x) + '.jpg')

# move these files to /mnt/c/Users/LiBayi/Documents/work/GIS-training/data/leaflet_popupimg/imgs/

for i in range(len(data)):
    shutil.copy(data['image_path'][i], '/mnt/c/Users/LiBayi/Documents/work/GIS-training/data/leaflet_popupimg/imgs/' + str(data['id'][i]) + '.jpg')