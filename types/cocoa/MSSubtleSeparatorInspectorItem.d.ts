/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSubtleSeparatorInspectorItem<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {}
  namespace MSSubtleSeparatorInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {
      alloc<R = MSSubtleSeparatorInspectorItem>(): R;
      new: <R = MSSubtleSeparatorInspectorItem>() => R;
    }
  }
}

declare const MSSubtleSeparatorInspectorItem: cocoa.MSSubtleSeparatorInspectorItem.CLASS;
