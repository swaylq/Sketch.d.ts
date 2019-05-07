/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPopoverDismisserView<T0 = void, T1 = void, T2 = void> extends NSView {}
  namespace MSPopoverDismisserView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSPopoverDismisserView>(): R;
      new: <R = MSPopoverDismisserView>() => R;
    }
  }
}

declare const MSPopoverDismisserView: cocoa.MSPopoverDismisserView.CLASS;
