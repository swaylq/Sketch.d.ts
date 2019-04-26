/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTexturedComboBox<T0 = void, T1 = void, T2 = void> extends NSComboBox {
    _cui_optionsForCurrentState<R = unknown>(): R;
  }
  namespace NSTexturedComboBox {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSComboBox {
      alloc<R = NSTexturedComboBox>(): R;
      new: <R = NSTexturedComboBox>() => R;
    }
  }
}

declare const NSTexturedComboBox: cocoa.NSTexturedComboBox.CLASS;
