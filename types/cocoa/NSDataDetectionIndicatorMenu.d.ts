/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDataDetectionIndicatorMenu<T = any> extends cocoa.NSMenu {
    setDelegate<R = void, P0 = unknown>(_setDelegate: P0): R;
  }
  namespace classes {
    export interface NSDataDetectionIndicatorMenu<T = any> extends cocoa.classes.NSMenu {
      alloc<R = NSDataDetectionIndicatorMenu>(): R;
      new: <R = NSDataDetectionIndicatorMenu>() => R;
    }
  }
}

declare const NSDataDetectionIndicatorMenu: cocoa.classes.NSDataDetectionIndicatorMenu;
