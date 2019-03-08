import { Cluster } from './Cluster';

export class DataSetItem
{
    public cluster: Cluster;

    private values: number[];

    constructor(values?: number[], cluster?: Cluster)
    {
        this.values = values || [];
        this.cluster = cluster;
    }

    distanceFromCluster(cluster: Cluster): number
    {
        let centroid = cluster.centroid;
        let euclideanSum = 0;

        for (let valueIndex = 0; valueIndex < centroid.getValues().length; valueIndex++) {
            euclideanSum += Math.pow(
                centroid.getValues()[valueIndex] - this.values[valueIndex],
                2
            );
        }

        return Math.sqrt(euclideanSum);
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
