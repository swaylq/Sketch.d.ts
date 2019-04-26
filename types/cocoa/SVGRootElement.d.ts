/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGRootElement<T0 = void, T1 = void, T2 = void> extends _SVGRootElement {}
  namespace SVGRootElement {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _SVGRootElement {
      alloc<R = SVGRootElement>(): R;
      new: <R = SVGRootElement>() => R;
    }
  }
}

declare const SVGRootElement: cocoa.SVGRootElement.CLASS;
