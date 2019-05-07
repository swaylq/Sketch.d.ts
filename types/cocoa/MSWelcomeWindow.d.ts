/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeWindow<T0 = void, T1 = void, T2 = void> extends NSWindow {
    canBecomeKeyWindow<R = boolean>(): R;
    canBecomeMainWindow<R = boolean>(): R;
  }
  namespace MSWelcomeWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindow {
      alloc<R = MSWelcomeWindow>(): R;
      new: <R = MSWelcomeWindow>() => R;
    }
  }
}

declare const MSWelcomeWindow: cocoa.MSWelcomeWindow.CLASS;
