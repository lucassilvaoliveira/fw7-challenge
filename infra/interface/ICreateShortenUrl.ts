export interface ICreateShortenUrl {
    createShortenUrl(fullUrl: string): Promise<string>;
}