/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMapObservationTransformer<T0 = void, T1 = void, T2 = void> extends NSObservationTransformer {
    _receiveBox<R = void, P0 = unknown>(__receiveBox: P0): R;
    initWithBlock_tag<R = unknown, P0 = unknown, P1 = number>(_initWithBlock: P0, _tag: P1): R;
  }
  namespace NSMapObservationTransformer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObservationTransformer {
      alloc<R = NSMapObservationTransformer>(): R;
      new: <R = NSMapObservationTransformer>() => R;
    }
  }
}

declare const NSMapObservationTransformer: cocoa.NSMapObservationTransformer.CLASS;
