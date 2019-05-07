/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarSidebarItem<T0 = void, T1 = void, T2 = void> extends NSToolbarItem {
    dealloc<R = void>(): R;
    configureForDisplayMode_andSizeMode<R = void, P0 = number, P1 = number>(_configureForDisplayMode: P0, _andSizeMode: P1): R;
    validate<R = void>(): R;
  }
  namespace NSToolbarSidebarItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSToolbarItem {
      alloc<R = NSToolbarSidebarItem>(): R;
      new: <R = NSToolbarSidebarItem>() => R;
    }
  }
}

declare const NSToolbarSidebarItem: cocoa.NSToolbarSidebarItem.CLASS;
