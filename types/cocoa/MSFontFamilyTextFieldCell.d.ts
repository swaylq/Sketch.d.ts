/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFontFamilyTextFieldCell<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {}
  namespace MSFontFamilyTextFieldCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
      alloc<R = MSFontFamilyTextFieldCell>(): R;
      new: <R = MSFontFamilyTextFieldCell>() => R;
    }
  }
}

declare const MSFontFamilyTextFieldCell: cocoa.MSFontFamilyTextFieldCell.CLASS;
