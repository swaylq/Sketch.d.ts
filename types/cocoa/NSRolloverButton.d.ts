/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRolloverButton<T0 = void, T1 = void, T2 = void> extends NSButton {
    focusRingMask<R = NSImage>(): R;
    setFocusRingMask<R = void, P0 = NSImage>(_v: P0): R;
  }
  namespace NSRolloverButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButton {
      alloc<R = NSRolloverButton>(): R;
      new: <R = NSRolloverButton>() => R;
    }
  }
}

declare const NSRolloverButton: cocoa.NSRolloverButton.CLASS;
