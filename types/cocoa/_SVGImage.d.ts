/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGImage<T0 = void, T1 = void, T2 = void> extends SVGDrawableElement {
    image<R = NSImage>(): R;
    setImage<R = void, P0 = NSImage>(_v: P0): R;
  }
  namespace _SVGImage {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends SVGDrawableElement {
      alloc<R = _SVGImage>(): R;
      new: <R = _SVGImage>() => R;
    }
  }
}
