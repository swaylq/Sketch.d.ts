/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSliderCircularKnob<T0 = void, T1 = void, T2 = void> extends NSView {
    isFlipped<R = boolean>(): R;
    drawingState<R = unknown>(): R;
    setDrawingState<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace NSSliderCircularKnob {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSSliderCircularKnob>(): R;
      new: <R = NSSliderCircularKnob>() => R;
    }
  }
}

declare const NSSliderCircularKnob: cocoa.NSSliderCircularKnob.CLASS;
