/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGRootElement<T0 = void, T1 = void, T2 = void> extends SVGGroupElement {
    width<R = number>(): R;
    setWidth<R = void, P0 = number>(_v: P0): R;
    height<R = number>(): R;
    setHeight<R = void, P0 = number>(_v: P0): R;
  }
  namespace _SVGRootElement {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends SVGGroupElement {
      alloc<R = _SVGRootElement>(): R;
      new: <R = _SVGRootElement>() => R;
    }
  }
}
