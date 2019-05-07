/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSStyleBorder<T0 = void, T1 = void, T2 = void> extends MSStyleBasicFill {
    thickness<R = number>(): R;
    setThickness<R = void, P0 = number>(_v: P0): R;
    position<R = number>(): R;
    setPosition<R = void, P0 = number>(_v: P0): R;
  }
  namespace _MSStyleBorder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSStyleBasicFill {
      alloc<R = _MSStyleBorder>(): R;
      new: <R = _MSStyleBorder>() => R;
    }
  }
}
