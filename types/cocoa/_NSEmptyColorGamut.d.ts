/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSEmptyColorGamut<T = any> extends NSColorGamut {
    volume<R = number>(): R;
    isInfinite<R = boolean>(): R;
    isEmpty<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSEmptyColorGamut<T = any> extends NSColorGamut {
      alloc<R = _NSEmptyColorGamut>(): R;
      new: <R = _NSEmptyColorGamut>() => R;
    }
  }
}