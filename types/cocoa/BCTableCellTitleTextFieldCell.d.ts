/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCTableCellTitleTextFieldCell<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {}
  namespace BCTableCellTitleTextFieldCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
      alloc<R = BCTableCellTitleTextFieldCell>(): R;
      new: <R = BCTableCellTitleTextFieldCell>() => R;
    }
  }
}

declare const BCTableCellTitleTextFieldCell: cocoa.BCTableCellTitleTextFieldCell.CLASS;
