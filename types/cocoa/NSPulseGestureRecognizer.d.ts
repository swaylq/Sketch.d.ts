/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPulseGestureRecognizer<T = any> extends cocoa.NSGestureRecognizer, cocoa.NSCodingProtocol {
    stageTransition<R = number>(): R;
    stage<R = number>(): R;
    pressure<R = number>(): R;
    recognizesOnMouseDown<R = boolean>(): R;
    setRecognizesOnMouseDown<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSPulseGestureRecognizer<T = any> extends cocoa.classes.NSGestureRecognizer, cocoa.classes.NSCodingProtocol {
      alloc<R = NSPulseGestureRecognizer>(): R;
      new: <R = NSPulseGestureRecognizer>() => R;
    }
  }
}

declare const NSPulseGestureRecognizer: cocoa.classes.NSPulseGestureRecognizer;
