/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOldValueObservationTransformer<T0 = void, T1 = void, T2 = void> extends NSObservationTransformer {
    _receiveBox<R = void, P0 = unknown>(__receiveBox: P0): R;
  }
  namespace NSOldValueObservationTransformer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObservationTransformer {
      alloc<R = NSOldValueObservationTransformer>(): R;
      new: <R = NSOldValueObservationTransformer>() => R;
      oldValuesTransformer<R = unknown>(): R;
    }
  }
}

declare const NSOldValueObservationTransformer: cocoa.NSOldValueObservationTransformer.CLASS;
