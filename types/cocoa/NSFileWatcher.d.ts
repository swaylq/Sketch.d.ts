/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileWatcher<T0 = void, T1 = void, T2 = void> extends NSObject {
    stop<R = void>(): R;
    settle<R = void>(): R;
    _coalesceSubitemObservations<R = void>(): R;
    unsettle<R = void>(): R;
    start<R = void>(): R;
    setObserver<R = void, P0 = CDUnknownBlockType>(_setObserver: P0): R;
    setLastObservedEventID<R = void, P0 = number>(_setLastObservedEventID: P0): R;
    setURL<R = void, P0 = unknown>(_setURL: P0): R;
    watchItem<R = void>(): R;
    handleFSEventPath_flags_id<R = void, P0 = unknown, P1 = number, P2 = number>(_handleFSEventPath: P0, _flags: P1, _id: P2): R;
    dealloc<R = void>(): R;
    initWithQueue_auditToken<R = unknown, P0 = unknown, P1 = unknown>(_initWithQueue: P0, _auditToken: P1): R;
  }
  namespace NSFileWatcher {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSFileWatcher>(): R;
      new: <R = NSFileWatcher>() => R;
    }
  }
}

declare const NSFileWatcher: cocoa.NSFileWatcher.CLASS;
