/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGImage<T0 = void, T1 = void, T2 = void> extends _SVGImage {}
  namespace SVGImage {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _SVGImage {
      alloc<R = SVGImage>(): R;
      new: <R = SVGImage>() => R;
      initialize<R = void>(): R;
    }
  }
}

declare const SVGImage: cocoa.SVGImage.CLASS;
