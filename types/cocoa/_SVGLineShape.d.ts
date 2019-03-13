/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGLineShape<T = any> extends SVGBasicShape {
    y2<R = number>(): R;
    setY2<R = void, P0 = number>(_v: P0): R;
    y1<R = number>(): R;
    setY1<R = void, P0 = number>(_v: P0): R;
    x2<R = number>(): R;
    setX2<R = void, P0 = number>(_v: P0): R;
    x1<R = number>(): R;
    setX1<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _SVGLineShape<T = any> extends SVGBasicShape {
      alloc<R = _SVGLineShape>(): R;
      new: <R = _SVGLineShape>() => R;
    }
  }
}
