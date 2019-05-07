/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSButtonToolbarItem<T0 = void, T1 = void, T2 = void> extends MSToolbarItem {
    toolTip<R = unknown>(): R;
    setToolTip<R = void, P0 = unknown>(_setToolTip: P0): R;
    setImage<R = void, P0 = unknown>(_setImage: P0): R;
  }
  namespace MSButtonToolbarItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSToolbarItem {
      alloc<R = MSButtonToolbarItem>(): R;
      new: <R = MSButtonToolbarItem>() => R;
    }
  }
}

declare const MSButtonToolbarItem: cocoa.MSButtonToolbarItem.CLASS;
