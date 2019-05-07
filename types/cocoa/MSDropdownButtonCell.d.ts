/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDropdownButtonCell<T0 = void, T1 = void, T2 = void> extends MSInspectorPushButtonCell {}
  namespace MSDropdownButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorPushButtonCell {
      alloc<R = MSDropdownButtonCell>(): R;
      new: <R = MSDropdownButtonCell>() => R;
    }
  }
}

declare const MSDropdownButtonCell: cocoa.MSDropdownButtonCell.CLASS;
