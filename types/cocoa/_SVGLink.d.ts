/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGLink<T0 = void, T1 = void, T2 = void> extends SVGDrawableElement {
    primitiveSetLink<R = void, P0 = unknown>(_primitiveSetLink: P0): R;
    link<R = SVGElement>(): R;
    setLink<R = void, P0 = SVGElement>(_v: P0): R;
  }
  namespace _SVGLink {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends SVGDrawableElement {
      alloc<R = _SVGLink>(): R;
      new: <R = _SVGLink>() => R;
    }
  }
}
