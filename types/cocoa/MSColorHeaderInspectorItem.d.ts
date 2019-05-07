/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorHeaderInspectorItem<T0 = void, T1 = void, T2 = void> extends MSCollapsibleHeaderInspectorItem {
    updateHeight<R = void>(): R;
    setCollapsed<R = void, P0 = boolean>(_setCollapsed: P0): R;
  }
  namespace MSColorHeaderInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSCollapsibleHeaderInspectorItem {
      alloc<R = MSColorHeaderInspectorItem>(): R;
      new: <R = MSColorHeaderInspectorItem>() => R;
    }
  }
}

declare const MSColorHeaderInspectorItem: cocoa.MSColorHeaderInspectorItem.CLASS;
