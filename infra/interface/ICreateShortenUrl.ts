interface ICreateShortenUrl {
    createShortenUrl(fullUrl: string): Promise<string>;
}

export { ICreateShortenUrl }