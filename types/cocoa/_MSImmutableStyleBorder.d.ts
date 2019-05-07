/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableStyleBorder<T0 = void, T1 = void, T2 = void> extends MSImmutableStyleBasicFill {
    thickness<R = number>(): R;
    setThickness<R = void, P0 = number>(_v: P0): R;
    position<R = number>(): R;
    setPosition<R = void, P0 = number>(_v: P0): R;
  }
  namespace _MSImmutableStyleBorder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableStyleBasicFill {
      alloc<R = _MSImmutableStyleBorder>(): R;
      new: <R = _MSImmutableStyleBorder>() => R;
    }
  }
}
