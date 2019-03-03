export class DataSetItem
{
    private values: number[];

    constructor(values?: number[])
    {
        this.values = values || [];
    }

    getValues()
    {
        return this.values;
    }
}
