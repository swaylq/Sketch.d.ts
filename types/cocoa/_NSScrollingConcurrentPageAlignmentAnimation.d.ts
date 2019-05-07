/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollingConcurrentPageAlignmentAnimation<T0 = void, T1 = void, T2 = void> extends _NSScrollingConcurrentVBLPreprocessFilter {
    dealloc<R = void>(): R;
    destinationOrigin<R = CGPoint>(): R;
    setDestinationOrigin<R = void, P0 = CGPoint>(_v: P0): R;
    initialOrigin<R = CGPoint>(): R;
    setInitialOrigin<R = void, P0 = CGPoint>(_v: P0): R;
  }
  namespace _NSScrollingConcurrentPageAlignmentAnimation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSScrollingConcurrentVBLPreprocessFilter {
      alloc<R = _NSScrollingConcurrentPageAlignmentAnimation>(): R;
      new: <R = _NSScrollingConcurrentPageAlignmentAnimation>() => R;
    }
  }
}
