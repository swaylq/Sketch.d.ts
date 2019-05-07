/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSOwningObservingObservation<T0 = void, T1 = void, T2 = void> extends _NSConcreteObservation, NSOwningObserverProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSOwningObservingObservation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSConcreteObservation, NSOwningObserverProtocol {
      alloc<R = _NSOwningObservingObservation>(): R;
      new: <R = _NSOwningObservingObservation>() => R;
    }
  }
}
