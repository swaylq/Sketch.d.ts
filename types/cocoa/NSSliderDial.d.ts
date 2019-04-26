/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSliderDial<T0 = void, T1 = void, T2 = void> extends NSView {
    isFlipped<R = boolean>(): R;
    drawingState<R = unknown>(): R;
    setDrawingState<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace NSSliderDial {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSSliderDial>(): R;
      new: <R = NSSliderDial>() => R;
    }
  }
}

declare const NSSliderDial: cocoa.NSSliderDial.CLASS;
