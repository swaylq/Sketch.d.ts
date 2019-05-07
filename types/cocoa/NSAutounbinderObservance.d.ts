/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAutounbinderObservance<T0 = void, T1 = void, T2 = void> extends NSObject {
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithObserver_keyPath_context<R = unknown, P0 = unknown, P1 = unknown, P2 = void>(_initWithObserver: P0, _keyPath: P1, _context: P2): R;
  }
  namespace NSAutounbinderObservance {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSAutounbinderObservance>(): R;
      new: <R = NSAutounbinderObservance>() => R;
    }
  }
}

declare const NSAutounbinderObservance: cocoa.NSAutounbinderObservance.CLASS;
