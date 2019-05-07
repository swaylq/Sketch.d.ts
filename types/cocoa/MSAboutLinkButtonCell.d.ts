/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAboutLinkButtonCell<T0 = void, T1 = void, T2 = void> extends MSHoverButtonCell {}
  namespace MSAboutLinkButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSHoverButtonCell {
      alloc<R = MSAboutLinkButtonCell>(): R;
      new: <R = MSAboutLinkButtonCell>() => R;
    }
  }
}

declare const MSAboutLinkButtonCell: cocoa.MSAboutLinkButtonCell.CLASS;
