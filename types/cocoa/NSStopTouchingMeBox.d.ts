/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStopTouchingMeBox<T0 = void, T1 = void, T2 = void> extends NSBox {
    tile<R = void>(): R;
    setOffset<R = void, P0 = number>(_setOffset: P0): R;
    setSibling2<R = void, P0 = unknown>(_setSibling2: P0): R;
    setSibling1<R = void, P0 = unknown>(_setSibling1: P0): R;
  }
  namespace NSStopTouchingMeBox {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSBox {
      alloc<R = NSStopTouchingMeBox>(): R;
      new: <R = NSStopTouchingMeBox>() => R;
    }
  }
}

declare const NSStopTouchingMeBox: cocoa.NSStopTouchingMeBox.CLASS;
