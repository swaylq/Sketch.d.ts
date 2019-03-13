/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSViewAuxiliary<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
  }
  namespace classes {
    export interface _NSViewAuxiliary<T = any> extends NSObject {
      alloc<R = _NSViewAuxiliary>(): R;
      new: <R = _NSViewAuxiliary>() => R;
    }
  }
}