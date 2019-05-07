/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTitleTextFieldCell<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {}
  namespace NSTitleTextFieldCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
      alloc<R = NSTitleTextFieldCell>(): R;
      new: <R = NSTitleTextFieldCell>() => R;
    }
  }
}

declare const NSTitleTextFieldCell: cocoa.NSTitleTextFieldCell.CLASS;
