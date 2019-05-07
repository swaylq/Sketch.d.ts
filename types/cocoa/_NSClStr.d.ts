/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSClStr<T0 = void, T1 = void, T2 = void> extends NSString {
    length<R = number>(): R;
    dealloc<R = void>(): R;
  }
  namespace _NSClStr {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSString {
      alloc<R = _NSClStr>(): R;
      new: <R = _NSClStr>() => R;
    }
  }
}
