/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsetSeparatorInspectorItem<T0 = void, T1 = void, T2 = void> extends MSSeparatorInspectorItem {}
  namespace MSInsetSeparatorInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSeparatorInspectorItem {
      alloc<R = MSInsetSeparatorInspectorItem>(): R;
      new: <R = MSInsetSeparatorInspectorItem>() => R;
    }
  }
}

declare const MSInsetSeparatorInspectorItem: cocoa.MSInsetSeparatorInspectorItem.CLASS;
