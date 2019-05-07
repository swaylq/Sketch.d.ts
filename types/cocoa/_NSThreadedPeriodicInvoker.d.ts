/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSThreadedPeriodicInvoker<T0 = void, T1 = void, T2 = void> extends _NSPeriodicInvoker {
    initWithQueue<R = unknown, P0 = unknown>(_initWithQueue: P0): R;
  }
  namespace _NSThreadedPeriodicInvoker {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSPeriodicInvoker {
      alloc<R = _NSThreadedPeriodicInvoker>(): R;
      new: <R = _NSThreadedPeriodicInvoker>() => R;
    }
  }
}
