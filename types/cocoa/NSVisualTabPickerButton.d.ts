/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerButton<T0 = void, T1 = void, T2 = void> extends NSButton {
    useExternalHitTesting<R = boolean>(): R;
    setUseExternalHitTesting<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSVisualTabPickerButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButton {
      alloc<R = NSVisualTabPickerButton>(): R;
      new: <R = NSVisualTabPickerButton>() => R;
    }
  }
}

declare const NSVisualTabPickerButton: cocoa.NSVisualTabPickerButton.CLASS;
