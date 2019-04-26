/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSImageCellPlugin<T0 = void, T1 = void, T2 = void> extends _NSImageViewPlugin {}
  namespace _NSImageCellPlugin {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSImageViewPlugin {
      alloc<R = _NSImageCellPlugin>(): R;
      new: <R = _NSImageCellPlugin>() => R;
    }
  }
}
