/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSGestureRecognizerAuxiliary<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
  }
  namespace classes {
    export interface _NSGestureRecognizerAuxiliary<T = any> extends NSObject {
      alloc<R = _NSGestureRecognizerAuxiliary>(): R;
      new: <R = _NSGestureRecognizerAuxiliary>() => R;
    }
  }
}