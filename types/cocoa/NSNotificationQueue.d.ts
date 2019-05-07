/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNotificationQueue<T0 = void, T1 = void, T2 = void> extends NSObject {
    dequeueNotificationsMatching_coalesceMask<R = void, P0 = unknown, P1 = number>(_dequeueNotificationsMatching: P0, _coalesceMask: P1): R;
    enqueueNotification_postingStyle_coalesceMask_forModes<R = void, P0 = unknown, P1 = number, P2 = number, P3 = unknown>(_enqueueNotification: P0, _postingStyle: P1, _coalesceMask: P2, _forModes: P3): R;
    enqueueNotification_postingStyle<R = void, P0 = unknown, P1 = number>(_enqueueNotification: P0, _postingStyle: P1): R;
    _flushNotificationQueue<R = void>(): R;
    dealloc<R = void>(): R;
    initWithNotificationCenter<R = unknown, P0 = unknown>(_initWithNotificationCenter: P0): R;
  }
  namespace NSNotificationQueue {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSNotificationQueue>(): R;
      new: <R = NSNotificationQueue>() => R;
      defaultQueue<R = unknown>(): R;
    }
  }
}

declare const NSNotificationQueue: cocoa.NSNotificationQueue.CLASS;
