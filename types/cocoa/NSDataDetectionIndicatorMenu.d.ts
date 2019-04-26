/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDataDetectionIndicatorMenu<T0 = void, T1 = void, T2 = void> extends NSMenu {
    setDelegate<R = void, P0 = unknown>(_setDelegate: P0): R;
  }
  namespace NSDataDetectionIndicatorMenu {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMenu {
      alloc<R = NSDataDetectionIndicatorMenu>(): R;
      new: <R = NSDataDetectionIndicatorMenu>() => R;
    }
  }
}

declare const NSDataDetectionIndicatorMenu: cocoa.NSDataDetectionIndicatorMenu.CLASS;
