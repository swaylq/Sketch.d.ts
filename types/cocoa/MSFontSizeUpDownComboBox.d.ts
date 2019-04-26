/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFontSizeUpDownComboBox<T0 = void, T1 = void, T2 = void> extends MSUpDownComboBox {}
  namespace MSFontSizeUpDownComboBox {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSUpDownComboBox {
      alloc<R = MSFontSizeUpDownComboBox>(): R;
      new: <R = MSFontSizeUpDownComboBox>() => R;
    }
  }
}

declare const MSFontSizeUpDownComboBox: cocoa.MSFontSizeUpDownComboBox.CLASS;
