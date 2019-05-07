/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSImageAuxiliary<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
  }
  namespace _NSImageAuxiliary {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSImageAuxiliary>(): R;
      new: <R = _NSImageAuxiliary>() => R;
    }
  }
}
