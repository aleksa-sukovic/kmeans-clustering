import { DataSet } from './DataSet';
import { WineParser } from '../Parsers/WineParser';

export class WineDataSet extends DataSet
{
    constructor(source?: string)
    {
        super('assets/wine.data.txt', new WineParser, source);
    }
}
