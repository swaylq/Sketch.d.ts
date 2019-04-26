/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableUpdateMoveItem<T0 = void, T1 = void, T2 = void> extends NSTableUpdateItem2 {
    initMoveWithOriginalRow<R = unknown, P0 = number>(_initMoveWithOriginalRow: P0): R;
    initMoveWithOriginalRow_animation<R = unknown, P0 = number, P1 = number>(_initMoveWithOriginalRow: P0, _animation: P1): R;
  }
  namespace NSTableUpdateMoveItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTableUpdateItem2 {
      alloc<R = NSTableUpdateMoveItem>(): R;
      new: <R = NSTableUpdateMoveItem>() => R;
    }
  }
}

declare const NSTableUpdateMoveItem: cocoa.NSTableUpdateMoveItem.CLASS;
