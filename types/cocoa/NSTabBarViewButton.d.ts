/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabBarViewButton<T0 = void, T1 = void, T2 = void> extends _NSKeyLoopSplicingContainerView {
    nonVibrantContentView<R = NSView>(): R;
  }
  namespace NSTabBarViewButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSKeyLoopSplicingContainerView {
      alloc<R = NSTabBarViewButton>(): R;
      new: <R = NSTabBarViewButton>() => R;
    }
  }
}

declare const NSTabBarViewButton: cocoa.NSTabBarViewButton.CLASS;
