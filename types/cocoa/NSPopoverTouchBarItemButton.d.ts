/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPopoverTouchBarItemButton<T0 = void, T1 = void, T2 = void> extends NSButton {
    classForCoder<R = unknown>(): R;
  }
  namespace NSPopoverTouchBarItemButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButton {
      alloc<R = NSPopoverTouchBarItemButton>(): R;
      new: <R = NSPopoverTouchBarItemButton>() => R;
    }
  }
}

declare const NSPopoverTouchBarItemButton: cocoa.NSPopoverTouchBarItemButton.CLASS;
