/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOtherItemsProxyTouchBarItem<T0 = void, T1 = void, T2 = void> extends NSTouchBarItem {}
  namespace NSOtherItemsProxyTouchBarItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTouchBarItem {
      alloc<R = NSOtherItemsProxyTouchBarItem>(): R;
      new: <R = NSOtherItemsProxyTouchBarItem>() => R;
    }
  }
}

declare const NSOtherItemsProxyTouchBarItem: cocoa.NSOtherItemsProxyTouchBarItem.CLASS;
