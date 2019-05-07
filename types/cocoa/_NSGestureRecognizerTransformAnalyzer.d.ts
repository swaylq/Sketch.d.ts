/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSGestureRecognizerTransformAnalyzer<T0 = void, T1 = void, T2 = void> extends NSObject {
    analyzeTouches<R = void, P0 = unknown>(_analyzeTouches: P0): R;
    reset<R = void>(): R;
    dominantComponent<R = number>(): R;
    rotationWeight<R = number>(): R;
    setRotationWeight<R = void, P0 = number>(_v: P0): R;
    pinchingWeight<R = number>(): R;
    setPinchingWeight<R = void, P0 = number>(_v: P0): R;
    translationWeight<R = number>(): R;
    setTranslationWeight<R = void, P0 = number>(_v: P0): R;
  }
  namespace _NSGestureRecognizerTransformAnalyzer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSGestureRecognizerTransformAnalyzer>(): R;
      new: <R = _NSGestureRecognizerTransformAnalyzer>() => R;
    }
  }
}
