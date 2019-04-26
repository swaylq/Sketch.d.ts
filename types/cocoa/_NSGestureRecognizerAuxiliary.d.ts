/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSGestureRecognizerAuxiliary<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
  }
  namespace _NSGestureRecognizerAuxiliary {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSGestureRecognizerAuxiliary>(): R;
      new: <R = _NSGestureRecognizerAuxiliary>() => R;
    }
  }
}
