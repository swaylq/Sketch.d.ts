/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSObservingBlockSinkObservation<T0 = void, T1 = void, T2 = void> extends _NSConcreteBlockSinkObservation, NSObserverProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSObservingBlockSinkObservation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSConcreteBlockSinkObservation, NSObserverProtocol {
      alloc<R = _NSObservingBlockSinkObservation>(): R;
      new: <R = _NSObservingBlockSinkObservation>() => R;
    }
  }
}
