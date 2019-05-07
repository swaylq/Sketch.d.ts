/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowTab<T0 = void, T1 = void, T2 = void> extends NSObject {
    window<R = NSWindow>(): R;
    setWindow<R = void, P0 = NSWindow>(_v: P0): R;
  }
  namespace NSWindowTab {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSWindowTab>(): R;
      new: <R = NSWindowTab>() => R;
    }
  }
}

declare const NSWindowTab: cocoa.NSWindowTab.CLASS;
