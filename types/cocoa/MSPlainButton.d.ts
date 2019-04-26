/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPlainButton<T0 = void, T1 = void, T2 = void> extends MSHoverButton {}
  namespace MSPlainButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSHoverButton {
      alloc<R = MSPlainButton>(): R;
      new: <R = MSPlainButton>() => R;
    }
  }
}

declare const MSPlainButton: cocoa.MSPlainButton.CLASS;
