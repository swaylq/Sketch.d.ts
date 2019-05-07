/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollingConcurrentRubberbandSnapAnimation<T0 = void, T1 = void, T2 = void> extends _NSScrollingConcurrentVBLPreprocessFilter {
    dealloc<R = void>(): R;
    initWithInitialOrigin_velocity_stretch<R = unknown, P0 = CGPoint, P1 = CGPoint, P2 = CGSize>(_initWithInitialOrigin: P0, _velocity: P1, _stretch: P2): R;
  }
  namespace _NSScrollingConcurrentRubberbandSnapAnimation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSScrollingConcurrentVBLPreprocessFilter {
      alloc<R = _NSScrollingConcurrentRubberbandSnapAnimation>(): R;
      new: <R = _NSScrollingConcurrentRubberbandSnapAnimation>() => R;
    }
  }
}
