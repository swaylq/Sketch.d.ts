/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSZoomPopUpButton<T0 = void, T1 = void, T2 = void> extends NSPopUpButton {}
  namespace MSZoomPopUpButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPopUpButton {
      alloc<R = MSZoomPopUpButton>(): R;
      new: <R = MSZoomPopUpButton>() => R;
    }
  }
}

declare const MSZoomPopUpButton: cocoa.MSZoomPopUpButton.CLASS;
