/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSEmptyColorGamut<T0 = void, T1 = void, T2 = void> extends NSColorGamut {
    volume<R = number>(): R;
    isInfinite<R = boolean>(): R;
    isEmpty<R = boolean>(): R;
  }
  namespace _NSEmptyColorGamut {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSColorGamut {
      alloc<R = _NSEmptyColorGamut>(): R;
      new: <R = _NSEmptyColorGamut>() => R;
    }
  }
}
