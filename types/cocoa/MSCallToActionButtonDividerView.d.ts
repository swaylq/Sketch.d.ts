/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCallToActionButtonDividerView<T0 = void, T1 = void, T2 = void> extends NSView {
    cxx_destruct<R = void>(): R;
  }
  namespace MSCallToActionButtonDividerView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSCallToActionButtonDividerView>(): R;
      new: <R = MSCallToActionButtonDividerView>() => R;
    }
  }
}

declare const MSCallToActionButtonDividerView: cocoa.MSCallToActionButtonDividerView.CLASS;
