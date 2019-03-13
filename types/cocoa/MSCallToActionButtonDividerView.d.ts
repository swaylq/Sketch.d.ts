/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCallToActionButtonDividerView<T = any> extends NSView {
    cxx_destruct<R = void>(): R;
  }
  namespace classes {
    export interface MSCallToActionButtonDividerView<T = any> extends NSView {
      alloc<R = MSCallToActionButtonDividerView>(): R;
      new: <R = MSCallToActionButtonDividerView>() => R;
    }
  }
}

declare const MSCallToActionButtonDividerView: cocoa.classes.MSCallToActionButtonDividerView;