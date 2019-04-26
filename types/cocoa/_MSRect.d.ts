/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSRect<T0 = void, T1 = void, T2 = void> extends MSModelObject {
    hasDefaultValues<R = boolean>(): R;
    y<R = number>(): R;
    setY<R = void, P0 = number>(_v: P0): R;
    x<R = number>(): R;
    setX<R = void, P0 = number>(_v: P0): R;
    width<R = number>(): R;
    setWidth<R = void, P0 = number>(_v: P0): R;
    height<R = number>(): R;
    setHeight<R = void, P0 = number>(_v: P0): R;
    constrainProportions<R = boolean>(): R;
    setConstrainProportions<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace _MSRect {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSModelObject {
      alloc<R = _MSRect>(): R;
      new: <R = _MSRect>() => R;
    }
  }
}
