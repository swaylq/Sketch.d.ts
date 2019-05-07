/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCache<T0 = void, T1 = void, T2 = void> {
    // + NSCache(NSPrivate_Enumeration): 
    mapTableRepresentation<R = unknown>(): R;
  }
  namespace NSCache {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const NSCache: cocoa.NSCache.CLASS;
