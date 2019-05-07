/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSInternalNotificationCenter<T0 = void, T1 = void, T2 = void> extends NSObject {
    removeObserverToken<R = void, P0 = number>(_removeObserverToken: P0): R;
    removeObserver_name_object<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_removeObserver: P0, _name: P1, _object: P2): R;
    removeObserver<R = void, P0 = unknown>(_removeObserver: P0): R;
    postNotificationName_object_userInfo<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_postNotificationName: P0, _object: P1, _userInfo: P2): R;
    postNotificationName_object<R = void, P0 = unknown, P1 = unknown>(_postNotificationName: P0, _object: P1): R;
    postNotification<R = void, P0 = unknown>(_postNotification: P0): R;
    addObserverForName_object_queue_usingBlock<R = number, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType>(_addObserverForName: P0, _object: P1, _queue: P2, _usingBlock: P3): R;
    addObserver_selector_name_object<R = number, P0 = unknown, P1 = string, P2 = unknown, P3 = unknown>(_addObserver: P0, _selector: P1, _name: P2, _object: P3): R;
    dealloc<R = void>(): R;
  }
  namespace _NSInternalNotificationCenter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSInternalNotificationCenter>(): R;
      new: <R = _NSInternalNotificationCenter>() => R;
    }
  }
}
