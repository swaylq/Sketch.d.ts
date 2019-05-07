/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSProgressRegistrar<T0 = void, T1 = void, T2 = void> extends NSObject, NSXPCListenerDelegateProtocol, NSProgressRegistrarProtocol {
    _getRemoteProcessWithAuditToken_canReadItemAtURL_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(__getRemoteProcessWithAuditToken: P0, _canReadItemAtURL: P1, _completionHandler: P2): R;
    dealloc<R = void>(): R;
    initWithQueue_rootFileAccessNode<R = unknown, P0 = unknown, P1 = unknown>(_initWithQueue: P0, _rootFileAccessNode: P1): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSProgressRegistrar {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSXPCListenerDelegateProtocol, NSProgressRegistrarProtocol {
      alloc<R = NSProgressRegistrar>(): R;
      new: <R = NSProgressRegistrar>() => R;
    }
  }
}

declare const NSProgressRegistrar: cocoa.NSProgressRegistrar.CLASS;
