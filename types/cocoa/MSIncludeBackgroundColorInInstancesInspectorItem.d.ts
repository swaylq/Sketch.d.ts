/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSIncludeBackgroundColorInInstancesInspectorItem<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {}
  namespace MSIncludeBackgroundColorInInstancesInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {
      alloc<R = MSIncludeBackgroundColorInInstancesInspectorItem>(): R;
      new: <R = MSIncludeBackgroundColorInInstancesInspectorItem>() => R;
    }
  }
}

declare const MSIncludeBackgroundColorInInstancesInspectorItem: cocoa.MSIncludeBackgroundColorInInstancesInspectorItem.CLASS;
