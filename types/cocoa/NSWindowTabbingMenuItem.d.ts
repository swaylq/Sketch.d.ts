/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowTabbingMenuItem<T0 = void, T1 = void, T2 = void> extends NSMenuItem {}
  namespace NSWindowTabbingMenuItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMenuItem {
      alloc<R = NSWindowTabbingMenuItem>(): R;
      new: <R = NSWindowTabbingMenuItem>() => R;
    }
  }
}

declare const NSWindowTabbingMenuItem: cocoa.NSWindowTabbingMenuItem.CLASS;
