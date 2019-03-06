import { DataSet } from '../Models/DataSet';
import { DataSetItem } from '../Models/DataSetItem';

export class Parser
{
    parse(response: string): { headers: Array<string>, data: Array<DataSetItem> }
    {
        return {
            headers: this.parseHeaders(response),
            data   : this.parseData(response)
        };
    }

    protected parseHeaders(source: string): Array<string>
    {
        let row = source.substr(0, source.indexOf('\n'));

        return row.split(',');
    }

    protected parseData(source: string): Array<DataSetItem>
    {
        source = source.substr(source.indexOf('\n') + 1);

        let result: Array<DataSetItem> = [];

        source.split('\n').forEach(rowString => {
            let values: number[] = [];

            rowString.split(',').forEach(dataItem => {
                values.push(parseFloat(dataItem));
            });

            result.push(new DataSetItem(values));
        });

        return result;
    }
}
