/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CHVerticallyCentredPopupButtonCell<T0 = void, T1 = void, T2 = void> extends NSPopUpButtonCell {}
  namespace CHVerticallyCentredPopupButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPopUpButtonCell {
      alloc<R = CHVerticallyCentredPopupButtonCell>(): R;
      new: <R = CHVerticallyCentredPopupButtonCell>() => R;
    }
  }
}

declare const CHVerticallyCentredPopupButtonCell: cocoa.CHVerticallyCentredPopupButtonCell.CLASS;
