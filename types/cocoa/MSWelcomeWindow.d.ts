/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeWindow<T = any> extends cocoa.NSWindow {
    canBecomeKeyWindow<R = boolean>(): R;
    canBecomeMainWindow<R = boolean>(): R;
  }
  namespace classes {
    export interface MSWelcomeWindow<T = any> extends cocoa.classes.NSWindow {
      alloc<R = MSWelcomeWindow>(): R;
      new: <R = MSWelcomeWindow>() => R;
    }
  }
}

declare const MSWelcomeWindow: cocoa.classes.MSWelcomeWindow;
