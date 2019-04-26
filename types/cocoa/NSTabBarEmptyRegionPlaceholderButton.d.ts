/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabBarEmptyRegionPlaceholderButton<T0 = void, T1 = void, T2 = void> extends NSTabButton, NSTabBarSyncedButtonProtocol {
    syncedWithOtherButton<R = boolean>(): R;
    setSyncedWithOtherButton<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSTabBarEmptyRegionPlaceholderButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTabButton, NSTabBarSyncedButtonProtocol {
      alloc<R = NSTabBarEmptyRegionPlaceholderButton>(): R;
      new: <R = NSTabBarEmptyRegionPlaceholderButton>() => R;
    }
  }
}

declare const NSTabBarEmptyRegionPlaceholderButton: cocoa.NSTabBarEmptyRegionPlaceholderButton.CLASS;
