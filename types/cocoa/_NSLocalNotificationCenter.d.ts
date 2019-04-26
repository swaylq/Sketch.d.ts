/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLocalNotificationCenter<T0 = void, T1 = void, T2 = void> extends NSDistributedNotificationCenter {}
  namespace _NSLocalNotificationCenter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDistributedNotificationCenter {
      alloc<R = _NSLocalNotificationCenter>(): R;
      new: <R = _NSLocalNotificationCenter>() => R;
    }
  }
}
