/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileAccessSubarbiter<T0 = void, T1 = void, T2 = void> extends NSObject, NSFileAccessClientLocalArbiterInterfaceProtocol, NSXPCListenerDelegateProtocol {
    stopArbitrating<R = void>(): R;
    dealloc<R = void>(): R;
    initWithQueue_listener<R = unknown, P0 = unknown, P1 = unknown>(_initWithQueue: P0, _listener: P1): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSFileAccessSubarbiter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSFileAccessClientLocalArbiterInterfaceProtocol, NSXPCListenerDelegateProtocol {
      alloc<R = NSFileAccessSubarbiter>(): R;
      new: <R = NSFileAccessSubarbiter>() => R;
    }
  }
}

declare const NSFileAccessSubarbiter: cocoa.NSFileAccessSubarbiter.CLASS;
