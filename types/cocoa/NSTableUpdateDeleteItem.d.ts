/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableUpdateDeleteItem<T0 = void, T1 = void, T2 = void> extends NSTableUpdateItem2 {
    dealloc<R = void>(): R;
    viewToDelete<R = NSTableRowView>(): R;
    setViewToDelete<R = void, P0 = NSTableRowView>(_v: P0): R;
  }
  namespace NSTableUpdateDeleteItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTableUpdateItem2 {
      alloc<R = NSTableUpdateDeleteItem>(): R;
      new: <R = NSTableUpdateDeleteItem>() => R;
    }
  }
}

declare const NSTableUpdateDeleteItem: cocoa.NSTableUpdateDeleteItem.CLASS;
