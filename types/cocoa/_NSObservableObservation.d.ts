/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSObservableObservation<T0 = void, T1 = void, T2 = void> extends _NSConcreteObservation, NSObservableProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSObservableObservation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSConcreteObservation, NSObservableProtocol {
      alloc<R = _NSObservableObservation>(): R;
      new: <R = _NSObservableObservation>() => R;
    }
  }
}
