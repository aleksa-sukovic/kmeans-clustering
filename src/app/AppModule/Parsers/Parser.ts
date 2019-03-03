import { DataSet } from '../Models/DataSet';

export class Parser
{
    parse(response: string): { headers: Array<string>, data: Array<Array<Number>> }
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

    protected parseData(source: string): Array<Array<Number>>
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
