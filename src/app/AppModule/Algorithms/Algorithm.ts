import { DataSet } from '../Models/DataSet';
import { Cluster } from '../Models/Cluster';

export abstract class Algorithm
{
    protected currentIteration: number;
    protected complete: boolean;

    protected abstract initialize(): Cluster[];
    protected abstract iterate(): Cluster[];
    protected abstract maxIterations(): number;
    public abstract getClusters(): Cluster[];

    constructor()
    {
        this.currentIteration = 0;
        this.complete = false;
    }

    public nextIteration(): Cluster[]
    {
        let clusters = this.currentIteration == 0 ? this.initialize() : this.iterate();

        this.currentIteration++;

        return clusters;
    }

    public hasNextIteration(): boolean
    {
        return !this.complete && (this.currentIteration < this.maxIterations());
    }
}
