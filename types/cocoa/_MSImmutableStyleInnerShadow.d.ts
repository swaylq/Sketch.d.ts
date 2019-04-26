/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableStyleInnerShadow<T0 = void, T1 = void, T2 = void> extends MSImmutableStyleShadow {}
  namespace _MSImmutableStyleInnerShadow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableStyleShadow {
      alloc<R = _MSImmutableStyleInnerShadow>(): R;
      new: <R = _MSImmutableStyleInnerShadow>() => R;
    }
  }
}
