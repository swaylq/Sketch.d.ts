/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabViewLabelCell<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {}
  namespace NSTabViewLabelCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
      alloc<R = NSTabViewLabelCell>(): R;
      new: <R = NSTabViewLabelCell>() => R;
    }
  }
}

declare const NSTabViewLabelCell: cocoa.NSTabViewLabelCell.CLASS;
