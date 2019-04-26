/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerStyleOverrideInspectorItem<T0 = void, T1 = void, T2 = void> extends MSStyleOverrideInspectorItem {
    menuObjectProvider<R = unknown>(): R;
  }
  namespace MSLayerStyleOverrideInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSStyleOverrideInspectorItem {
      alloc<R = MSLayerStyleOverrideInspectorItem>(): R;
      new: <R = MSLayerStyleOverrideInspectorItem>() => R;
    }
  }
}

declare const MSLayerStyleOverrideInspectorItem: cocoa.MSLayerStyleOverrideInspectorItem.CLASS;
