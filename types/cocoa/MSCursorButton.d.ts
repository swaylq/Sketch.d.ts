/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCursorButton<T0 = void, T1 = void, T2 = void> extends NSButton {
    cxx_destruct<R = void>(): R;
    cursor<R = NSCursor>(): R;
    setCursor<R = void, P0 = NSCursor>(_v: P0): R;
  }
  namespace MSCursorButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButton {
      alloc<R = MSCursorButton>(): R;
      new: <R = MSCursorButton>() => R;
    }
  }
}

declare const MSCursorButton: cocoa.MSCursorButton.CLASS;
