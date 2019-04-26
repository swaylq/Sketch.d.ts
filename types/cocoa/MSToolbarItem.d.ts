/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToolbarItem<T0 = void, T1 = void, T2 = void> extends NSToolbarItem {
    makeViewForAction<R = unknown, P0 = unknown>(_makeViewForAction: P0): R;
    initWithAction<R = unknown, P0 = unknown>(_initWithAction: P0): R;
  }
  namespace MSToolbarItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSToolbarItem {
      alloc<R = MSToolbarItem>(): R;
      new: <R = MSToolbarItem>() => R;
    }
  }
}

declare const MSToolbarItem: cocoa.MSToolbarItem.CLASS;
