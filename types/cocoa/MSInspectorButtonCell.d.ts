/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorButtonCell<T0 = void, T1 = void, T2 = void> extends NSButtonCell {}
  namespace MSInspectorButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
      alloc<R = MSInspectorButtonCell>(): R;
      new: <R = MSInspectorButtonCell>() => R;
    }
  }
}

declare const MSInspectorButtonCell: cocoa.MSInspectorButtonCell.CLASS;
