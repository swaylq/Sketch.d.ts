/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGClipPath<T0 = void, T1 = void, T2 = void> extends _SVGClipPath {}
  namespace SVGClipPath {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _SVGClipPath {
      alloc<R = SVGClipPath>(): R;
      new: <R = SVGClipPath>() => R;
    }
  }
}

declare const SVGClipPath: cocoa.SVGClipPath.CLASS;
