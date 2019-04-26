/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLHandle<T0 = void, T1 = void, T2 = void> extends NSObject {
    didLoadBytes_loadComplete<R = void, P0 = unknown, P1 = boolean>(_didLoadBytes: P0, _loadComplete: P1): R;
    backgroundLoadDidFailWithReason<R = void, P0 = unknown>(_backgroundLoadDidFailWithReason: P0): R;
    endLoadInBackground<R = void>(): R;
    beginLoadInBackground<R = void>(): R;
    loadInForeground<R = unknown>(): R;
    flushCachedData<R = void>(): R;
    writeProperty_forKey<R = boolean, P0 = unknown, P1 = unknown>(_writeProperty: P0, _forKey: P1): R;
    propertyForKeyIfAvailable<R = unknown, P0 = unknown>(_propertyForKeyIfAvailable: P0): R;
    propertyForKey<R = unknown, P0 = unknown>(_propertyForKey: P0): R;
    cancelLoadInBackground<R = void>(): R;
    loadInBackground<R = void>(): R;
    removeClient<R = void, P0 = unknown>(_removeClient: P0): R;
    addClient<R = void, P0 = unknown>(_addClient: P0): R;
    failureReason<R = unknown>(): R;
    status<R = number>(): R;
    writeData<R = boolean, P0 = unknown>(_writeData: P0): R;
    resourceData<R = unknown>(): R;
    expectedResourceDataSize<R = number>(): R;
    _sendClientMessage_arg1_arg2<R = void, P0 = string, P1 = unknown, P2 = unknown>(__sendClientMessage: P0, _arg1: P1, _arg2: P2): R;
    _finishMessagingClients<R = void, P0 = boolean>(__finishMessagingClients: P0): R;
    _prepareToMessageClients<R = boolean>(): R;
    _isCached<R = boolean>(): R;
    availableResourceData<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithURL_cached<R = unknown, P0 = unknown, P1 = boolean>(_initWithURL: P0, _cached: P1): R;
  }
  namespace NSURLHandle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSURLHandle>(): R;
      new: <R = NSURLHandle>() => R;
      _subclassManagesData<R = boolean>(): R;
      cachedHandleForURL<R = unknown, P0 = unknown>(_cachedHandleForURL: P0): R;
      URLHandleClassForURL<R = unknown, P0 = unknown>(_URLHandleClassForURL: P0): R;
      canInitWithURL<R = boolean, P0 = unknown>(_canInitWithURL: P0): R;
      registerURLHandleClass<R = void, P0 = unknown>(_registerURLHandleClass: P0): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSURLHandle: cocoa.NSURLHandle.CLASS;
