export type QueryUpdater = (newPath: string) => void;
export declare function updateURLWithFilters(filters: Record<string, string | undefined>, queryUpdater?: QueryUpdater): void;
export declare function getFiltersFromURL(): Record<string, string>;
