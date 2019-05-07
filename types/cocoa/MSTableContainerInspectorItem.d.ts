/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTableContainerInspectorItem<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {
    tableView<R = NSTableView>(): R;
    setTableView<R = void, P0 = NSTableView>(_v: P0): R;
  }
  namespace MSTableContainerInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {
      alloc<R = MSTableContainerInspectorItem>(): R;
      new: <R = MSTableContainerInspectorItem>() => R;
    }
  }
}

declare const MSTableContainerInspectorItem: cocoa.MSTableContainerInspectorItem.CLASS;
