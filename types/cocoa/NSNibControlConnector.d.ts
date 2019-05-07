/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNibControlConnector<T0 = void, T1 = void, T2 = void> extends NSNibConnector {}
  namespace NSNibControlConnector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSNibConnector {
      alloc<R = NSNibControlConnector>(): R;
      new: <R = NSNibControlConnector>() => R;
    }
  }
}

declare const NSNibControlConnector: cocoa.NSNibControlConnector.CLASS;
