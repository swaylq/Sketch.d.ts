/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSMappingObservation<T0 = void, T1 = void, T2 = void> extends _NSConcreteObservation, NSObserverProtocol, NSObservableProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSMappingObservation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSConcreteObservation, NSObserverProtocol, NSObservableProtocol {
      alloc<R = _NSMappingObservation>(): R;
      new: <R = _NSMappingObservation>() => R;
    }
  }
}
