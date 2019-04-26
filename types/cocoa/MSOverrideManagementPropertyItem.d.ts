/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOverrideManagementPropertyItem<T0 = void, T1 = void, T2 = void> extends MSOverrideManagementItem {
    description<R = unknown>(): R;
    title<R = unknown>(): R;
    newController<R = unknown>(): R;
    rowHeight<R = number>(): R;
    canOverride<R = boolean>(): R;
    setCanOverride<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace MSOverrideManagementPropertyItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSOverrideManagementItem {
      alloc<R = MSOverrideManagementPropertyItem>(): R;
      new: <R = MSOverrideManagementPropertyItem>() => R;
    }
  }
}

declare const MSOverrideManagementPropertyItem: cocoa.MSOverrideManagementPropertyItem.CLASS;
