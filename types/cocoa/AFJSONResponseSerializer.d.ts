/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFJSONResponseSerializer<T0 = void, T1 = void, T2 = void> extends AFHTTPResponseSerializer {
    removesKeysWithNullValues<R = boolean>(): R;
    setRemovesKeysWithNullValues<R = void, P0 = boolean>(_v: P0): R;
    readingOptions<R = number>(): R;
    setReadingOptions<R = void, P0 = number>(_v: P0): R;
  }
  namespace AFJSONResponseSerializer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends AFHTTPResponseSerializer {
      alloc<R = AFJSONResponseSerializer>(): R;
      new: <R = AFJSONResponseSerializer>() => R;
      serializerWithReadingOptions<R = unknown, P0 = number>(_serializerWithReadingOptions: P0): R;
    }
  }
}

declare const AFJSONResponseSerializer: cocoa.AFJSONResponseSerializer.CLASS;
