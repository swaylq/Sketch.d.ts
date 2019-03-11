/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSInfiniteColorGamut<T = any> extends cocoa.NSColorGamut {
    volume<R = number>(): R;
    isInfinite<R = boolean>(): R;
    isEmpty<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSInfiniteColorGamut<T = any> extends cocoa.classes.NSColorGamut {
      alloc<R = _NSInfiniteColorGamut>(): R;
      new: <R = _NSInfiniteColorGamut>() => R;
    }
  }
}
