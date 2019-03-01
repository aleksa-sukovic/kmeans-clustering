import { DataSetInfo } from '../Models/DataSetInfo';
import { Inject, Injectable } from '@angular/core';
import { WineTransformer } from '../Transformers/WineTransformer';
import { IrisTransformer } from '../Transformers/IrisTransformer';
import { Transformer } from '../Transformers/Transformer';

@Injectable()
export class DataSetInfoFactory
{
    constructor(
        @Inject('DATA_WINE') private wineConstant: string,
        @Inject('DATA_IRIS') private irisConstant: string,
    ) {  }

    getBySource(source: String): DataSetInfo
    {
        let path: string;
        let transformer: Transformer;

        switch(source)
        {
            case this.wineConstant:
                path        = 'assets/wine.data.txt';
                transformer = new WineTransformer();
                break;
            case this.irisConstant:
                path        = 'assets/iris.data.txt';
                transformer = new IrisTransformer();
                break;
            default:
                path        = '';
                transformer = new Transformer();
        }

        return new DataSetInfo(path, transformer);
    }
}
