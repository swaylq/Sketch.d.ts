/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarFinder<T0 = void, T1 = void, T2 = void> extends NSObject {
    _userDefinedTouchBarDidReset<R = void, P0 = unknown>(__userDefinedTouchBarDidReset: P0): R;
    invalidate<R = void>(): R;
    dealloc<R = void>(): R;
    initWithRootProviderContainer_observer<R = unknown, P0 = unknown, P1 = unknown>(_initWithRootProviderContainer: P0, _observer: P1): R;
  }
  namespace NSTouchBarFinder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSTouchBarFinder>(): R;
      new: <R = NSTouchBarFinder>() => R;
    }
  }
}

declare const NSTouchBarFinder: cocoa.NSTouchBarFinder.CLASS;
