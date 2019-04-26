/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleResizeButtonCell<T0 = void, T1 = void, T2 = void> extends NSButtonCell {}
  namespace MSToggleResizeButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
      alloc<R = MSToggleResizeButtonCell>(): R;
      new: <R = MSToggleResizeButtonCell>() => R;
    }
  }
}

declare const MSToggleResizeButtonCell: cocoa.MSToggleResizeButtonCell.CLASS;
