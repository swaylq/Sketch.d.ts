/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableColumnDragInfo<T0 = void, T1 = void, T2 = void> extends NSObject {
    draggedColumnView<R = NSView>(): R;
    setDraggedColumnView<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace NSTableColumnDragInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSTableColumnDragInfo>(): R;
      new: <R = NSTableColumnDragInfo>() => R;
    }
  }
}

declare const NSTableColumnDragInfo: cocoa.NSTableColumnDragInfo.CLASS;
