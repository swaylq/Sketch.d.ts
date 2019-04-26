/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSObservationTransformer<T0 = void, T1 = void, T2 = void> extends NSObservationSource, NSObserverProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSObservationTransformer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObservationSource, NSObserverProtocol {
      alloc<R = NSObservationTransformer>(): R;
      new: <R = NSObservationTransformer>() => R;
      mapErrorsWithBlock<R = unknown, P0 = CDUnknownBlockType>(_mapErrorsWithBlock: P0): R;
      mapValuesWithBlock<R = unknown, P0 = CDUnknownBlockType>(_mapValuesWithBlock: P0): R;
    }
  }
}

declare const NSObservationTransformer: cocoa.NSObservationTransformer.CLASS;
