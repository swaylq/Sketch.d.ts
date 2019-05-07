/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRotationGestureRecognizer<T0 = void, T1 = void, T2 = void> extends NSGestureRecognizer {
    setTranslation_inView<R = void, P0 = CGPoint, P1 = unknown>(_setTranslation: P0, _inView: P1): R;
    translationInView<R = CGPoint, P0 = unknown>(_translationInView: P0): R;
    rotationInDegrees<R = number>(): R;
    setRotationInDegrees<R = void, P0 = number>(_v: P0): R;
    rotation<R = number>(): R;
    setRotation<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSRotationGestureRecognizer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSGestureRecognizer {
      alloc<R = NSRotationGestureRecognizer>(): R;
      new: <R = NSRotationGestureRecognizer>() => R;
      keyPathsForValuesAffectingValueForKey<R = unknown, P0 = unknown>(_keyPathsForValuesAffectingValueForKey: P0): R;
    }
  }
}

declare const NSRotationGestureRecognizer: cocoa.NSRotationGestureRecognizer.CLASS;
