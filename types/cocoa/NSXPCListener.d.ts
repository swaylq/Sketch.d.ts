/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXPCListener<T = any> extends cocoa.NSObject {
    _xpcConnection<R = unknown>(): R;
    _queue<R = unknown>(): R;
    _setQueue<R = void, P0 = unknown>(__setQueue: P0): R;
    setOptions<R = void, P0 = number>(_setOptions: P0): R;
    serviceName<R = unknown>(): R;
    invalidate<R = void>(): R;
    stop<R = void>(): R;
    resume<R = void>(): R;
    suspend<R = void>(): R;
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithMachServiceName<R = unknown, P0 = unknown>(_initWithMachServiceName: P0): R;
    initWithServiceName<R = unknown, P0 = unknown>(_initWithServiceName: P0): R;
    _initShared<R = unknown>(): R;
    delegate<R = cocoa.NSXPCListenerDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.NSXPCListenerDelegate>(_v: P0): R;
    endpoint<R = cocoa.NSXPCListenerEndpoint>(): R;
  }
  namespace classes {
    export interface NSXPCListener<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSXPCListener>(): R;
      new: <R = NSXPCListener>() => R;
      _UUID<R = unknown>(): R;
      enableTransactions<R = void>(): R;
      anonymousListener<R = unknown>(): R;
      serviceListener<R = unknown>(): R;
    }
  }
}

declare const NSXPCListener: cocoa.classes.NSXPCListener;
