/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFJSONRequestSerializer<T0 = void, T1 = void, T2 = void> extends AFHTTPRequestSerializer {
    writingOptions<R = number>(): R;
    setWritingOptions<R = void, P0 = number>(_v: P0): R;
  }
  namespace AFJSONRequestSerializer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends AFHTTPRequestSerializer {
      alloc<R = AFJSONRequestSerializer>(): R;
      new: <R = AFJSONRequestSerializer>() => R;
      serializerWithWritingOptions<R = unknown, P0 = number>(_serializerWithWritingOptions: P0): R;
    }
  }
}

declare const AFJSONRequestSerializer: cocoa.AFJSONRequestSerializer.CLASS;
