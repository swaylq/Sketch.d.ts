/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGEllipseShape<T0 = void, T1 = void, T2 = void> extends SVGBasicShape {
    ry<R = number>(): R;
    setRy<R = void, P0 = number>(_v: P0): R;
    rx<R = number>(): R;
    setRx<R = void, P0 = number>(_v: P0): R;
    cy<R = number>(): R;
    setCy<R = void, P0 = number>(_v: P0): R;
    cx<R = number>(): R;
    setCx<R = void, P0 = number>(_v: P0): R;
  }
  namespace _SVGEllipseShape {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends SVGBasicShape {
      alloc<R = _SVGEllipseShape>(): R;
      new: <R = _SVGEllipseShape>() => R;
    }
  }
}
