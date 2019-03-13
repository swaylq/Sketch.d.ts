/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSExitFullScreenStatusItem<T = any> extends NSStatusItem {
    _initInStatusBar_withLength_withPriority_visible_spaceID<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = boolean, P4 = number>(__initInStatusBar: P0, _withLength: P1, _withPriority: P2, _visible: P3, _spaceID: P4): R;
  }
  namespace classes {
    export interface NSExitFullScreenStatusItem<T = any> extends NSStatusItem {
      alloc<R = NSExitFullScreenStatusItem>(): R;
      new: <R = NSExitFullScreenStatusItem>() => R;
    }
  }
}

declare const NSExitFullScreenStatusItem: cocoa.classes.NSExitFullScreenStatusItem;
