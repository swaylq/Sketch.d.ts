/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGBasicShape<T0 = void, T1 = void, T2 = void> extends SVGDrawableElement {}
  namespace _SVGBasicShape {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends SVGDrawableElement {
      alloc<R = _SVGBasicShape>(): R;
      new: <R = _SVGBasicShape>() => R;
    }
  }
}
