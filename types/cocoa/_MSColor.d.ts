/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSColor<T0 = void, T1 = void, T2 = void> extends MSModelObject {
    hasDefaultValues<R = boolean>(): R;
    setRed<R = void, P0 = number>(_setRed: P0): R;
    setGreen<R = void, P0 = number>(_setGreen: P0): R;
    setBlue<R = void, P0 = number>(_setBlue: P0): R;
    setAlpha<R = void, P0 = number>(_setAlpha: P0): R;
    red<R = number>(): R;
    green<R = number>(): R;
    blue<R = number>(): R;
    alpha<R = number>(): R;
  }
  namespace _MSColor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSModelObject {
      alloc<R = _MSColor>(): R;
      new: <R = _MSColor>() => R;
    }
  }
}
