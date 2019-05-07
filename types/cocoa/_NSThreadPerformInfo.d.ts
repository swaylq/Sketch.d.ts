/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSThreadPerformInfo<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
  }
  namespace _NSThreadPerformInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSThreadPerformInfo>(): R;
      new: <R = _NSThreadPerformInfo>() => R;
    }
  }
}
