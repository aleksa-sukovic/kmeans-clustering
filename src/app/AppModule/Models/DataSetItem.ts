import { Cluster } from './Cluster';

export class DataSetItem
{
    public cluster: Cluster;
    public original: string[];

    private values: number[];


    constructor(values?: number[], cluster?: Cluster, original?: string[])
    {
        this.values = values || [];
        this.cluster = cluster || new Cluster([]);
        this.original = original;
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
}
