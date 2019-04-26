/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNibOutletConnector<T0 = void, T1 = void, T2 = void> extends NSNibConnector {
    _shouldUseSelector_forOutlet_source<R = boolean, P0 = string, P1 = unknown, P2 = unknown>(__shouldUseSelector: P0, _forOutlet: P1, _source: P2): R;
  }
  namespace NSNibOutletConnector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSNibConnector {
      alloc<R = NSNibOutletConnector>(): R;
      new: <R = NSNibOutletConnector>() => R;
    }
  }
}

declare const NSNibOutletConnector: cocoa.NSNibOutletConnector.CLASS;
