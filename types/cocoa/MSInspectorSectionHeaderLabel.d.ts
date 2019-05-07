/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorSectionHeaderLabel<T0 = void, T1 = void, T2 = void> extends NSTextField {}
  namespace MSInspectorSectionHeaderLabel {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextField {
      alloc<R = MSInspectorSectionHeaderLabel>(): R;
      new: <R = MSInspectorSectionHeaderLabel>() => R;
    }
  }
}

declare const MSInspectorSectionHeaderLabel: cocoa.MSInspectorSectionHeaderLabel.CLASS;
