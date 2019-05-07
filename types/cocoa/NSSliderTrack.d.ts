/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSliderTrack<T0 = void, T1 = void, T2 = void> extends NSView {
    isFlipped<R = boolean>(): R;
    knobMaskFrame<R = CGRect>(): R;
    setKnobMaskFrame<R = void, P0 = CGRect>(_v: P0): R;
    drawingState<R = unknown>(): R;
    setDrawingState<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace NSSliderTrack {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSSliderTrack>(): R;
      new: <R = NSSliderTrack>() => R;
    }
  }
}

declare const NSSliderTrack: cocoa.NSSliderTrack.CLASS;
