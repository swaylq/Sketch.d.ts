/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeDebugView<T0 = void, T1 = void, T2 = void> extends NSView {}
  namespace MSWelcomeDebugView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSWelcomeDebugView>(): R;
      new: <R = MSWelcomeDebugView>() => R;
    }
  }
}

declare const MSWelcomeDebugView: cocoa.MSWelcomeDebugView.CLASS;
