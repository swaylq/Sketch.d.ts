/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDisplayFadeAndCaptureAnimation<T0 = void, T1 = void, T2 = void> extends NSAnimation {
    _stopAnimation_withDisplayLink<R = void, P0 = number, P1 = unknown>(__stopAnimation: P0, _withDisplayLink: P1): R;
    setCurrentProgress<R = void, P0 = number>(_setCurrentProgress: P0): R;
    startAnimation<R = void>(): R;
    dealloc<R = void>(): R;
    completionHandler<R = CDUnknownBlockType>(): R;
    setCompletionHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    fadeOut<R = boolean>(): R;
    setFadeOut<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace _NSDisplayFadeAndCaptureAnimation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAnimation {
      alloc<R = _NSDisplayFadeAndCaptureAnimation>(): R;
      new: <R = _NSDisplayFadeAndCaptureAnimation>() => R;
    }
  }
}
