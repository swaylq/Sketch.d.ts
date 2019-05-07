/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCTableViewCellButtonCell<T0 = void, T1 = void, T2 = void> extends NSButtonCell {}
  namespace BCTableViewCellButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
      alloc<R = BCTableViewCellButtonCell>(): R;
      new: <R = BCTableViewCellButtonCell>() => R;
    }
  }
}

declare const BCTableViewCellButtonCell: cocoa.BCTableViewCellButtonCell.CLASS;
