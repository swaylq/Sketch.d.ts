/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabBarNewTabButtonCell<T0 = void, T1 = void, T2 = void> extends NSTabBarDelayedPopUpButtonCell {}
  namespace NSTabBarNewTabButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTabBarDelayedPopUpButtonCell {
      alloc<R = NSTabBarNewTabButtonCell>(): R;
      new: <R = NSTabBarNewTabButtonCell>() => R;
    }
  }
}

declare const NSTabBarNewTabButtonCell: cocoa.NSTabBarNewTabButtonCell.CLASS;
