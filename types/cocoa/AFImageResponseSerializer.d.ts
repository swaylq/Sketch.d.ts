/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFImageResponseSerializer<T0 = void, T1 = void, T2 = void> extends AFHTTPResponseSerializer {}
  namespace AFImageResponseSerializer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends AFHTTPResponseSerializer {
      alloc<R = AFImageResponseSerializer>(): R;
      new: <R = AFImageResponseSerializer>() => R;
    }
  }
}

declare const AFImageResponseSerializer: cocoa.AFImageResponseSerializer.CLASS;
