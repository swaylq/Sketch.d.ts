/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollingConcurrentSwipeVBLPreprocessFilter<T0 = void, T1 = void, T2 = void> extends _NSScrollingConcurrentEventVBLPreprocessFilter {
    gestureAxis<R = number>(): R;
    setGestureAxis<R = void, P0 = number>(_v: P0): R;
  }
  namespace _NSScrollingConcurrentSwipeVBLPreprocessFilter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSScrollingConcurrentEventVBLPreprocessFilter {
      alloc<R = _NSScrollingConcurrentSwipeVBLPreprocessFilter>(): R;
      new: <R = _NSScrollingConcurrentSwipeVBLPreprocessFilter>() => R;
    }
  }
}
