export class DataSet
{
    constructor(private headers?: Array<String>, private data?: Array<Array<Number>>) {  }

    getHeaders(): Array<String>
    {
        return this.headers;
    }

    getData(): Array<Array<Number>>
    {
        return this.data;
    }

    setHeaders(headers: Array<String>): void
    {
        this.headers = headers;
    }

    setData(data: Array<Array<Number>>)
    {
        this.data = data;
    }
}
