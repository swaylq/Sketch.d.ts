/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAnimation<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSCodingProtocol {}
  namespace NSAnimation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSCodingProtocol {
      alloc<R = NSAnimation>(): R;
      new: <R = NSAnimation>() => R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSAnimation: cocoa.NSAnimation.CLASS;
