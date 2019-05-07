/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFontFamilyButtonCell<T0 = void, T1 = void, T2 = void> extends NSButtonCell {}
  namespace MSFontFamilyButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
      alloc<R = MSFontFamilyButtonCell>(): R;
      new: <R = MSFontFamilyButtonCell>() => R;
    }
  }
}

declare const MSFontFamilyButtonCell: cocoa.MSFontFamilyButtonCell.CLASS;
