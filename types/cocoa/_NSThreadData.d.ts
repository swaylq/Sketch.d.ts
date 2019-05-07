/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSThreadData<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace _NSThreadData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSThreadData>(): R;
      new: <R = _NSThreadData>() => R;
    }
  }
}
