/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSConcreteObservation<T0 = void, T1 = void, T2 = void> extends NSObservation {
    dealloc<R = void>(): R;
    _receiveBox<R = void, P0 = unknown>(__receiveBox: P0): R;
    finishObserving<R = void>(): R;
    debugDescription<R = unknown>(): R;
  }
  namespace _NSConcreteObservation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObservation {
      alloc<R = _NSConcreteObservation>(): R;
      new: <R = _NSConcreteObservation>() => R;
    }
  }
}
