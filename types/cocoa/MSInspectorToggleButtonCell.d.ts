/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorToggleButtonCell<T0 = void, T1 = void, T2 = void> extends MSInspectorButtonCell {}
  namespace MSInspectorToggleButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorButtonCell {
      alloc<R = MSInspectorToggleButtonCell>(): R;
      new: <R = MSInspectorToggleButtonCell>() => R;
    }
  }
}

declare const MSInspectorToggleButtonCell: cocoa.MSInspectorToggleButtonCell.CLASS;
