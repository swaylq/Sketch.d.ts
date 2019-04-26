/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrollViewNotResponsive<T0 = void, T1 = void, T2 = void> extends NSScrollView {}
  namespace NSScrollViewNotResponsive {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScrollView {
      alloc<R = NSScrollViewNotResponsive>(): R;
      new: <R = NSScrollViewNotResponsive>() => R;
    }
  }
}

declare const NSScrollViewNotResponsive: cocoa.NSScrollViewNotResponsive.CLASS;
