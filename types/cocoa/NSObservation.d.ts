/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSObservation<T0 = void, T1 = void, T2 = void> extends NSObject {
    remove<R = void>(): R;
    _observerStorage<R = unknown>(): R;
    _observerStorageOfSize<R = void, P0 = number>(__observerStorageOfSize: P0): R;
    initWithObservable_blockSink_tag<R = unknown, P0 = unknown, P1 = CDUnknownBlockType, P2 = number>(_initWithObservable: P0, _blockSink: P1, _tag: P2): R;
    initWithObservable_observer<R = unknown, P0 = unknown, P1 = unknown>(_initWithObservable: P0, _observer: P1): R;
  }
  namespace NSObservation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSObservation>(): R;
      new: <R = NSObservation>() => R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSObservation: cocoa.NSObservation.CLASS;
