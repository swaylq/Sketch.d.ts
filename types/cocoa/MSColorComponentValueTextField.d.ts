/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorComponentValueTextField<T0 = void, T1 = void, T2 = void> extends MSUpDownTextField {
    counterpart<R = MSColorComponentValueTextField>(): R;
    setCounterpart<R = void, P0 = MSColorComponentValueTextField>(_v: P0): R;
  }
  namespace MSColorComponentValueTextField {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSUpDownTextField {
      alloc<R = MSColorComponentValueTextField>(): R;
      new: <R = MSColorComponentValueTextField>() => R;
    }
  }
}

declare const MSColorComponentValueTextField: cocoa.MSColorComponentValueTextField.CLASS;
