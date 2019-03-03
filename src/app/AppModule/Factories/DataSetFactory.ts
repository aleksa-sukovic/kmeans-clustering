import { Inject, Injectable } from '@angular/core';
import { DataSet } from '../Models/DataSet';
import { WineDataSet } from '../Models/WineDataSet';
import { IrisDataSet } from '../Models/IrisDataSet';
import { Constants } from '../constants';
import { PlaneDataSet } from '../Models/PlaneDataSet';

@Injectable()
export class DataSetFactory
{
    getByLabel(source: string): DataSet
    {
        const labels = Constants.dataSetLabels();

        switch(source)
        {
            case labels.WINE:
                return new WineDataSet;
            case labels.IRIS:
                return new IrisDataSet;
            case labels.PLANE:
                return new PlaneDataSet;
            default:
                return null;
        }
    }
}
