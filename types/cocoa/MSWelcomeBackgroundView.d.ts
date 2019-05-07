/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeBackgroundView<T0 = void, T1 = void, T2 = void> extends NSView {
    mouseDownCanMoveWindow<R = boolean>(): R;
  }
  namespace MSWelcomeBackgroundView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSWelcomeBackgroundView>(): R;
      new: <R = MSWelcomeBackgroundView>() => R;
    }
  }
}

declare const MSWelcomeBackgroundView: cocoa.MSWelcomeBackgroundView.CLASS;
