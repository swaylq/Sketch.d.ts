/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCellView<T0 = void, T1 = void, T2 = void> extends NSControl {}
  namespace NSCellView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSControl {
      alloc<R = NSCellView>(): R;
      new: <R = NSCellView>() => R;
    }
  }
}

declare const NSCellView: cocoa.NSCellView.CLASS;
