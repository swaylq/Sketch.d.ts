/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUpDownNanoTextField<T0 = void, T1 = void, T2 = void> extends MSUpDownTextField {}
  namespace MSUpDownNanoTextField {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSUpDownTextField {
      alloc<R = MSUpDownNanoTextField>(): R;
      new: <R = MSUpDownNanoTextField>() => R;
    }
  }
}

declare const MSUpDownNanoTextField: cocoa.MSUpDownNanoTextField.CLASS;
