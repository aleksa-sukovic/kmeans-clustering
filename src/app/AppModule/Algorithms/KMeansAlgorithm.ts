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
        const perCluster: number = Math.floor(this.dataSet.getData().length / this.clusterCount);

        for (let i = 0; i < this.clusterCount; i++) {
            console.log('New ');
            this.clusters.push(new Cluster([], new DataSetItem(
                Array.from(this.dataSet.getData()[i * perCluster].getValues())
            ), 'Cluster ' + i));
        }

        this.reorderDataItems();

        return this.clusters;
    }

    protected iterate(): Cluster[] {
        this.clusters.forEach(cluster => {
            cluster.recalculateCentroid();
            cluster.clearItems();
        });

        this.reorderDataItems();

        return this.clusters;
    }

    protected reorderDataItems(): void {
        let hasChanges = false;

        this.dataSet.getData().forEach(dataItem => {
            var clusterIndex = 0; // TODO fix
            var clusterIndexDistance = dataItem.distanceFromCluster(this.clusters[0]);

            for (let i = 1; i < this.clusterCount; i++) {
                let currentClusterDistance = dataItem.distanceFromCluster(this.clusters[i]);

                if (currentClusterDistance < clusterIndexDistance) {
                    clusterIndex = i;
                    clusterIndexDistance = currentClusterDistance;
                }
            }

            if (!dataItem.cluster || clusterIndex != (dataItem.cluster.id)) {
                hasChanges = true;
            }

            dataItem.cluster = this.clusters[clusterIndex];
            this.clusters[clusterIndex].getItems().push(dataItem);
        });

        this.complete = !hasChanges;
    }

    public maxIterations(): number {
        return this.iterations;
    }

    public getClusters(): Cluster[] {
        return this.clusters || [];
    }

}
