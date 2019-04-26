/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSWindowData<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace __NSWindowData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = __NSWindowData>(): R;
      new: <R = __NSWindowData>() => R;
    }
  }
}
