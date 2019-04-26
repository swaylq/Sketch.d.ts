/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSAutomaticFocusRingState<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    nilFocusTime<R = number>(): R;
    setNilFocusTime<R = void, P0 = number>(_v: P0): R;
    lastNonNilFocusRingView<R = NSView>(): R;
    setLastNonNilFocusRingView<R = void, P0 = NSView>(_v: P0): R;
    alreadyFocusedWindow<R = NSValue>(): R;
    setAlreadyFocusedWindow<R = void, P0 = NSValue>(_v: P0): R;
    animatedFocusRingBounds<R = CGRect>(): R;
    setAnimatedFocusRingBounds<R = void, P0 = CGRect>(_v: P0): R;
    animationTimer<R = NSTimer>(): R;
    setAnimationTimer<R = void, P0 = NSTimer>(_v: P0): R;
    focusRingAnimationStartTime<R = number>(): R;
    setFocusRingAnimationStartTime<R = void, P0 = number>(_v: P0): R;
    previousActiveFirstResponder<R = NSResponder>(): R;
    setPreviousActiveFirstResponder<R = void, P0 = NSResponder>(_v: P0): R;
    automaticFocusRingLayer<R = CALayer>(): R;
    setAutomaticFocusRingLayer<R = void, P0 = CALayer>(_v: P0): R;
    automaticFocusRingRegion<R = NSRegion>(): R;
    setAutomaticFocusRingRegion<R = void, P0 = NSRegion>(_v: P0): R;
    automaticFocusRingWindowRect<R = CGRect>(): R;
    setAutomaticFocusRingWindowRect<R = void, P0 = CGRect>(_v: P0): R;
    automaticFocusRingBitmap<R = NSBitmapImageRep>(): R;
    setAutomaticFocusRingBitmap<R = void, P0 = NSBitmapImageRep>(_v: P0): R;
    automaticFocusRingView<R = NSView>(): R;
    setAutomaticFocusRingView<R = void, P0 = NSView>(_v: P0): R;
    automaticFocusRingNeedsUpdate<R = boolean>(): R;
    setAutomaticFocusRingNeedsUpdate<R = void, P0 = boolean>(_v: P0): R;
    automaticFocusRingShown<R = boolean>(): R;
    setAutomaticFocusRingShown<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace _NSAutomaticFocusRingState {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSAutomaticFocusRingState>(): R;
      new: <R = _NSAutomaticFocusRingState>() => R;
    }
  }
}
