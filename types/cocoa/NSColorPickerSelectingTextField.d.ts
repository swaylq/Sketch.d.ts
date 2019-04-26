/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickerSelectingTextField<T0 = void, T1 = void, T2 = void> extends NSTextField {}
  namespace NSColorPickerSelectingTextField {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextField {
      alloc<R = NSColorPickerSelectingTextField>(): R;
      new: <R = NSColorPickerSelectingTextField>() => R;
    }
  }
}

declare const NSColorPickerSelectingTextField: cocoa.NSColorPickerSelectingTextField.CLASS;
