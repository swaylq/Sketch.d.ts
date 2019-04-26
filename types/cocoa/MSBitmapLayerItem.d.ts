/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBitmapLayerItem<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {}
  namespace MSBitmapLayerItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {
      alloc<R = MSBitmapLayerItem>(): R;
      new: <R = MSBitmapLayerItem>() => R;
    }
  }
}

declare const MSBitmapLayerItem: cocoa.MSBitmapLayerItem.CLASS;
