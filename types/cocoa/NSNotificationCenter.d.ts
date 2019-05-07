/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNotificationCenter<T0 = void, T1 = void, T2 = void> extends NSObject {
    debugDescription<R = unknown>(): R;
    isEmpty<R = boolean>(): R;
    addObserverForName_object_queue_usingBlock<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType>(_addObserverForName: P0, _object: P1, _queue: P2, _usingBlock: P3): R;
    postNotificationName_object_userInfo<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_postNotificationName: P0, _object: P1, _userInfo: P2): R;
    postNotificationName_object<R = void, P0 = unknown, P1 = unknown>(_postNotificationName: P0, _object: P1): R;
    postNotification<R = void, P0 = unknown>(_postNotification: P0): R;
    removeObserver_name_object<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_removeObserver: P0, _name: P1, _object: P2): R;
    removeObserver<R = void, P0 = unknown>(_removeObserver: P0): R;
    addObserver_selector_name_object<R = void, P0 = unknown, P1 = string, P2 = unknown, P3 = unknown>(_addObserver: P0, _selector: P1, _name: P2, _object: P3): R;
    _removeObserver<R = void, P0 = number>(__removeObserver: P0): R;
    _addObserver_selector_name_object_options<R = number, P0 = unknown, P1 = string, P2 = unknown, P3 = unknown, P4 = number>(__addObserver: P0, _selector: P1, _name: P2, _object: P3, _options: P4): R;
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    _initWithCFNotificationCenter<R = unknown, P0 = __CFNotificationCenter>(__initWithCFNotificationCenter: P0): R;
    // + NSNotificationCenter(AppKitExtensions): 
    _removeObserver_notificationNamesAndSelectorNames_object<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(__removeObserver: P0, _notificationNamesAndSelectorNames: P1, _object: P2): R;
    _addObserver_notificationNamesAndSelectorNames_object_onlyIfSelectorIsImplemented<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean>(__addObserver: P0, _notificationNamesAndSelectorNames: P1, _object: P2, _onlyIfSelectorIsImplemented: P3): R;
  }
  namespace NSNotificationCenter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSNotificationCenter>(): R;
      new: <R = NSNotificationCenter>() => R;
      _defaultCenterWithoutCreating<R = unknown>(): R;
      defaultCenter<R = unknown>(): R;
  
  }
  }
}

declare const NSNotificationCenter: cocoa.NSNotificationCenter.CLASS;
