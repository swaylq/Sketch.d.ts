/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCTableCellPopUpButtonCell<T0 = void, T1 = void, T2 = void> extends NSPopUpButtonCell {
    nudgeControlView_by<R = void, P0 = unknown, P1 = number>(_nudgeControlView: P0, _by: P1): R;
  }
  namespace BCTableCellPopUpButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPopUpButtonCell {
      alloc<R = BCTableCellPopUpButtonCell>(): R;
      new: <R = BCTableCellPopUpButtonCell>() => R;
    }
  }
}

declare const BCTableCellPopUpButtonCell: cocoa.BCTableCellPopUpButtonCell.CLASS;
