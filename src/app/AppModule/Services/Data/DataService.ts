import { Observable } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DataSetInfoFactory } from '../../Factories/DataSetInfoFactory';

@Injectable()
export class DataService
{
    constructor(
        private http: HttpClient,
        private factory: DataSetInfoFactory
    ) {  }

    getData(label: string) : Observable<any>
    {
        const dataSet: any = this.factory.getBySource(label);

        return this.http.get(dataSet.path, { responseType: 'text' }).pipe(
            map(response => dataSet.transformer.parse(response))
        );
    }
}
