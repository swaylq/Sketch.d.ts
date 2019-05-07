/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUpDownMiniTextField<T0 = void, T1 = void, T2 = void> extends MSUpDownTextField {}
  namespace MSUpDownMiniTextField {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSUpDownTextField {
      alloc<R = MSUpDownMiniTextField>(): R;
      new: <R = MSUpDownMiniTextField>() => R;
    }
  }
}

declare const MSUpDownMiniTextField: cocoa.MSUpDownMiniTextField.CLASS;
