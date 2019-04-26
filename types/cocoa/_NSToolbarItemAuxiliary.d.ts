/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarItemAuxiliary<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
  }
  namespace _NSToolbarItemAuxiliary {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSToolbarItemAuxiliary>(): R;
      new: <R = _NSToolbarItemAuxiliary>() => R;
    }
  }
}
