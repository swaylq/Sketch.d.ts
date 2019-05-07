/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLocalEventObserver<T0 = void, T1 = void, T2 = void> extends _NSEventObserver {
    recomputeObserverMask<R = void>(): R;
  }
  namespace _NSLocalEventObserver {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSEventObserver {
      alloc<R = _NSLocalEventObserver>(): R;
      new: <R = _NSLocalEventObserver>() => R;
      initialize<R = void>(): R;
    }
  }
}
