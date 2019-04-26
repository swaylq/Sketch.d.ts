/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGRectangleShape<T0 = void, T1 = void, T2 = void> extends SVGBasicShape {
    cornerRadius<R = number>(): R;
    setCornerRadius<R = void, P0 = number>(_v: P0): R;
  }
  namespace _SVGRectangleShape {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends SVGBasicShape {
      alloc<R = _SVGRectangleShape>(): R;
      new: <R = _SVGRectangleShape>() => R;
    }
  }
}
