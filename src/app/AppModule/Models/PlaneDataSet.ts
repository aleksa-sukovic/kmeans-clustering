import { DataSet } from './DataSet';
import { PlaneParser } from '../Parsers/PlaneParser';

export class PlaneDataSet extends DataSet
{
    constructor(source?: string)
    {
        super('assets/plane.data.txt', new PlaneParser, source);
    }
}
