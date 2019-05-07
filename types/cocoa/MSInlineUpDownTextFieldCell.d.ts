/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInlineUpDownTextFieldCell<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
    drawOldFashioned<R = boolean>(): R;
    setDrawOldFashioned<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace MSInlineUpDownTextFieldCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
      alloc<R = MSInlineUpDownTextFieldCell>(): R;
      new: <R = MSInlineUpDownTextFieldCell>() => R;
    }
  }
}

declare const MSInlineUpDownTextFieldCell: cocoa.MSInlineUpDownTextFieldCell.CLASS;
