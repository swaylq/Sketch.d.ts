/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolTip<T0 = void, T1 = void, T2 = void> extends NSObject {
    setData<R = void, P0 = void>(_setData: P0): R;
    data<R = void>(): R;
    description<R = unknown>(): R;
    isTemporary<R = boolean>(): R;
    dealloc<R = void>(): R;
  }
  namespace NSToolTip {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSToolTip>(): R;
      new: <R = NSToolTip>() => R;
    }
  }
}

declare const NSToolTip: cocoa.NSToolTip.CLASS;
