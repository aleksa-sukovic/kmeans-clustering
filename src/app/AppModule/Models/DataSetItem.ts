import { Cluster } from './Cluster';

export class DataSetItem
{
    private values: number[];

    constructor(values?: number[])
    {
        this.values = values || [];
    }

    distanceFromCluster(cluster: Cluster): number
    {
        let centroid = cluster.getCentroid();
        let euclideanSum = 0;

        for (let valueIndex = 0; valueIndex < centroid.getValues().length; valueIndex++) {
            euclideanSum += Math.pow(
                centroid.getValues()[valueIndex] - this.values[valueIndex],
                2
            );
        }

        return euclideanSum;
    }

    getValues()
    {
        return this.values;
    }

    static createFromItem(item: DataSetItem): DataSetItem
    {
        let dataSetItem = new DataSetItem(Array.from(item.getValues()));

        return dataSetItem;
    }
}
