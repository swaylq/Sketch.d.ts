/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLayoutGuideAux<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
  }
  namespace _NSLayoutGuideAux {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSLayoutGuideAux>(): R;
      new: <R = _NSLayoutGuideAux>() => R;
    }
  }
}
