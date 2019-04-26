/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSViewAuxiliary<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
  }
  namespace _NSViewAuxiliary {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSViewAuxiliary>(): R;
      new: <R = _NSViewAuxiliary>() => R;
    }
  }
}
