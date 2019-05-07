/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionAutovalidationScheduler<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace _NSQuickActionAutovalidationScheduler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSQuickActionAutovalidationScheduler>(): R;
      new: <R = _NSQuickActionAutovalidationScheduler>() => R;
      schedulerWithHandler<R = unknown, P0 = unknown>(_schedulerWithHandler: P0): R;
    }
  }
}
