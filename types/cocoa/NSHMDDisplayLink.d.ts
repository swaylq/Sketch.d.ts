/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHMDDisplayLink<T0 = void, T1 = void, T2 = void> extends NSObject {
    resume<R = void>(): R;
    suspend<R = void>(): R;
    invalidate<R = void>(): R;
    valid<R = boolean>(): R;
    executesConcurrently<R = boolean>(): R;
    setExecutesConcurrently<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSHMDDisplayLink {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSHMDDisplayLink>(): R;
      new: <R = NSHMDDisplayLink>() => R;
      currentTimestamp<R = number>(): R;
    }
  }
}

declare const NSHMDDisplayLink: cocoa.NSHMDDisplayLink.CLASS;
