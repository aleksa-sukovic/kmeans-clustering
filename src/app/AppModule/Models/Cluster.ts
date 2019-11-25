import { DataSetItem } from './DataSetItem';

let clusterId = 1;

export class Cluster
{

    public id: number;
    public name: string;
    public centroid: DataSetItem;

    constructor(private items: DataSetItem[], centroid?: DataSetItem, name?: string)
    {
        this.centroid = centroid || items[0];
        this.name = name;

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
            this.centroid.getValues()[valueIndex] = parseFloat(this.centroid.getValues()[valueIndex].toFixed(2));
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
