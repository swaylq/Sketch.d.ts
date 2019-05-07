/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTokenFieldCell<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {}
  namespace NSTokenFieldCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
      alloc<R = NSTokenFieldCell>(): R;
      new: <R = NSTokenFieldCell>() => R;
      defaultCompletionDelay<R = number>(): R;
    }
  }
}

declare const NSTokenFieldCell: cocoa.NSTokenFieldCell.CLASS;
