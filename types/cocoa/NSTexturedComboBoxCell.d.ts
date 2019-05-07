/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTexturedComboBoxCell<T0 = void, T1 = void, T2 = void> extends NSComboBoxCell {}
  namespace NSTexturedComboBoxCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSComboBoxCell {
      alloc<R = NSTexturedComboBoxCell>(): R;
      new: <R = NSTexturedComboBoxCell>() => R;
    }
  }
}

declare const NSTexturedComboBoxCell: cocoa.NSTexturedComboBoxCell.CLASS;
