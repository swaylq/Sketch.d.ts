/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableColor<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    red<R = number>(): R;
    setRed<R = void, P0 = number>(_v: P0): R;
    green<R = number>(): R;
    setGreen<R = void, P0 = number>(_v: P0): R;
    blue<R = number>(): R;
    setBlue<R = void, P0 = number>(_v: P0): R;
    alpha<R = number>(): R;
    setAlpha<R = void, P0 = number>(_v: P0): R;
  }
  namespace _MSImmutableColor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {
      alloc<R = _MSImmutableColor>(): R;
      new: <R = _MSImmutableColor>() => R;
    }
  }
}
