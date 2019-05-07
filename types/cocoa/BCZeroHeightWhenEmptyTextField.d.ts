/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCZeroHeightWhenEmptyTextField<T0 = void, T1 = void, T2 = void> extends NSTextField {
    paddingIfNotEmpty<R = number>(): R;
    setPaddingIfNotEmpty<R = void, P0 = number>(_v: P0): R;
  }
  namespace BCZeroHeightWhenEmptyTextField {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextField {
      alloc<R = BCZeroHeightWhenEmptyTextField>(): R;
      new: <R = BCZeroHeightWhenEmptyTextField>() => R;
    }
  }
}

declare const BCZeroHeightWhenEmptyTextField: cocoa.BCZeroHeightWhenEmptyTextField.CLASS;
