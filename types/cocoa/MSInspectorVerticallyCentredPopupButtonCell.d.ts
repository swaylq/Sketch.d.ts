/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorVerticallyCentredPopupButtonCell<T0 = void, T1 = void, T2 = void> extends MSInspectorPopUpButtonCell {}
  namespace MSInspectorVerticallyCentredPopupButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorPopUpButtonCell {
      alloc<R = MSInspectorVerticallyCentredPopupButtonCell>(): R;
      new: <R = MSInspectorVerticallyCentredPopupButtonCell>() => R;
    }
  }
}

declare const MSInspectorVerticallyCentredPopupButtonCell: cocoa.MSInspectorVerticallyCentredPopupButtonCell.CLASS;
