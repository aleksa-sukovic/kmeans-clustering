import { DataSet } from '../Models/DataSet';
import { DataSetItem } from '../Models/DataSetItem';

export class Parser {
    parse(response: string): { headers: Array<string>, data: Array<DataSetItem> } {
        return {
            headers: this.parseHeaders(response),
            data: this.parseData(response)
        };
    }

    protected parseHeaders(source: string): Array<string> {
        let row = source.substr(0, source.indexOf('\n'));

        return row.split(',');
    }

    protected parseData(source: string): Array<DataSetItem> {
        source = source.substr(source.indexOf('\n') + 1);

        let result: Array<DataSetItem> = [];

        source.split('\n').forEach(rowString => {
            let values: number[] = [];
            let original: string[] = [];

            rowString.split(',').forEach(dataItem => {
                original.push(dataItem);

                let number = parseFloat(dataItem);

                if (number) {
                    values.push(number);
                }
            });

            result.push(new DataSetItem(values, null, original));
        });

        return result;
    }
}
