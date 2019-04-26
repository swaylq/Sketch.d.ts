/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSVerticallyCenteredTextFieldCell<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
    rectForTextDrawing<R = CGRect, P0 = CGRect>(_rectForTextDrawing: P0): R;
  }
  namespace MSVerticallyCenteredTextFieldCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
      alloc<R = MSVerticallyCenteredTextFieldCell>(): R;
      new: <R = MSVerticallyCenteredTextFieldCell>() => R;
    }
  }
}

declare const MSVerticallyCenteredTextFieldCell: cocoa.MSVerticallyCenteredTextFieldCell.CLASS;
