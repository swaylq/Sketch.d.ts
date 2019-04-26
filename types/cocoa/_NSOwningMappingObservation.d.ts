/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSOwningMappingObservation<T0 = void, T1 = void, T2 = void> extends _NSConcreteObservation, NSOwningObserverProtocol, NSObservableProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSOwningMappingObservation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSConcreteObservation, NSOwningObserverProtocol, NSObservableProtocol {
      alloc<R = _NSOwningMappingObservation>(): R;
      new: <R = _NSOwningMappingObservation>() => R;
    }
  }
}
