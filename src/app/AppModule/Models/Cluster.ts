import { DataSetItem } from './DataSetItem';

let clusterId = 1;

export class Cluster
{

    public id: number;
    public centroid: DataSetItem;

    constructor(private items: DataSetItem[], centroid?: number)
    {
        if (!centroid) {
            this.centroid = DataSetItem.createFromItem(items[0]);
        }

        this.id = clusterId++;
    }

    public recalculateCentroid()
    {
        for (let valueIndex = 0; valueIndex < this.items[0].getValues().length; valueIndex++) {
            this.centroid.getValues()[valueIndex] = 0;

            this.items.forEach(item => {
                this.centroid.getValues()[valueIndex] += item.getValues()[valueIndex];
            });

            this.centroid.getValues()[valueIndex] /= this.items.length;
        }
    }

    public getItems(): DataSetItem[]
    {
        return this.items;
    }

    public clearItems(): void
    {
        this.items = [];
    }
}
