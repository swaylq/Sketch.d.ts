/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSStyleInnerShadow<T0 = void, T1 = void, T2 = void> extends MSStyleShadow {}
  namespace _MSStyleInnerShadow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSStyleShadow {
      alloc<R = _MSStyleInnerShadow>(): R;
      new: <R = _MSStyleInnerShadow>() => R;
    }
  }
}
