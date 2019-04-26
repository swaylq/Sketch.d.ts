/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorHighlightBackgroundButtonCell<T0 = void, T1 = void, T2 = void> extends MSInspectorButtonCell {}
  namespace MSInspectorHighlightBackgroundButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorButtonCell {
      alloc<R = MSInspectorHighlightBackgroundButtonCell>(): R;
      new: <R = MSInspectorHighlightBackgroundButtonCell>() => R;
    }
  }
}

declare const MSInspectorHighlightBackgroundButtonCell: cocoa.MSInspectorHighlightBackgroundButtonCell.CLASS;
