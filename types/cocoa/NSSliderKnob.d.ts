/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSliderKnob<T0 = void, T1 = void, T2 = void> extends NSView {
    isFlipped<R = boolean>(): R;
    maskOnly<R = boolean>(): R;
    setMaskOnly<R = void, P0 = boolean>(_v: P0): R;
    drawingState<R = unknown>(): R;
    setDrawingState<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace NSSliderKnob {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSSliderKnob>(): R;
      new: <R = NSSliderKnob>() => R;
    }
  }
}

declare const NSSliderKnob: cocoa.NSSliderKnob.CLASS;
