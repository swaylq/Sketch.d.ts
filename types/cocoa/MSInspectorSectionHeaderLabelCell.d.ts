/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorSectionHeaderLabelCell<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
    textColor<R = unknown>(): R;
  }
  namespace MSInspectorSectionHeaderLabelCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
      alloc<R = MSInspectorSectionHeaderLabelCell>(): R;
      new: <R = MSInspectorSectionHeaderLabelCell>() => R;
    }
  }
}

declare const MSInspectorSectionHeaderLabelCell: cocoa.MSInspectorSectionHeaderLabelCell.CLASS;
