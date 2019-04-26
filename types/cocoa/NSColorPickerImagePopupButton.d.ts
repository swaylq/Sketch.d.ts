/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickerImagePopupButton<T0 = void, T1 = void, T2 = void> extends NSPopUpButton {}
  namespace NSColorPickerImagePopupButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPopUpButton {
      alloc<R = NSColorPickerImagePopupButton>(): R;
      new: <R = NSColorPickerImagePopupButton>() => R;
    }
  }
}

declare const NSColorPickerImagePopupButton: cocoa.NSColorPickerImagePopupButton.CLASS;
