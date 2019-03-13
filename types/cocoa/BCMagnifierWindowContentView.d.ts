/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCMagnifierWindowContentView<T = any> extends NSView {
    cxx_destruct<R = void>(): R;
    drawMiddlePixel<R = void>(): R;
    drawPixelLines<R = void>(): R;
    drawBlackBorder<R = void, P0 = unknown>(_drawBlackBorder: P0): R;
    drawCurrentColorValues<R = void>(): R;
    drawMagnifiedImage<R = void>(): R;
    currentColor<R = BCFlexibleColor>(): R;
    setCurrentColor<R = void, P0 = BCFlexibleColor>(_v: P0): R;
    screenGrab<R = BCScreenGrab>(): R;
    setScreenGrab<R = void, P0 = BCScreenGrab>(_v: P0): R;
  }
  namespace classes {
    export interface BCMagnifierWindowContentView<T = any> extends NSView {
      alloc<R = BCMagnifierWindowContentView>(): R;
      new: <R = BCMagnifierWindowContentView>() => R;
    }
  }
}

declare const BCMagnifierWindowContentView: cocoa.classes.BCMagnifierWindowContentView;