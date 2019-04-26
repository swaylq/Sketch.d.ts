/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPrintThumbnailBaseView<T0 = void, T1 = void, T2 = void> extends NSView {
    _setNextKeyView<R = void, P0 = unknown>(__setNextKeyView: P0): R;
    _initialKeyView<R = unknown>(): R;
  }
  namespace _NSPrintThumbnailBaseView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSPrintThumbnailBaseView>(): R;
      new: <R = _NSPrintThumbnailBaseView>() => R;
    }
  }
}
