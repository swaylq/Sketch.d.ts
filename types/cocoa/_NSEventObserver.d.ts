/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSEventObserver<T0 = void, T1 = void, T2 = void> extends NSObject {
    invalidate<R = void>(): R;
    dealloc<R = void>(): R;
    initMatchingEvents_handler<R = unknown, P0 = number, P1 = unknown>(_initMatchingEvents: P0, _handler: P1): R;
  }
  namespace _NSEventObserver {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSEventObserver>(): R;
      new: <R = _NSEventObserver>() => R;
    }
  }
}
