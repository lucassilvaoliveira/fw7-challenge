export interface IShortenUrl {
    createShortenUrl(fullUrl: string): Promise<string>;
}