/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDragRectGestureRecognizer<T0 = void, T1 = void, T2 = void> extends MSDragGestureRecognizer {
    constrainProportions<R = boolean>(): R;
  }
  namespace MSDragRectGestureRecognizer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDragGestureRecognizer {
      alloc<R = MSDragRectGestureRecognizer>(): R;
      new: <R = MSDragRectGestureRecognizer>() => R;
    }
  }
}

declare const MSDragRectGestureRecognizer: cocoa.MSDragRectGestureRecognizer.CLASS;
