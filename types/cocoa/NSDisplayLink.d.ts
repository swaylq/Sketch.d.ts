/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDisplayLink<T0 = void, T1 = void, T2 = void> extends NSObject {
    invalidate<R = void>(): R;
    removeFromRunLoop_forMode<R = void, P0 = unknown, P1 = unknown>(_removeFromRunLoop: P0, _forMode: P1): R;
    addToRunLoop_forMode<R = void, P0 = unknown, P1 = unknown>(_addToRunLoop: P0, _forMode: P1): R;
    paused<R = boolean>(): R;
    setPaused<R = void, P0 = boolean>(_v: P0): R;
    executesConcurrently<R = boolean>(): R;
    setExecutesConcurrently<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSDisplayLink {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSDisplayLink>(): R;
      new: <R = NSDisplayLink>() => R;
      currentTimestamp<R = number>(): R;
    }
  }
}

declare const NSDisplayLink: cocoa.NSDisplayLink.CLASS;
