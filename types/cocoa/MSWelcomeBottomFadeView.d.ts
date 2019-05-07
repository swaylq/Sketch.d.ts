/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeBottomFadeView<T0 = void, T1 = void, T2 = void> extends MSWelcomeTopFadeView {}
  namespace MSWelcomeBottomFadeView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSWelcomeTopFadeView {
      alloc<R = MSWelcomeBottomFadeView>(): R;
      new: <R = MSWelcomeBottomFadeView>() => R;
    }
  }
}

declare const MSWelcomeBottomFadeView: cocoa.MSWelcomeBottomFadeView.CLASS;
