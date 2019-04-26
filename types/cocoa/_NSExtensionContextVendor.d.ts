/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSExtensionContextVendor<T0 = void, T1 = void, T2 = void> extends NSObject, NSXPCListenerDelegateProtocol, _NSExtensionContextVendingProtocol {
    _setPrincipalObject_forUUID<R = void, P0 = unknown, P1 = unknown>(__setPrincipalObject: P0, _forUUID: P1): R;
    _extensionContextForUUID<R = unknown, P0 = unknown>(__extensionContextForUUID: P0): R;
    _tearDownContextWithUUID<R = void, P0 = unknown>(__tearDownContextWithUUID: P0): R;
    _shouldCreatePrincipalObject<R = boolean>(): R;
    dealloc<R = void>(): R;
    _extensionPrincipalObjects<R = NSMutableDictionary>(): R;
    set_extensionPrincipalObjects<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    _extensionContexts<R = NSMutableDictionary>(): R;
    set_extensionContexts<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    _extensionServiceConnections<R = NSMutableDictionary>(): R;
    set_extensionServiceConnections<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSExtensionContextVendor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSXPCListenerDelegateProtocol, _NSExtensionContextVendingProtocol {
      alloc<R = _NSExtensionContextVendor>(): R;
      new: <R = _NSExtensionContextVendor>() => R;
      _expirationConcurrentQueue<R = unknown>(): R;
      _completionConcurrentQueue<R = unknown>(): R;
      _extensionContextClass<R = unknown>(): R;
      _extensionMainStoryboard<R = unknown>(): R;
      _extensionPrincipalClass<R = unknown>(): R;
      _extensionDictionary<R = unknown>(): R;
      _startListening<R = void>(): R;
      _sharedExtensionContextVendor<R = unknown>(): R;
    }
  }
}
