/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPageControllerPrivateData<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
  }
  namespace _NSPageControllerPrivateData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSPageControllerPrivateData>(): R;
      new: <R = _NSPageControllerPrivateData>() => R;
    }
  }
}
