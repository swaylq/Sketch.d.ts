/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWrapperCellView<T0 = void, T1 = void, T2 = void> extends NSView {
    setBackgroundStyle<R = void, P0 = number>(_setBackgroundStyle: P0): R;
    wantsDefaultClipping<R = boolean>(): R;
    isOpaque<R = boolean>(): R;
    setObjectValue<R = void, P0 = unknown>(_setObjectValue: P0): R;
    _enclosingTableView<R = unknown>(): R;
    allowsVibrancy<R = boolean>(): R;
    cell<R = NSCell>(): R;
    setCell<R = void, P0 = NSCell>(_v: P0): R;
    groupRowStyle<R = boolean>(): R;
    setGroupRowStyle<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSWrapperCellView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSWrapperCellView>(): R;
      new: <R = NSWrapperCellView>() => R;
      cellClass<R = unknown>(): R;
    }
  }
}

declare const NSWrapperCellView: cocoa.NSWrapperCellView.CLASS;
