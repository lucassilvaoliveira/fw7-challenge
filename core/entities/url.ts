export default class Url {
    constructor(private id: string, private fullUrl: string, private shortedUrl: string)
    {}

    public getId() {
        return this.id;
    }

    public getFullUrl() {
        return this.fullUrl;
    }
}