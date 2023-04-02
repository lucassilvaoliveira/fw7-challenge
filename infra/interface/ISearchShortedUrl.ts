interface ISearchShortedUrl {
    searchShortedUrl(shortedUrl: string): Promise<string>;
}

export { ISearchShortedUrl }