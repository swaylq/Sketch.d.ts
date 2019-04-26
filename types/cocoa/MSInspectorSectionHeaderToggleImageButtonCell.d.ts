/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorSectionHeaderToggleImageButtonCell<T0 = void, T1 = void, T2 = void> extends MSInspectorToggleImageButtonCell {}
  namespace MSInspectorSectionHeaderToggleImageButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorToggleImageButtonCell {
      alloc<R = MSInspectorSectionHeaderToggleImageButtonCell>(): R;
      new: <R = MSInspectorSectionHeaderToggleImageButtonCell>() => R;
    }
  }
}

declare const MSInspectorSectionHeaderToggleImageButtonCell: cocoa.MSInspectorSectionHeaderToggleImageButtonCell.CLASS;
