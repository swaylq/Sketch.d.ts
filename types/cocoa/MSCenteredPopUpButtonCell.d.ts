/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCenteredPopUpButtonCell<T0 = void, T1 = void, T2 = void> extends NSPopUpButtonCell {
    correctedTitle<R = unknown, P0 = unknown>(_correctedTitle: P0): R;
  }
  namespace MSCenteredPopUpButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPopUpButtonCell {
      alloc<R = MSCenteredPopUpButtonCell>(): R;
      new: <R = MSCenteredPopUpButtonCell>() => R;
    }
  }
}

declare const MSCenteredPopUpButtonCell: cocoa.MSCenteredPopUpButtonCell.CLASS;
