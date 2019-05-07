/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouch<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    deviceSize<R = CGSize>(): R;
  }
  namespace NSTouch {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = NSTouch>(): R;
      new: <R = NSTouch>() => R;
    }
  }
}

declare const NSTouch: cocoa.NSTouch.CLASS;
