/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableCellViewAux<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSTableCellViewAux {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSTableCellViewAux>(): R;
      new: <R = NSTableCellViewAux>() => R;
    }
  }
}

declare const NSTableCellViewAux: cocoa.NSTableCellViewAux.CLASS;
