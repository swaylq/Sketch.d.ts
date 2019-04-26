/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabButton<T0 = void, T1 = void, T2 = void> extends NSTabBarViewButton, _NSVibrancyTransitioningImageViewDelegateProtocol, NSRolloverButtonDelegateProtocol {}
  namespace NSTabButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTabBarViewButton, _NSVibrancyTransitioningImageViewDelegateProtocol, NSRolloverButtonDelegateProtocol {
      alloc<R = NSTabButton>(): R;
      new: <R = NSTabButton>() => R;
      _titleFont<R = unknown>(): R;
    }
  }
}

declare const NSTabButton: cocoa.NSTabButton.CLASS;
