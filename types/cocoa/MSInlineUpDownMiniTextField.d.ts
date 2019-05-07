/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInlineUpDownMiniTextField<T0 = void, T1 = void, T2 = void> extends MSInlineUpDownTextField {}
  namespace MSInlineUpDownMiniTextField {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInlineUpDownTextField {
      alloc<R = MSInlineUpDownMiniTextField>(): R;
      new: <R = MSInlineUpDownMiniTextField>() => R;
    }
  }
}

declare const MSInlineUpDownMiniTextField: cocoa.MSInlineUpDownMiniTextField.CLASS;
