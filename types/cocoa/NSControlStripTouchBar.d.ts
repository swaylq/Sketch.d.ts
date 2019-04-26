/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSControlStripTouchBar<T0 = void, T1 = void, T2 = void> extends NSTouchBar {
    _persistWithItemIdentifiers_toDomain<R = void, P0 = unknown, P1 = unknown>(__persistWithItemIdentifiers: P0, _toDomain: P1): R;
    _resetCustomization<R = void>(): R;
  }
  namespace NSControlStripTouchBar {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTouchBar {
      alloc<R = NSControlStripTouchBar>(): R;
      new: <R = NSControlStripTouchBar>() => R;
    }
  }
}

declare const NSControlStripTouchBar: cocoa.NSControlStripTouchBar.CLASS;
