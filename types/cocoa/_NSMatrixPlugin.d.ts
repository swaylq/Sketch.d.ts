/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSMatrixPlugin<T0 = void, T1 = void, T2 = void> extends _NSSelectionBinderPlugin {}
  namespace _NSMatrixPlugin {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSSelectionBinderPlugin {
      alloc<R = _NSMatrixPlugin>(): R;
      new: <R = _NSMatrixPlugin>() => R;
    }
  }
}
