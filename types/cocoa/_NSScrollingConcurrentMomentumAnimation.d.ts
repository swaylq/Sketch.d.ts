/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollingConcurrentMomentumAnimation<T0 = void, T1 = void, T2 = void> extends _NSScrollingConcurrentVBLPreprocessFilter {
    dealloc<R = void>(): R;
    initWithMomentumCalculator<R = unknown, P0 = unknown>(_initWithMomentumCalculator: P0): R;
    momentumCalculator<R = _NSScrollingMomentumCalculator>(): R;
    setMomentumCalculator<R = void, P0 = _NSScrollingMomentumCalculator>(_v: P0): R;
  }
  namespace _NSScrollingConcurrentMomentumAnimation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSScrollingConcurrentVBLPreprocessFilter {
      alloc<R = _NSScrollingConcurrentMomentumAnimation>(): R;
      new: <R = _NSScrollingConcurrentMomentumAnimation>() => R;
    }
  }
}
