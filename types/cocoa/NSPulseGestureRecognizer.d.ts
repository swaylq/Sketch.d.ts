/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPulseGestureRecognizer<T0 = void, T1 = void, T2 = void> extends NSGestureRecognizer, NSCodingProtocol {
    stageTransition<R = number>(): R;
    stage<R = number>(): R;
    pressure<R = number>(): R;
    recognizesOnMouseDown<R = boolean>(): R;
    setRecognizesOnMouseDown<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSPulseGestureRecognizer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSGestureRecognizer, NSCodingProtocol {
      alloc<R = NSPulseGestureRecognizer>(): R;
      new: <R = NSPulseGestureRecognizer>() => R;
    }
  }
}

declare const NSPulseGestureRecognizer: cocoa.NSPulseGestureRecognizer.CLASS;
