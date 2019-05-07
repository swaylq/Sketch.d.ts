/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSObservingObservation<T0 = void, T1 = void, T2 = void> extends _NSConcreteObservation, NSObserverProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSObservingObservation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSConcreteObservation, NSObserverProtocol {
      alloc<R = _NSObservingObservation>(): R;
      new: <R = _NSObservingObservation>() => R;
    }
  }
}
