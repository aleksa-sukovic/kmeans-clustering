import { DataSetItem } from './DataSetItem';

let clusterId = 1;

export class Cluster
{

    private centroid: DataSetItem;
    private id: number;

    constructor(private items: DataSetItem[], centroid?: number)
    {
        if (!centroid) {
            this.centroid = DataSetItem.createFromItem(items[0]);
        }

        this.id = clusterId++;
    }

    recalculateCentroid()
    {
        for (let valueIndex = 0; valueIndex < this.items[0].getValues().length; valueIndex++) {
            this.centroid.getValues()[valueIndex] = 0;

            this.items.forEach(item => {
                this.centroid.getValues()[valueIndex] += item.getValues()[valueIndex];
            });

            this.centroid.getValues()[valueIndex] /= this.items.length;
        }
    }

    getItems(): DataSetItem[]
    {
        return this.items;
    }

    clearItems(): void
    {
        this.items = [];
    }

    getCentroid(): DataSetItem
    {
        return this.centroid;
    }

    getId(): number
    {
        return this.id;
    }
}
