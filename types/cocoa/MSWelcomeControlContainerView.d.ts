/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeControlContainerView<T0 = void, T1 = void, T2 = void> extends NSView {
    mouseDownCanMoveWindow<R = boolean>(): R;
  }
  namespace MSWelcomeControlContainerView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSWelcomeControlContainerView>(): R;
      new: <R = MSWelcomeControlContainerView>() => R;
    }
  }
}

declare const MSWelcomeControlContainerView: cocoa.MSWelcomeControlContainerView.CLASS;
