/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReplacementFontPickerViewController<T0 = void, T1 = void, T2 = void> extends MSFontFamilyPickerViewController {
    nibName<R = unknown>(): R;
  }
  namespace MSReplacementFontPickerViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSFontFamilyPickerViewController {
      alloc<R = MSReplacementFontPickerViewController>(): R;
      new: <R = MSReplacementFontPickerViewController>() => R;
    }
  }
}

declare const MSReplacementFontPickerViewController: cocoa.MSReplacementFontPickerViewController.CLASS;
