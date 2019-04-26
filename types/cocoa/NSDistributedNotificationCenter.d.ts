/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDistributedNotificationCenter<T0 = void, T1 = void, T2 = void> extends NSNotificationCenter {
    postNotificationName_object_userInfo_deliverImmediately<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean>(_postNotificationName: P0, _object: P1, _userInfo: P2, _deliverImmediately: P3): R;
    postNotificationName_object_userInfo_options<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number>(_postNotificationName: P0, _object: P1, _userInfo: P2, _options: P3): R;
    addObserverForName_object_suspensionBehavior_queue_usingBlock<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown, P4 = CDUnknownBlockType>(_addObserverForName: P0, _object: P1, _suspensionBehavior: P2, _queue: P3, _usingBlock: P4): R;
    addObserver_selector_name_object_suspensionBehavior<R = void, P0 = unknown, P1 = string, P2 = unknown, P3 = unknown, P4 = number>(_addObserver: P0, _selector: P1, _name: P2, _object: P3, _suspensionBehavior: P4): R;
    suspended<R = boolean>(): R;
    setSuspended<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSDistributedNotificationCenter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSNotificationCenter {
      alloc<R = NSDistributedNotificationCenter>(): R;
      new: <R = NSDistributedNotificationCenter>() => R;
      notificationCenterForType<R = unknown, P0 = unknown>(_notificationCenterForType: P0): R;
    }
  }
}

declare const NSDistributedNotificationCenter: cocoa.NSDistributedNotificationCenter.CLASS;
