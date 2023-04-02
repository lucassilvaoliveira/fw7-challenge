export default interface IDatabase {
    getConnection(): Promise<void>;
    
    saveUrl(fullUrl: string): Promise<string>;

    getFullUrl(fullUrlId: string): Promise<string>;
}