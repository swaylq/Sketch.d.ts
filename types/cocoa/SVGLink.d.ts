/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGLink<T0 = void, T1 = void, T2 = void> extends _SVGLink {
    effectiveLayerName<R = unknown>(): R;
  }
  namespace SVGLink {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _SVGLink {
      alloc<R = SVGLink>(): R;
      new: <R = SVGLink>() => R;
    }
  }
}

declare const SVGLink: cocoa.SVGLink.CLASS;
