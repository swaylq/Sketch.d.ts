/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSButtonBezelView<T0 = void, T1 = void, T2 = void> extends NSWidgetView {}
  namespace NSButtonBezelView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWidgetView {
      alloc<R = NSButtonBezelView>(): R;
      new: <R = NSButtonBezelView>() => R;
    }
  }
}

declare const NSButtonBezelView: cocoa.NSButtonBezelView.CLASS;
