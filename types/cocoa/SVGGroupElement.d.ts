/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGGroupElement<T0 = void, T1 = void, T2 = void> extends _SVGGroupElement {}
  namespace SVGGroupElement {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _SVGGroupElement {
      alloc<R = SVGGroupElement>(): R;
      new: <R = SVGGroupElement>() => R;
    }
  }
}

declare const SVGGroupElement: cocoa.SVGGroupElement.CLASS;
