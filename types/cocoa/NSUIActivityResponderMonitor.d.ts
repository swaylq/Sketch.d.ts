/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUIActivityResponderMonitor<T0 = void, T1 = void, T2 = void> extends NSObject {
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    update<R = void>(): R;
    updateWithResponder<R = boolean, P0 = unknown>(_updateWithResponder: P0): R;
    stop<R = void>(): R;
    start<R = void>(): R;
  }
  namespace NSUIActivityResponderMonitor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSUIActivityResponderMonitor>(): R;
      new: <R = NSUIActivityResponderMonitor>() => R;
      sharedMonitor<R = unknown>(): R;
    }
  }
}

declare const NSUIActivityResponderMonitor: cocoa.NSUIActivityResponderMonitor.CLASS;
