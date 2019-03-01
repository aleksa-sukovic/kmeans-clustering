import { Transformer } from '../Transformers/Transformer';

export class DataSetInfo
{
    constructor(private path?: String, private transformer?: Transformer) {  }

    getTransformer(): Transformer
    {
        return this.transformer;
    }

    getPath(): String
    {
        return this.path;
    }
}
