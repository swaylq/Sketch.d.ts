/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSButtonTextFieldCell<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {}
  namespace NSButtonTextFieldCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
      alloc<R = NSButtonTextFieldCell>(): R;
      new: <R = NSButtonTextFieldCell>() => R;
    }
  }
}

declare const NSButtonTextFieldCell: cocoa.NSButtonTextFieldCell.CLASS;
