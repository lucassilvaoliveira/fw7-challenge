export interface ISearchShortedUrl {
    searchShortedUrl(shortedUrl: string): Promise<string>;
}