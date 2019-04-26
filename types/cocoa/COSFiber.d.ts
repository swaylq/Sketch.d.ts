/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface COSFiber<T0 = void, T1 = void, T2 = void> extends NSObject {
    onCleanup<R = void, P0 = MOJavaScriptObject>(_onCleanup: P0): R;
    cleanup<R = void>(): R;
    coscript<R = COScript>(): R;
    setCoscript<R = void, P0 = COScript>(_v: P0): R;
    cleanUpJSfunc<R = MOJavaScriptObject>(): R;
    setCleanUpJSfunc<R = void, P0 = MOJavaScriptObject>(_v: P0): R;
  }
  namespace COSFiber {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = COSFiber>(): R;
      new: <R = COSFiber>() => R;
      createWithCocoaScript<R = unknown, P0 = COScript>(_createWithCocoaScript: P0): R;
    }
  }
}

declare const COSFiber: cocoa.COSFiber.CLASS;
