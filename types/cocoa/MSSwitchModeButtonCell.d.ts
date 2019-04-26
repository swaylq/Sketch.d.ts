/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSwitchModeButtonCell<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
    drawSelectionBackgroundInRect<R = void, P0 = CGRect>(_drawSelectionBackgroundInRect: P0): R;
  }
  namespace MSSwitchModeButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
      alloc<R = MSSwitchModeButtonCell>(): R;
      new: <R = MSSwitchModeButtonCell>() => R;
    }
  }
}

declare const MSSwitchModeButtonCell: cocoa.MSSwitchModeButtonCell.CLASS;
