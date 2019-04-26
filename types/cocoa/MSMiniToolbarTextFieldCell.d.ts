/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMiniToolbarTextFieldCell<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {}
  namespace MSMiniToolbarTextFieldCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
      alloc<R = MSMiniToolbarTextFieldCell>(): R;
      new: <R = MSMiniToolbarTextFieldCell>() => R;
    }
  }
}

declare const MSMiniToolbarTextFieldCell: cocoa.MSMiniToolbarTextFieldCell.CLASS;
