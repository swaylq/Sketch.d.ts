/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGTitle<T0 = void, T1 = void, T2 = void> extends SVGElement {}
  namespace SVGTitle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends SVGElement {
      alloc<R = SVGTitle>(): R;
      new: <R = SVGTitle>() => R;
    }
  }
}

declare const SVGTitle: cocoa.SVGTitle.CLASS;
