/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarCloudSharingItem<T0 = void, T1 = void, T2 = void> extends NSToolbarItem {
    dealloc<R = void>(): R;
    configureForDisplayMode_andSizeMode<R = void, P0 = number, P1 = number>(_configureForDisplayMode: P0, _andSizeMode: P1): R;
    validate<R = void>(): R;
    _setShared<R = void, P0 = boolean>(__setShared: P0): R;
  }
  namespace NSToolbarCloudSharingItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSToolbarItem {
      alloc<R = NSToolbarCloudSharingItem>(): R;
      new: <R = NSToolbarCloudSharingItem>() => R;
    }
  }
}

declare const NSToolbarCloudSharingItem: cocoa.NSToolbarCloudSharingItem.CLASS;
