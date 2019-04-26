/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSReduceObservationTransformer<T0 = void, T1 = void, T2 = void> extends NSObservationTransformer {
    initWithBlock_initialValue<R = unknown, P0 = CDUnknownBlockType, P1 = unknown>(_initWithBlock: P0, _initialValue: P1): R;
    _receiveBox<R = void, P0 = unknown>(__receiveBox: P0): R;
  }
  namespace NSReduceObservationTransformer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObservationTransformer {
      alloc<R = NSReduceObservationTransformer>(): R;
      new: <R = NSReduceObservationTransformer>() => R;
      reduceValue_withReducer<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_reduceValue: P0, _withReducer: P1): R;
    }
  }
}

declare const NSReduceObservationTransformer: cocoa.NSReduceObservationTransformer.CLASS;
