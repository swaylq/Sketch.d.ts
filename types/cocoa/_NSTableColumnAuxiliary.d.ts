/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTableColumnAuxiliary<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
  }
  namespace _NSTableColumnAuxiliary {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSTableColumnAuxiliary>(): R;
      new: <R = _NSTableColumnAuxiliary>() => R;
    }
  }
}
