/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowMenuItem<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSWindowMenuItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSWindowMenuItem>(): R;
      new: <R = NSWindowMenuItem>() => R;
    }
  }
}

declare const NSWindowMenuItem: cocoa.NSWindowMenuItem.CLASS;
