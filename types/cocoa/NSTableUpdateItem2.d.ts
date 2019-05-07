/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableUpdateItem2<T0 = void, T1 = void, T2 = void> extends NSObject {
    description<R = unknown>(): R;
    initWithRowAnimation<R = unknown, P0 = number>(_initWithRowAnimation: P0): R;
    originalRow<R = number>(): R;
    setOriginalRow<R = void, P0 = number>(_v: P0): R;
    rowAnimation<R = number>(): R;
  }
  namespace NSTableUpdateItem2 {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSTableUpdateItem2>(): R;
      new: <R = NSTableUpdateItem2>() => R;
    }
  }
}

declare const NSTableUpdateItem2: cocoa.NSTableUpdateItem2.CLASS;
