/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFXMLDocumentResponseSerializer<T0 = void, T1 = void, T2 = void> extends AFHTTPResponseSerializer {
    options<R = number>(): R;
    setOptions<R = void, P0 = number>(_v: P0): R;
  }
  namespace AFXMLDocumentResponseSerializer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends AFHTTPResponseSerializer {
      alloc<R = AFXMLDocumentResponseSerializer>(): R;
      new: <R = AFXMLDocumentResponseSerializer>() => R;
      serializerWithXMLDocumentOptions<R = unknown, P0 = number>(_serializerWithXMLDocumentOptions: P0): R;
    }
  }
}

declare const AFXMLDocumentResponseSerializer: cocoa.AFXMLDocumentResponseSerializer.CLASS;
