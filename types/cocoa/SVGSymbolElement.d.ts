/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGSymbolElement<T0 = void, T1 = void, T2 = void> extends _SVGSymbolElement {}
  namespace SVGSymbolElement {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _SVGSymbolElement {
      alloc<R = SVGSymbolElement>(): R;
      new: <R = SVGSymbolElement>() => R;
    }
  }
}

declare const SVGSymbolElement: cocoa.SVGSymbolElement.CLASS;
