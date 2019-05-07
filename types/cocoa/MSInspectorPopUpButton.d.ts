/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorPopUpButton<T0 = void, T1 = void, T2 = void> extends NSPopUpButton {}
  namespace MSInspectorPopUpButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPopUpButton {
      alloc<R = MSInspectorPopUpButton>(): R;
      new: <R = MSInspectorPopUpButton>() => R;
    }
  }
}

declare const MSInspectorPopUpButton: cocoa.MSInspectorPopUpButton.CLASS;
