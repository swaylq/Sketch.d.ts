/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFrequentColorTracker<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    frequentColors<R = unknown>(): R;
    registerColors_fromSource<R = void, P0 = unknown, P1 = unknown>(_registerColors: P0, _fromSource: P1): R;
    registerColor_fromSource<R = void, P0 = unknown, P1 = unknown>(_registerColor: P0, _fromSource: P1): R;
    initWithColorUse_maximumColorCount_ignoreAlpha<R = unknown, P0 = number, P1 = number, P2 = boolean>(_initWithColorUse: P0, _maximumColorCount: P1, _ignoreAlpha: P2): R;
    colorDict<R = NSMutableDictionary>(): R;
    setColorDict<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    shouldIgnoreAlpha<R = boolean>(): R;
    maximumColorCount<R = number>(): R;
    colorUse<R = number>(): R;
  }
  namespace MSFrequentColorTracker {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSFrequentColorTracker>(): R;
      new: <R = MSFrequentColorTracker>() => R;
    }
  }
}

declare const MSFrequentColorTracker: cocoa.MSFrequentColorTracker.CLASS;
