/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorLeftAlignedPopUp<T0 = void, T1 = void, T2 = void> extends NSPopUpButton {}
  namespace MSInspectorLeftAlignedPopUp {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPopUpButton {
      alloc<R = MSInspectorLeftAlignedPopUp>(): R;
      new: <R = MSInspectorLeftAlignedPopUp>() => R;
    }
  }
}

declare const MSInspectorLeftAlignedPopUp: cocoa.MSInspectorLeftAlignedPopUp.CLASS;
