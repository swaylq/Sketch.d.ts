/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableUpdateInsertItem<T0 = void, T1 = void, T2 = void> extends NSTableUpdateItem2 {
    dealloc<R = void>(): R;
    viewToAnimateFrom<R = NSTableRowView>(): R;
    setViewToAnimateFrom<R = void, P0 = NSTableRowView>(_v: P0): R;
  }
  namespace NSTableUpdateInsertItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTableUpdateItem2 {
      alloc<R = NSTableUpdateInsertItem>(): R;
      new: <R = NSTableUpdateInsertItem>() => R;
    }
  }
}

declare const NSTableUpdateInsertItem: cocoa.NSTableUpdateInsertItem.CLASS;
