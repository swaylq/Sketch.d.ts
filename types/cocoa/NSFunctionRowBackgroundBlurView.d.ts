/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFunctionRowBackgroundBlurView<T0 = void, T1 = void, T2 = void> extends NSView {
    setLayer<R = void, P0 = unknown>(_setLayer: P0): R;
    blurRadius<R = number>(): R;
    setBlurRadius<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSFunctionRowBackgroundBlurView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSFunctionRowBackgroundBlurView>(): R;
      new: <R = NSFunctionRowBackgroundBlurView>() => R;
    }
  }
}

declare const NSFunctionRowBackgroundBlurView: cocoa.NSFunctionRowBackgroundBlurView.CLASS;
