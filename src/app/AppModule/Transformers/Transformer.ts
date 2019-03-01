import { DataSet } from '../Models/DataSet';

export class Transformer
{
    parse(response: string): DataSet
    {
        let dataSet: DataSet = new DataSet(
            this.parseHeaders(response),
            this.parseData(response)
        );

        return dataSet;
    }

    private parseHeaders(source: string): Array<String>
    {
        let row = source.substr(0, source.indexOf('\n'));

        return row.split(',');
    }

    private parseData(source: string): Array<Array<Number>>
    {
        source = source.substr(source.indexOf('\n') + 1);

        let result: Array<Array<Number>> = [];

        source.split('\n').forEach(rowString => {
            let row: Array<Number> = [];

            rowString.split(',').forEach(dataItem => {
                row.push(parseFloat(dataItem))
            });

            result.push(row);
        });

        return result;
    }
}
