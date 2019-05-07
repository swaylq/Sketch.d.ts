/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAcceleratorGestureRecognizer<T0 = void, T1 = void, T2 = void> extends NSGestureRecognizer, NSCodingProtocol {
    stage<R = number>(): R;
    pressure<R = number>(): R;
  }
  namespace NSAcceleratorGestureRecognizer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSGestureRecognizer, NSCodingProtocol {
      alloc<R = NSAcceleratorGestureRecognizer>(): R;
      new: <R = NSAcceleratorGestureRecognizer>() => R;
    }
  }
}

declare const NSAcceleratorGestureRecognizer: cocoa.NSAcceleratorGestureRecognizer.CLASS;
