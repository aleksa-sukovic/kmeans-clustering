import { Cluster } from './Cluster';

export class DataSetItem
{
    private values: number[];
    private clusterId: number;

    constructor(values?: number[], clusterId?: number)
    {
        this.values = values || [];
        this.clusterId = clusterId || -1;
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

    getClusterId(): number
    {
        return this.clusterId;
    }

    setClusterId(id: number): void
    {
        this.clusterId = id;
    }

    static createFromItem(item: DataSetItem): DataSetItem
    {
        let dataSetItem = new DataSetItem(Array.from(item.getValues()));

        return dataSetItem;
    }
}
