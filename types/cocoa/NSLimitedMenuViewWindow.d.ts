/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLimitedMenuViewWindow<T0 = void, T1 = void, T2 = void> extends NSWindow {
    isVisible<R = boolean>(): R;
  }
  namespace NSLimitedMenuViewWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindow {
      alloc<R = NSLimitedMenuViewWindow>(): R;
      new: <R = NSLimitedMenuViewWindow>() => R;
    }
  }
}

declare const NSLimitedMenuViewWindow: cocoa.NSLimitedMenuViewWindow.CLASS;
