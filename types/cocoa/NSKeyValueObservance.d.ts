/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueObservance<T0 = void, T1 = void, T2 = void> extends NSObject {
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    description<R = unknown>(): R;
    hash<R = number>(): R;
    _initWithObserver_property_options_context_originalObservable<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = void, P4 = unknown>(__initWithObserver: P0, _property: P1, _options: P2, _context: P3, _originalObservable: P4): R;
  }
  namespace NSKeyValueObservance {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSKeyValueObservance>(): R;
      new: <R = NSKeyValueObservance>() => R;
    }
  }
}

declare const NSKeyValueObservance: cocoa.NSKeyValueObservance.CLASS;
