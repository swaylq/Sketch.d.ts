/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorSectionHeaderButtonCell<T0 = void, T1 = void, T2 = void> extends MSInspectorToggleButtonCell {}
  namespace MSInspectorSectionHeaderButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorToggleButtonCell {
      alloc<R = MSInspectorSectionHeaderButtonCell>(): R;
      new: <R = MSInspectorSectionHeaderButtonCell>() => R;
    }
  }
}

declare const MSInspectorSectionHeaderButtonCell: cocoa.MSInspectorSectionHeaderButtonCell.CLASS;
