/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerToolbarButton<T0 = void, T1 = void, T2 = void> extends NSRolloverButton {}
  namespace NSVisualTabPickerToolbarButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSRolloverButton {
      alloc<R = NSVisualTabPickerToolbarButton>(): R;
      new: <R = NSVisualTabPickerToolbarButton>() => R;
    }
  }
}

declare const NSVisualTabPickerToolbarButton: cocoa.NSVisualTabPickerToolbarButton.CLASS;
