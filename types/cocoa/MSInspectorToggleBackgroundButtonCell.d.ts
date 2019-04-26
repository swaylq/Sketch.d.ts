/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorToggleBackgroundButtonCell<T0 = void, T1 = void, T2 = void> extends MSInspectorButtonCell {}
  namespace MSInspectorToggleBackgroundButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorButtonCell {
      alloc<R = MSInspectorToggleBackgroundButtonCell>(): R;
      new: <R = MSInspectorToggleBackgroundButtonCell>() => R;
    }
  }
}

declare const MSInspectorToggleBackgroundButtonCell: cocoa.MSInspectorToggleBackgroundButtonCell.CLASS;
