/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableRowData<T0 = void, T1 = void, T2 = void> extends NSObject, NSAnimationDelegateProtocol {
    mutableHiddenRowIndexes<R = NSMutableIndexSet>(): R;
  }
  namespace NSTableRowData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSAnimationDelegateProtocol {
      alloc<R = NSTableRowData>(): R;
      new: <R = NSTableRowData>() => R;
    }
  }
}

declare const NSTableRowData: cocoa.NSTableRowData.CLASS;
