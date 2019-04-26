/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSeparatorInspectorItem<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {}
  namespace MSSeparatorInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {
      alloc<R = MSSeparatorInspectorItem>(): R;
      new: <R = MSSeparatorInspectorItem>() => R;
    }
  }
}

declare const MSSeparatorInspectorItem: cocoa.MSSeparatorInspectorItem.CLASS;
