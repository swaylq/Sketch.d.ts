/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabSearchFilterOperation<T0 = void, T1 = void, T2 = void> extends NSOperation {
    tabInfo<R = NSArray>(): R;
    setTabInfo<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace NSTabSearchFilterOperation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSOperation {
      alloc<R = NSTabSearchFilterOperation>(): R;
      new: <R = NSTabSearchFilterOperation>() => R;
    }
  }
}

declare const NSTabSearchFilterOperation: cocoa.NSTabSearchFilterOperation.CLASS;
