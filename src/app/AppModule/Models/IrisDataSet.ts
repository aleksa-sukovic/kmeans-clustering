import { DataSet } from './DataSet';
import { IrisParser } from '../Parsers/IrisParser';

export class IrisDataSet extends DataSet
{
    constructor(source?: string)
    {
        super('assets/iris.data.txt', new IrisParser, source);
    }
}
