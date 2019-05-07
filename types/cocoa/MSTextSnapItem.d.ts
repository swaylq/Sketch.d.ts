/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextSnapItem<T0 = void, T1 = void, T2 = void> extends MSSnapItem {
    supportsResizingForSnapping<R = boolean>(): R;
  }
  namespace MSTextSnapItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSnapItem {
      alloc<R = MSTextSnapItem>(): R;
      new: <R = MSTextSnapItem>() => R;
    }
  }
}

declare const MSTextSnapItem: cocoa.MSTextSnapItem.CLASS;
