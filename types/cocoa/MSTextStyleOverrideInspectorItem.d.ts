/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextStyleOverrideInspectorItem<T0 = void, T1 = void, T2 = void> extends MSStyleOverrideInspectorItem {
    menuObjectProvider<R = unknown>(): R;
  }
  namespace MSTextStyleOverrideInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSStyleOverrideInspectorItem {
      alloc<R = MSTextStyleOverrideInspectorItem>(): R;
      new: <R = MSTextStyleOverrideInspectorItem>() => R;
    }
  }
}

declare const MSTextStyleOverrideInspectorItem: cocoa.MSTextStyleOverrideInspectorItem.CLASS;
