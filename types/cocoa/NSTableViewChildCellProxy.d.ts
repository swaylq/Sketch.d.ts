/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableViewChildCellProxy<T0 = void, T1 = void, T2 = void> extends NSTableViewCellProxy {
    realElementRect<R = CGRect>(): R;
    initWithRow_tableColumn_realElement<R = unknown, P0 = number, P1 = unknown, P2 = unknown>(_initWithRow: P0, _tableColumn: P1, _realElement: P2): R;
  }
  namespace NSTableViewChildCellProxy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTableViewCellProxy {
      alloc<R = NSTableViewChildCellProxy>(): R;
      new: <R = NSTableViewChildCellProxy>() => R;
    }
  }
}

declare const NSTableViewChildCellProxy: cocoa.NSTableViewChildCellProxy.CLASS;
