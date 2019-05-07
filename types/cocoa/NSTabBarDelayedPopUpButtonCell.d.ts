/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabBarDelayedPopUpButtonCell<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
    cxx_destruct<R = void>(): R;
    _displayDelayedMenu<R = void>(): R;
    displayOffsetContextualMenu<R = void>(): R;
    _invalidateMenuTimer<R = void>(): R;
    _menuDelayTime<R = number>(): R;
  }
  namespace NSTabBarDelayedPopUpButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
      alloc<R = NSTabBarDelayedPopUpButtonCell>(): R;
      new: <R = NSTabBarDelayedPopUpButtonCell>() => R;
    }
  }
}

declare const NSTabBarDelayedPopUpButtonCell: cocoa.NSTabBarDelayedPopUpButtonCell.CLASS;
