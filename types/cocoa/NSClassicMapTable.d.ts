/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSClassicMapTable<T0 = void, T1 = void, T2 = void> extends NSMapTable {
    count<R = number>(): R;
    dealloc<R = void>(): R;
  }
  namespace NSClassicMapTable {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMapTable {
      alloc<R = NSClassicMapTable>(): R;
      new: <R = NSClassicMapTable>() => R;
    }
  }
}

declare const NSClassicMapTable: cocoa.NSClassicMapTable.CLASS;
