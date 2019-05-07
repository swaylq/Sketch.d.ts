/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorToggleImageButtonCell<T0 = void, T1 = void, T2 = void> extends MSInspectorButtonCell {}
  namespace MSInspectorToggleImageButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorButtonCell {
      alloc<R = MSInspectorToggleImageButtonCell>(): R;
      new: <R = MSInspectorToggleImageButtonCell>() => R;
    }
  }
}

declare const MSInspectorToggleImageButtonCell: cocoa.MSInspectorToggleImageButtonCell.CLASS;
