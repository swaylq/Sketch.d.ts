/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAboutLinkButton<T0 = void, T1 = void, T2 = void> extends MSHoverButton {}
  namespace MSAboutLinkButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSHoverButton {
      alloc<R = MSAboutLinkButton>(): R;
      new: <R = MSAboutLinkButton>() => R;
    }
  }
}

declare const MSAboutLinkButton: cocoa.MSAboutLinkButton.CLASS;
