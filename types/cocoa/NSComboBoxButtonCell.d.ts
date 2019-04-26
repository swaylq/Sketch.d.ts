/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSComboBoxButtonCell<T0 = void, T1 = void, T2 = void> extends NSButtonCell {}
  namespace NSComboBoxButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
      alloc<R = NSComboBoxButtonCell>(): R;
      new: <R = NSComboBoxButtonCell>() => R;
    }
  }
}

declare const NSComboBoxButtonCell: cocoa.NSComboBoxButtonCell.CLASS;
