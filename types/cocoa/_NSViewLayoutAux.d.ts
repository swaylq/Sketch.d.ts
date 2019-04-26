/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSViewLayoutAux<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
  }
  namespace _NSViewLayoutAux {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSViewLayoutAux>(): R;
      new: <R = _NSViewLayoutAux>() => R;
    }
  }
}
