/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFixedPanGestureRecognizer<T0 = void, T1 = void, T2 = void> extends NSPanGestureRecognizer {}
  namespace MSFixedPanGestureRecognizer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPanGestureRecognizer {
      alloc<R = MSFixedPanGestureRecognizer>(): R;
      new: <R = MSFixedPanGestureRecognizer>() => R;
    }
  }
}

declare const MSFixedPanGestureRecognizer: cocoa.MSFixedPanGestureRecognizer.CLASS;
