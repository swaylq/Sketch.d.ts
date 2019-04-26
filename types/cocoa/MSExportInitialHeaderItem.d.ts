/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportInitialHeaderItem<T0 = void, T1 = void, T2 = void> extends MSHeaderInspectorItem {}
  namespace MSExportInitialHeaderItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSHeaderInspectorItem {
      alloc<R = MSExportInitialHeaderItem>(): R;
      new: <R = MSExportInitialHeaderItem>() => R;
    }
  }
}

declare const MSExportInitialHeaderItem: cocoa.MSExportInitialHeaderItem.CLASS;
