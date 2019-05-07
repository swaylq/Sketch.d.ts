/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerButtonCell<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
    useExternalHitTesting<R = boolean>(): R;
    setUseExternalHitTesting<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSVisualTabPickerButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
      alloc<R = NSVisualTabPickerButtonCell>(): R;
      new: <R = NSVisualTabPickerButtonCell>() => R;
    }
  }
}

declare const NSVisualTabPickerButtonCell: cocoa.NSVisualTabPickerButtonCell.CLASS;
