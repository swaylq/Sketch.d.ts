/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGStyle<T0 = void, T1 = void, T2 = void> extends SVGElement {}
  namespace SVGStyle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends SVGElement {
      alloc<R = SVGStyle>(): R;
      new: <R = SVGStyle>() => R;
    }
  }
}

declare const SVGStyle: cocoa.SVGStyle.CLASS;
