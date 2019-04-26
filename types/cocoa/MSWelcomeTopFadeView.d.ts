/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeTopFadeView<T0 = void, T1 = void, T2 = void> extends NSView {
    gradientAngle<R = number>(): R;
  }
  namespace MSWelcomeTopFadeView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSWelcomeTopFadeView>(): R;
      new: <R = MSWelcomeTopFadeView>() => R;
    }
  }
}

declare const MSWelcomeTopFadeView: cocoa.MSWelcomeTopFadeView.CLASS;
