/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStyleInnerShadow<T0 = void, T1 = void, T2 = void> extends _MSStyleInnerShadow {
    colorEqualApproximately<R = boolean>(): R;
  }
  namespace MSStyleInnerShadow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSStyleInnerShadow {
      alloc<R = MSStyleInnerShadow>(): R;
      new: <R = MSStyleInnerShadow>() => R;
    }
  }
}

declare const MSStyleInnerShadow: cocoa.MSStyleInnerShadow.CLASS;
