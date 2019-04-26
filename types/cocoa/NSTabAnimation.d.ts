/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabAnimation<T0 = void, T1 = void, T2 = void> extends NSAnimation {
    cxx_destruct<R = void>(): R;
    setCurrentProgress<R = void, P0 = number>(_setCurrentProgress: P0): R;
    initWithDuration_animationCurve_progressHandler<R = unknown, P0 = number, P1 = number, P2 = CDUnknownBlockType>(_initWithDuration: P0, _animationCurve: P1, _progressHandler: P2): R;
  }
  namespace NSTabAnimation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAnimation {
      alloc<R = NSTabAnimation>(): R;
      new: <R = NSTabAnimation>() => R;
    }
  }
}

declare const NSTabAnimation: cocoa.NSTabAnimation.CLASS;
