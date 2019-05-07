/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSliderTickMarks<T0 = void, T1 = void, T2 = void> extends NSView {
    cxx_destruct<R = void>(): R;
    isFlipped<R = boolean>(): R;
    drawingState<R = unknown>(): R;
    setDrawingState<R = void, P0 = unknown>(_v: P0): R;
    delegate<R = NSSliderTickMarksDelegate>(): R;
    setDelegate<R = void, P0 = NSSliderTickMarksDelegate>(_v: P0): R;
  }
  namespace NSSliderTickMarks {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSSliderTickMarks>(): R;
      new: <R = NSSliderTickMarks>() => R;
    }
  }
}

declare const NSSliderTickMarks: cocoa.NSSliderTickMarks.CLASS;
