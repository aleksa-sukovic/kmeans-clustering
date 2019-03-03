import { Parser } from '../Parsers/Parser';

export class DataSet
{

    private data: Array<Array<Number>>;
    private headers: Array<string>;
    private parser: Parser;
    private remoteUrl: string;

    constructor(remoteUrl: string, parser: Parser, source?: string)
    {
        this.remoteUrl = remoteUrl;
        this.parser    = parser;

        if (source) {
            this.setSource(source);

            return;
        }

        this.data = [];
        this.headers = [];
    }

    setSource(source: string)
    {
        let parsed = this.parser.parse(source);

        this.data    = parsed.data;
        this.headers = parsed.headers;
    }

    getHeaders(): Array<string>
    {
        return this.headers;
    }

    getData(): Array<Array<Number>>
    {
        return this.data;
    }

    getRemoteUrl(): string
    {
        return this.remoteUrl;
    }
}
