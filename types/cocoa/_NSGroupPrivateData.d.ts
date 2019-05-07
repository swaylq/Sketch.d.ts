/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSGroupPrivateData<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
  }
  namespace _NSGroupPrivateData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSGroupPrivateData>(): R;
      new: <R = _NSGroupPrivateData>() => R;
    }
  }
}
