/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface DataProtocol<T0 = void, T1 = void, T2 = void> extends NSURLProtocol {
    stopLoading<R = void>(): R;
    startLoading<R = void>(): R;
  }
  namespace DataProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSURLProtocol {
      dataFromLink_type_encoding<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_dataFromLink: P0, _type: P1, _encoding: P2): R;
      canonicalRequestForRequest<R = unknown, P0 = unknown>(_canonicalRequestForRequest: P0): R;
      canInitWithRequest<R = boolean, P0 = unknown>(_canInitWithRequest: P0): R;
    }
  }
}

declare const DataProtocol: cocoa.DataProtocol.CLASS;
