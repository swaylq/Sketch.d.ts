/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportPreviewHeaderInspectorItem<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {
    configurableView<R = unknown>(): R;
    hideSeparator<R = boolean>(): R;
    setHideSeparator<R = void, P0 = boolean>(_v: P0): R;
    collapsed<R = boolean>(): R;
    setCollapsed<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace MSExportPreviewHeaderInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {
      alloc<R = MSExportPreviewHeaderInspectorItem>(): R;
      new: <R = MSExportPreviewHeaderInspectorItem>() => R;
    }
  }
}

declare const MSExportPreviewHeaderInspectorItem: cocoa.MSExportPreviewHeaderInspectorItem.CLASS;
