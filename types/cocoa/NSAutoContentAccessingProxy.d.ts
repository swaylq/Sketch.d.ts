/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAutoContentAccessingProxy<T0 = void, T1 = void, T2 = void> extends NSProxy {}
  namespace NSAutoContentAccessingProxy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSProxy {
      proxyWithTarget<R = unknown, P0 = unknown>(_proxyWithTarget: P0): R;
    }
  }
}

declare const NSAutoContentAccessingProxy: cocoa.NSAutoContentAccessingProxy.CLASS;
