/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUndoManagerProxy<T0 = void, T1 = void, T2 = void> extends NSProxy {
    superRelease<R = void>(): R;
    setTargetClass<R = void, P0 = unknown>(_setTargetClass: P0): R;
    initWithManager<R = unknown, P0 = unknown>(_initWithManager: P0): R;
  }
  namespace NSUndoManagerProxy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSProxy {}
  }
}

declare const NSUndoManagerProxy: cocoa.NSUndoManagerProxy.CLASS;
