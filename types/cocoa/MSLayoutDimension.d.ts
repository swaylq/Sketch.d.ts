/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayoutDimension<T0 = void, T1 = void, T2 = void> extends MSLayoutAnchor {
    length<R = number>(): R;
  }
  namespace MSLayoutDimension {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSLayoutAnchor {
      alloc<R = MSLayoutDimension>(): R;
      new: <R = MSLayoutDimension>() => R;
    }
  }
}

declare const MSLayoutDimension: cocoa.MSLayoutDimension.CLASS;
