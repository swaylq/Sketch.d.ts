/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTreeDetailBinder<T0 = void, T1 = void, T2 = void> extends NSArrayDetailBinder {}
  namespace NSTreeDetailBinder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSArrayDetailBinder {
      alloc<R = NSTreeDetailBinder>(): R;
      new: <R = NSTreeDetailBinder>() => R;
    }
  }
}

declare const NSTreeDetailBinder: cocoa.NSTreeDetailBinder.CLASS;
