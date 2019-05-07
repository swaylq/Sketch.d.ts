/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLocalInputServer<T0 = void, T1 = void, T2 = void> extends NSInputServer {
    mutableDictionary<R = unknown>(): R;
    setMutableDictionary<R = void, P0 = unknown>(_setMutableDictionary: P0): R;
  }
  namespace NSLocalInputServer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSInputServer {
      alloc<R = NSLocalInputServer>(): R;
      new: <R = NSLocalInputServer>() => R;
    }
  }
}

declare const NSLocalInputServer: cocoa.NSLocalInputServer.CLASS;
