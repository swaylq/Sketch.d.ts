/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSXPCDistantObject<T0 = void, T1 = void, T2 = void> extends NSObject, NSXPCProxyCreatingProtocol, NSSecureCodingProtocol {
    remoteObjectProxyWithTimeout_errorHandler<R = unknown, P0 = number, P1 = CDUnknownBlockType>(_remoteObjectProxyWithTimeout: P0, _errorHandler: P1): R;
    remoteObjectProxyWithUserInfo_errorHandler<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_remoteObjectProxyWithUserInfo: P0, _errorHandler: P1): R;
    _unboostingRemoteObjectProxy<R = unknown>(): R;
    _forwardStackInvocation<R = void, P0 = unknown>(__forwardStackInvocation: P0): R;
    forwardInvocation<R = void, P0 = unknown>(_forwardInvocation: P0): R;
    methodSignatureForSelector<R = unknown, P0 = string>(_methodSignatureForSelector: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    dealloc<R = void>(): R;
    _initWithConnection_exportedObject_interface<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__initWithConnection: P0, _exportedObject: P1, _interface: P2): R;
    _initWithConnection_proxyNumber_generationCount_interface_options_error<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = unknown, P4 = number, P5 = CDUnknownBlockType>(__initWithConnection: P0, _proxyNumber: P1, _generationCount: P2, _interface: P3, _options: P4, _error: P5): R;
    _userInfo<R = NSDictionary>(): R;
    set_userInfo<R = void, P0 = NSDictionary>(_v: P0): R;
    _timeout<R = number>(): R;
    set_timeout<R = void, P0 = number>(_v: P0): R;
    _errorBlock<R = CDUnknownBlockType>(): R;
    _remoteInterface<R = NSXPCInterface>(): R;
    set_remoteInterface<R = void, P0 = NSXPCInterface>(_v: P0): R;
    _connection<R = NSXPCConnection>(): R;
    _generationCount<R = number>(): R;
    _proxyNumber<R = number>(): R;
    _sync<R = boolean>(): R;
    _noImportance<R = boolean>(): R;
    _exported<R = boolean>(): R;
  }
  namespace _NSXPCDistantObject {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSXPCProxyCreatingProtocol, NSSecureCodingProtocol {
      alloc<R = _NSXPCDistantObject>(): R;
      new: <R = _NSXPCDistantObject>() => R;
    }
  }
}
