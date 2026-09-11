/**
 * Makes all properties of a type optional, recursively.
 * 
 * Similar to `Partial<T>`, but all properties are also optional.
 */
export type DeepPartial<T> = T extends object ? {
    [P in keyof T]? : DeepPartial<T[P]> 
} : T;

