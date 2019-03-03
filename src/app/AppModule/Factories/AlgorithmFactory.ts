import { DataService } from '../Services/Data/DataService';
import { Algorithm } from '../Algorithms/Algorithm';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { KMeansAlgorithm } from '../Algorithms/KMeansAlgorithm';
import { Injectable } from '@angular/core';

@Injectable()
export class AlgorithmFactory
{
    constructor(private dataService: DataService) {}

    public make(configuration: { dataSetLabel: string, maxIterations: number, clusterCount: number }): Observable<Algorithm>
    {
        return this.dataService.getData(configuration.dataSetLabel).pipe(
            map(dataSet => {
                return new KMeansAlgorithm(dataSet, configuration.clusterCount, configuration.maxIterations);
            })
        );
    }
}
