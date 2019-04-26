/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabBarNewTabButton<T0 = void, T1 = void, T2 = void> extends NSButton, NSDraggingDestinationProtocol, NSTabBarSyncedButtonProtocol {}
  namespace NSTabBarNewTabButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButton, NSDraggingDestinationProtocol, NSTabBarSyncedButtonProtocol {
      alloc<R = NSTabBarNewTabButton>(): R;
      new: <R = NSTabBarNewTabButton>() => R;
      width<R = number>(): R;
    }
  }
}

declare const NSTabBarNewTabButton: cocoa.NSTabBarNewTabButton.CLASS;
