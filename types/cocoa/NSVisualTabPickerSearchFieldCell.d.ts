/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerSearchFieldCell<T0 = void, T1 = void, T2 = void> extends NSSearchFieldCell {}
  namespace NSVisualTabPickerSearchFieldCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSearchFieldCell {
      alloc<R = NSVisualTabPickerSearchFieldCell>(): R;
      new: <R = NSVisualTabPickerSearchFieldCell>() => R;
    }
  }
}

declare const NSVisualTabPickerSearchFieldCell: cocoa.NSVisualTabPickerSearchFieldCell.CLASS;
