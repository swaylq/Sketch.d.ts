/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableHeaderCellView<T0 = void, T1 = void, T2 = void> extends NSView {
    _commonInit<R = void>(): R;
    selected<R = boolean>(): R;
    setSelected<R = void, P0 = boolean>(_v: P0): R;
    tableHeaderView<R = NSTableHeaderView>(): R;
    setTableHeaderView<R = void, P0 = NSTableHeaderView>(_v: P0): R;
    cell<R = NSCell>(): R;
    setCell<R = void, P0 = NSCell>(_v: P0): R;
  }
  namespace NSTableHeaderCellView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSTableHeaderCellView>(): R;
      new: <R = NSTableHeaderCellView>() => R;
    }
  }
}

declare const NSTableHeaderCellView: cocoa.NSTableHeaderCellView.CLASS;
