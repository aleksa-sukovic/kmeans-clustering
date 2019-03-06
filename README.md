# KMeans Clustering

This project represents my implementation of well known data clustering algorithm called K-means.
More precisely, this is standard ([Lloyd's](https://en.wikipedia.org/wiki/Lloyd%27s_algorithm)) variation of the algorithm.

This project was done as an assignment task for my mathematical modelling course.

## Dataset

I used datasets found online, often used for machine learning. I found that they provided good examples for showcasing the algorithm.

[Wine dataset](https://archive.ics.uci.edu/ml/datasets/wine)
* These data are the results of a chemical analysis of wines grown in the same region in Italy but derived from three different cultivars

[Iris dataset](https://archive.ics.uci.edu/ml/datasets/Iris)
* This is perhaps the best known dataset to be found in the pattern recognition literature. The famous Iris dataset first introduced by British biologist Ronald Fisher.

Each dataset was modified so that first row contains names of the actual data values. This was done in order to enable tabular preview of data.

## What can you do

1. View and examine dataset
2. Select different configurations for algorithm
3. Change visualization parameters of the clusters

## Data visualization

This was a big issue to solve, since visualizing multi-dimensional data is not natural in 2D space.

Since I decided to allow multi-dimensional data (e.g. wine dataset has 13 dimensions) I needed a way to represent that in 2D space.

Considering that actuall visualization does not affect the underlying data, I just needed a way to represent each value as 2 coordinates so I've came up with simple dimension reduction method which takes *n-dimensional* array and reduces it down to *p* dimensions by adding nearest 2 elements together.

This technique is far from optimal when compared to real-world [dimension reduction](https://en.wikipedia.org/wiki/Data_reduction) principles but it served its purpose since it allowed me to visualize clusters in appealing and usefully way.

## Images

![Configuration](https://api.pcloud.com/getpubthumb?code=XZAghq7Zr41ktKyggkpEXWVN97oRAkr9gfmX&linkpassword=undefined&size=550x450&crop=0&type=auto)

![Configuration](https://api.pcloud.com/getpubthumb?code=XZsChq7Z4Iv3EyEpOKbIqF6gU30H3hgldM3X&linkpassword=undefined&size=550x450&crop=0&type=auto)

![Configuration](https://api.pcloud.com/getpubthumb?code=XZQPhq7ZQPJLyoLYtaLa71ejcW4DW7nODIlk&linkpassword=undefined&size=550x450&crop=0&type=auto)
