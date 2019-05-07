/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSButtonTextField<T0 = void, T1 = void, T2 = void> extends NSTextField {}
  namespace NSButtonTextField {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextField {
      alloc<R = NSButtonTextField>(): R;
      new: <R = NSButtonTextField>() => R;
    }
  }
}

declare const NSButtonTextField: cocoa.NSButtonTextField.CLASS;
