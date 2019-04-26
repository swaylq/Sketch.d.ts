/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOverrideManagementPropertyTitle<T0 = void, T1 = void, T2 = void> extends MSOverrideManagementItem {
    description<R = unknown>(): R;
    title<R = unknown>(): R;
    newController<R = unknown>(): R;
    rowHeight<R = number>(): R;
    previewIcon<R = NSImage>(): R;
  }
  namespace MSOverrideManagementPropertyTitle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSOverrideManagementItem {
      alloc<R = MSOverrideManagementPropertyTitle>(): R;
      new: <R = MSOverrideManagementPropertyTitle>() => R;
    }
  }
}

declare const MSOverrideManagementPropertyTitle: cocoa.MSOverrideManagementPropertyTitle.CLASS;
