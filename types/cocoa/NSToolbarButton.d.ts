/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarButton<T0 = void, T1 = void, T2 = void> extends NSButton {
    cachedDrawingImage<R = unknown>(): R;
    invalidateCachedDrawingImage<R = void>(): R;
    refusesFirstResponder<R = boolean>(): R;
    sendAction<R = boolean>(): R;
    setImagePosition<R = void, P0 = number>(_setImagePosition: P0): R;
    _item<R = unknown>(): R;
    initWithItem<R = unknown, P0 = unknown>(_initWithItem: P0): R;
  }
  namespace NSToolbarButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButton {
      alloc<R = NSToolbarButton>(): R;
      new: <R = NSToolbarButton>() => R;
    }
  }
}

declare const NSToolbarButton: cocoa.NSToolbarButton.CLASS;
