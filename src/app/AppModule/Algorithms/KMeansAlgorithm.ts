import { Algorithm } from './Algorithm';
import { Cluster } from '../Models/Cluster';
import { DataSet } from '../Models/DataSet';
import { DataSetItem } from '../Models/DataSetItem';

export class KMeansAlgorithm extends Algorithm {

    private clusters: Cluster[];

    constructor(
        private dataSet: DataSet,
        private clusterCount: number,
        private iterations: number
    ) {
        super();
    }

    protected initialize(): Cluster[] {
        this.clusters = [];

        for (let i = 0; i < this.clusterCount; i++) {
            let values = Array.from(this.dataSet.getData()[i].getValues());

            let cluster = new Cluster([], new DataSetItem(values), 'Cluster ' + i);

            this.clusters.push(cluster);
        }

        this.iterate();

        return this.clusters;
    }

    protected iterate(): Cluster[] {
        this.clusters.forEach(cluster => cluster.clearItems());

        this.reorderDataItems();

        this.clusters.forEach(cluster => cluster.recalculateCentroid());

        return this.clusters;
    }

    protected reorderDataItems(): void {
        let hasChanges = false;

        this.dataSet.getData().forEach(dataItem => {
            let closestCluster = this.getClosestCluster(dataItem);

            if (closestCluster.id != dataItem.cluster.id) {
                hasChanges = true;
            }

            dataItem.cluster = closestCluster;
            closestCluster.getItems().push(dataItem);
        });

        this.complete = !hasChanges;
    }

    private getClosestCluster(item: DataSetItem): Cluster
    {
        var closestIndex = 0;
        var distance     = item.distanceFromCluster(this.clusters[0]);

        for (let i = 1; i < this.clusterCount; i++) {
            let currentDistance = item.distanceFromCluster(this.clusters[i]);

            if (currentDistance <= distance) {
                closestIndex = i;
                distance = currentDistance;
            }
        }

        return this.clusters[closestIndex];
    }

    public maxIterations(): number {
        return this.iterations;
    }

    public getClusters(): Cluster[] {
        return this.clusters || [];
    }

}
