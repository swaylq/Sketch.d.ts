/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCWindowBadge<T0 = void, T1 = void, T2 = void> extends NSButton {
    cxx_destruct<R = void>(): R;
    windowDidChangeKeyState<R = void, P0 = unknown>(_windowDidChangeKeyState: P0): R;
    tintColor<R = NSColor>(): R;
    setTintColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace BCWindowBadge {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButton {
      alloc<R = BCWindowBadge>(): R;
      new: <R = BCWindowBadge>() => R;
    }
  }
}

declare const BCWindowBadge: cocoa.BCWindowBadge.CLASS;
