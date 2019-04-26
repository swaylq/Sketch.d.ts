/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPopUpToolbarItem<T0 = void, T1 = void, T2 = void> extends MSToolbarItem {}
  namespace MSPopUpToolbarItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSToolbarItem {
      alloc<R = MSPopUpToolbarItem>(): R;
      new: <R = MSPopUpToolbarItem>() => R;
    }
  }
}

declare const MSPopUpToolbarItem: cocoa.MSPopUpToolbarItem.CLASS;
