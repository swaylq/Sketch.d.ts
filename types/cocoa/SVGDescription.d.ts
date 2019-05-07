/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGDescription<T0 = void, T1 = void, T2 = void> extends SVGElement {}
  namespace SVGDescription {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends SVGElement {
      alloc<R = SVGDescription>(): R;
      new: <R = SVGDescription>() => R;
    }
  }
}

declare const SVGDescription: cocoa.SVGDescription.CLASS;
