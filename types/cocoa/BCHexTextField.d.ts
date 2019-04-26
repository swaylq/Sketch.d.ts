/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCHexTextField<T0 = void, T1 = void, T2 = void> extends NSTextField {}
  namespace BCHexTextField {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextField {
      alloc<R = BCHexTextField>(): R;
      new: <R = BCHexTextField>() => R;
    }
  }
}

declare const BCHexTextField: cocoa.BCHexTextField.CLASS;
