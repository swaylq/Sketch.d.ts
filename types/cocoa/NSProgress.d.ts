/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSProgress<T0 = void, T1 = void, T2 = void> extends NSObject, NSProgressPublisherProtocol {}
  namespace NSProgress {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSProgressPublisherProtocol {
      alloc<R = NSProgress>(): R;
      new: <R = NSProgress>() => R;
      _serverConnection<R = unknown>(): R;
    }
  }
}

declare const NSProgress: cocoa.NSProgress.CLASS;
