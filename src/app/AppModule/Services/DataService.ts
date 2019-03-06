import { Observable } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DataSet } from '../Models/DataSet';
import { DataSetFactory } from '../Factories/DataSetFactory';

@Injectable()
export class DataService
{
    constructor(
        private http: HttpClient,
        private factory: DataSetFactory
    ) {  }

    getData(label: string) : Observable<any>
    {
        let dataSet: DataSet = this.factory.getByLabel(label);

        return this.http.get(dataSet.getRemoteUrl(), { responseType: 'text' }).pipe(
            map(response => {
                dataSet.setSource(response);

                return dataSet;
            })
        );
    }
}
