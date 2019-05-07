/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeClipView<T0 = void, T1 = void, T2 = void> extends NSClipView {
    contentInsets<R = NSEdgeInsets>(): R;
  }
  namespace MSWelcomeClipView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSClipView {
      alloc<R = MSWelcomeClipView>(): R;
      new: <R = MSWelcomeClipView>() => R;
    }
  }
}

declare const MSWelcomeClipView: cocoa.MSWelcomeClipView.CLASS;
