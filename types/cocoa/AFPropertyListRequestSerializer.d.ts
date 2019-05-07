/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFPropertyListRequestSerializer<T0 = void, T1 = void, T2 = void> extends AFHTTPRequestSerializer {
    writeOptions<R = number>(): R;
    setWriteOptions<R = void, P0 = number>(_v: P0): R;
    format<R = number>(): R;
    setFormat<R = void, P0 = number>(_v: P0): R;
  }
  namespace AFPropertyListRequestSerializer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends AFHTTPRequestSerializer {
      alloc<R = AFPropertyListRequestSerializer>(): R;
      new: <R = AFPropertyListRequestSerializer>() => R;
      serializerWithFormat_writeOptions<R = unknown, P0 = number, P1 = number>(_serializerWithFormat: P0, _writeOptions: P1): R;
    }
  }
}

declare const AFPropertyListRequestSerializer: cocoa.AFPropertyListRequestSerializer.CLASS;
