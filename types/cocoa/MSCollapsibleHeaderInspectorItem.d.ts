/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCollapsibleHeaderInspectorItem<T0 = void, T1 = void, T2 = void> extends MSHeaderInspectorItem {
    toggleCollapsed<R = void, P0 = unknown>(_toggleCollapsed: P0): R;
    setDelegate<R = void, P0 = unknown>(_setDelegate: P0): R;
    collapseTarget<R = MSCollapsibleHeaderInspectorItemTarget>(): R;
    setCollapseTarget<R = void, P0 = MSCollapsibleHeaderInspectorItemTarget>(_v: P0): R;
    collapsed<R = boolean>(): R;
    setCollapsed<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace MSCollapsibleHeaderInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSHeaderInspectorItem {
      alloc<R = MSCollapsibleHeaderInspectorItem>(): R;
      new: <R = MSCollapsibleHeaderInspectorItem>() => R;
    }
  }
}

declare const MSCollapsibleHeaderInspectorItem: cocoa.MSCollapsibleHeaderInspectorItem.CLASS;
