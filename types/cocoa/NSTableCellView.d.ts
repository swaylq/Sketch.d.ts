/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableCellView<T0 = void, T1 = void, T2 = void> extends NSView {
    objectValue<R = unknown>(): R;
    setObjectValue<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace NSTableCellView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSTableCellView>(): R;
      new: <R = NSTableCellView>() => R;
    }
  }
}

declare const NSTableCellView: cocoa.NSTableCellView.CLASS;
