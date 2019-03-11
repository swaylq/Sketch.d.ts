/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSThreadedPeriodicInvoker<T = any> extends cocoa._NSPeriodicInvoker {
    initWithQueue<R = unknown, P0 = unknown>(_initWithQueue: P0): R;
  }
  namespace classes {
    export interface _NSThreadedPeriodicInvoker<T = any> extends cocoa.classes._NSPeriodicInvoker {
      alloc<R = _NSThreadedPeriodicInvoker>(): R;
      new: <R = _NSThreadedPeriodicInvoker>() => R;
    }
  }
}
