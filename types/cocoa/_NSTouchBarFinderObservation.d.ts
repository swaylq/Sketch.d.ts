/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarFinderObservation<T0 = void, T1 = void, T2 = void> extends NSObject {
    description<R = unknown>(): R;
    invalidate<R = void>(): R;
    dealloc<R = void>(): R;
    initForObject_keyPaths_observer<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_initForObject: P0, _keyPaths: P1, _observer: P2): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
  }
  namespace _NSTouchBarFinderObservation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSTouchBarFinderObservation>(): R;
      new: <R = _NSTouchBarFinderObservation>() => R;
      observationForObject_keyPaths_observer<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_observationForObject: P0, _keyPaths: P1, _observer: P2): R;
    }
  }
}
