/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCellView<T = any> extends cocoa.NSControl {}
  namespace classes {
    export interface NSCellView<T = any> extends cocoa.classes.NSControl {
      alloc<R = NSCellView>(): R;
      new: <R = NSCellView>() => R;
    }
  }
}

declare const NSCellView: cocoa.classes.NSCellView;
