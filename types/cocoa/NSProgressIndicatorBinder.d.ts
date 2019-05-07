/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSProgressIndicatorBinder<T0 = void, T1 = void, T2 = void> extends NSViewStateBinder {}
  namespace NSProgressIndicatorBinder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewStateBinder {
      alloc<R = NSProgressIndicatorBinder>(): R;
      new: <R = NSProgressIndicatorBinder>() => R;
    }
  }
}

declare const NSProgressIndicatorBinder: cocoa.NSProgressIndicatorBinder.CLASS;
