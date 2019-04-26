/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInlineUpDownNanoTextField<T0 = void, T1 = void, T2 = void> extends MSInlineUpDownTextField {}
  namespace MSInlineUpDownNanoTextField {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInlineUpDownTextField {
      alloc<R = MSInlineUpDownNanoTextField>(): R;
      new: <R = MSInlineUpDownNanoTextField>() => R;
    }
  }
}

declare const MSInlineUpDownNanoTextField: cocoa.MSInlineUpDownNanoTextField.CLASS;
