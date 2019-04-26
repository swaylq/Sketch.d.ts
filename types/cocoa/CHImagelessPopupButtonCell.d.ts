/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CHImagelessPopupButtonCell<T0 = void, T1 = void, T2 = void> extends NSPopUpButtonCell {}
  namespace CHImagelessPopupButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPopUpButtonCell {
      alloc<R = CHImagelessPopupButtonCell>(): R;
      new: <R = CHImagelessPopupButtonCell>() => R;
    }
  }
}

declare const CHImagelessPopupButtonCell: cocoa.CHImagelessPopupButtonCell.CLASS;
