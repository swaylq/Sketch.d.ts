/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSIncludeBackgroundColorInExportInspectorItem<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {}
  namespace MSIncludeBackgroundColorInExportInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {
      alloc<R = MSIncludeBackgroundColorInExportInspectorItem>(): R;
      new: <R = MSIncludeBackgroundColorInExportInspectorItem>() => R;
    }
  }
}

declare const MSIncludeBackgroundColorInExportInspectorItem: cocoa.MSIncludeBackgroundColorInExportInspectorItem.CLASS;
