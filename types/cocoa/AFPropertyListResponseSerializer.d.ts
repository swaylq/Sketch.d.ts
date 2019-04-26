/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFPropertyListResponseSerializer<T0 = void, T1 = void, T2 = void> extends AFHTTPResponseSerializer {
    readOptions<R = number>(): R;
    setReadOptions<R = void, P0 = number>(_v: P0): R;
    format<R = number>(): R;
    setFormat<R = void, P0 = number>(_v: P0): R;
  }
  namespace AFPropertyListResponseSerializer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends AFHTTPResponseSerializer {
      alloc<R = AFPropertyListResponseSerializer>(): R;
      new: <R = AFPropertyListResponseSerializer>() => R;
      serializerWithFormat_readOptions<R = unknown, P0 = number, P1 = number>(_serializerWithFormat: P0, _readOptions: P1): R;
    }
  }
}

declare const AFPropertyListResponseSerializer: cocoa.AFPropertyListResponseSerializer.CLASS;
