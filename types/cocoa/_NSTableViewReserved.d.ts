/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTableViewReserved<T0 = void, T1 = void, T2 = void> extends NSObject {
    highlightedTableColumn<R = NSTableColumn>(): R;
    setHighlightedTableColumn<R = void, P0 = NSTableColumn>(_v: P0): R;
  }
  namespace _NSTableViewReserved {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSTableViewReserved>(): R;
      new: <R = _NSTableViewReserved>() => R;
    }
  }
}
