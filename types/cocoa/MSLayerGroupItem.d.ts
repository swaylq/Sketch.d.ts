/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerGroupItem<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {
    views<R = unknown>(): R;
  }
  namespace MSLayerGroupItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {
      alloc<R = MSLayerGroupItem>(): R;
      new: <R = MSLayerGroupItem>() => R;
    }
  }
}

declare const MSLayerGroupItem: cocoa.MSLayerGroupItem.CLASS;
