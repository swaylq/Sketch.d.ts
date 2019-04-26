/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGestureRecognizerTarget<T0 = void, T1 = void, T2 = void> extends NSObject {
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
  }
  namespace NSGestureRecognizerTarget {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSGestureRecognizerTarget>(): R;
      new: <R = NSGestureRecognizerTarget>() => R;
    }
  }
}

declare const NSGestureRecognizerTarget: cocoa.NSGestureRecognizerTarget.CLASS;
