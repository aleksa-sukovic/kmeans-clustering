import { Algorithm } from './Algorithm';
import { Cluster } from '../Models/Cluster';
import { DataSet } from '../Models/DataSet';
import { DataSetItem } from '../Models/DataSetItem';

export class KMeansAlgorithm extends Algorithm
{

    private clusters: Cluster[];

    constructor(
        private dataSet: DataSet,
        private clusterCount: number,
        private iterations: number
    ) {
        super();
    }

    protected initialize(): Cluster[]
    {
        this.clusters = [];
        let sortedItems = this.sortDataSetItems();
        const perCluster: number = Math.floor(sortedItems.length / this.clusterCount);

        for (let i = 0; i < this.clusterCount; i++) {
            let itemsToAdd: DataSetItem[] = i == this.clusterCount - 1 ? sortedItems : sortedItems.splice(0, perCluster);

            itemsToAdd.forEach(item => item.clusterId = i);

            this.clusters.push(new Cluster(itemsToAdd));
        }

        return this.clusters;
    }

    protected sortDataSetItems(): DataSetItem[]
    {
        this.dataSet.getData().sort((a, b) => {
            const sumA = a.getValues().reduce((sum, item) => sum + item);
            const sumB = b.getValues().reduce((sum, item) => sum + item);

            return sumB - sumA;
        });

        return Array.from(this.dataSet.getData());
    }

    protected iterate(): Cluster[]
    {
        this.clusters.forEach(cluster => {
            cluster.recalculateCentroid();
            cluster.clearItems();
        });

        this.reorderDataItems();

        return this.clusters;
    }

    protected reorderDataItems(): void
    {
        let hasChanges = false;

        this.dataSet.getData().forEach(dataItem => {
            var clusterIndex = 0;
            var clusterIndexDistance = dataItem.distanceFromCluster(this.clusters[0]);

            for (let i = 1; i < this.clusterCount; i++) {
                let currentClusterDistance = dataItem.distanceFromCluster(this.clusters[i]);

                if (currentClusterDistance < clusterIndexDistance) {
                    clusterIndex = i;
                    clusterIndexDistance = currentClusterDistance;
                }
            }

            if (clusterIndex != dataItem.clusterId) {
                hasChanges = true;
            }

            dataItem.clusterId = clusterIndex;
            this.clusters[clusterIndex].getItems().push(dataItem);
        });

        this.complete = !hasChanges;
    }

    public maxIterations(): number
    {
        return this.iterations;
    }

    public getClusters(): Cluster[]
    {
        return this.clusters || [];
    }

}
