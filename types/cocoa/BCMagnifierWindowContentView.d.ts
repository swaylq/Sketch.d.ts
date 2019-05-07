/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCMagnifierWindowContentView<T0 = void, T1 = void, T2 = void> extends NSView {
    cxx_destruct<R = void>(): R;
    drawMiddlePixel<R = void>(): R;
    drawPixelLines<R = void>(): R;
    drawBlackBorder<R = void, P0 = unknown>(_drawBlackBorder: P0): R;
    drawCurrentColorValues<R = void>(): R;
    drawMagnifiedImage<R = void>(): R;
    currentColor<R = MSFlexibleColor>(): R;
    setCurrentColor<R = void, P0 = MSFlexibleColor>(_v: P0): R;
    screenGrab<R = BCScreenGrab>(): R;
    setScreenGrab<R = void, P0 = BCScreenGrab>(_v: P0): R;
  }
  namespace BCMagnifierWindowContentView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = BCMagnifierWindowContentView>(): R;
      new: <R = BCMagnifierWindowContentView>() => R;
    }
  }
}

declare const BCMagnifierWindowContentView: cocoa.BCMagnifierWindowContentView.CLASS;
