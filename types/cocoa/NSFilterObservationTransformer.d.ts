/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFilterObservationTransformer<T0 = void, T1 = void, T2 = void> extends NSObservationTransformer {
    initWithBlock<R = unknown, P0 = CDUnknownBlockType>(_initWithBlock: P0): R;
    _receiveBox<R = void, P0 = unknown>(__receiveBox: P0): R;
  }
  namespace NSFilterObservationTransformer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObservationTransformer {
      alloc<R = NSFilterObservationTransformer>(): R;
      new: <R = NSFilterObservationTransformer>() => R;
      filterWithBlock<R = unknown, P0 = CDUnknownBlockType>(_filterWithBlock: P0): R;
    }
  }
}

declare const NSFilterObservationTransformer: cocoa.NSFilterObservationTransformer.CLASS;
