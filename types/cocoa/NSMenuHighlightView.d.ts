/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMenuHighlightView<T0 = void, T1 = void, T2 = void> extends NSView {
    isFlipped<R = boolean>(): R;
    isOpaque<R = boolean>(): R;
    tableView<R = NSTableView>(): R;
    setTableView<R = void, P0 = NSTableView>(_v: P0): R;
  }
  namespace NSMenuHighlightView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSMenuHighlightView>(): R;
      new: <R = NSMenuHighlightView>() => R;
    }
  }
}

declare const NSMenuHighlightView: cocoa.NSMenuHighlightView.CLASS;
