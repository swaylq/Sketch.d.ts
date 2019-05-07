/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedSymbolStylesInspectorItem<T0 = void, T1 = void, T2 = void> extends MSSharedStylesInspectorItem {}
  namespace MSSharedSymbolStylesInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSharedStylesInspectorItem {
      alloc<R = MSSharedSymbolStylesInspectorItem>(): R;
      new: <R = MSSharedSymbolStylesInspectorItem>() => R;
    }
  }
}

declare const MSSharedSymbolStylesInspectorItem: cocoa.MSSharedSymbolStylesInspectorItem.CLASS;
