/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCallToActionButton<T0 = void, T1 = void, T2 = void> extends MSHoverButton {}
  namespace MSCallToActionButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSHoverButton {
      alloc<R = MSCallToActionButton>(): R;
      new: <R = MSCallToActionButton>() => R;
    }
  }
}

declare const MSCallToActionButton: cocoa.MSCallToActionButton.CLASS;
