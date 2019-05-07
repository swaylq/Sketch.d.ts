/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSObservationSink<T0 = void, T1 = void, T2 = void> extends NSObject, NSObserverProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSObservationSink {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSObserverProtocol {
      alloc<R = NSObservationSink>(): R;
      new: <R = NSObservationSink>() => R;
      handleErrorsWithBlock<R = unknown, P0 = CDUnknownBlockType>(_handleErrorsWithBlock: P0): R;
      handleValuesWithBlock<R = unknown, P0 = CDUnknownBlockType>(_handleValuesWithBlock: P0): R;
    }
  }
}

declare const NSObservationSink: cocoa.NSObservationSink.CLASS;
