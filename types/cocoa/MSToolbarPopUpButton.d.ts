/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToolbarPopUpButton<T0 = void, T1 = void, T2 = void> extends NSPopUpButton {}
  namespace MSToolbarPopUpButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPopUpButton {
      alloc<R = MSToolbarPopUpButton>(): R;
      new: <R = MSToolbarPopUpButton>() => R;
    }
  }
}

declare const MSToolbarPopUpButton: cocoa.MSToolbarPopUpButton.CLASS;
