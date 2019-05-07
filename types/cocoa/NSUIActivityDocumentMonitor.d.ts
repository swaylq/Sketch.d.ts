/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUIActivityDocumentMonitor<T0 = void, T1 = void, T2 = void> extends NSObject {
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    update<R = void>(): R;
    stop<R = void>(): R;
    start<R = void>(): R;
  }
  namespace NSUIActivityDocumentMonitor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSUIActivityDocumentMonitor>(): R;
      new: <R = NSUIActivityDocumentMonitor>() => R;
      sharedMonitor<R = unknown>(): R;
    }
  }
}

declare const NSUIActivityDocumentMonitor: cocoa.NSUIActivityDocumentMonitor.CLASS;
