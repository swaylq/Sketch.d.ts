/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDistantObject<T0 = void, T1 = void, T2 = void> extends NSProxy, NSCodingProtocol {
    appendFormat<R = void, P0 = unknown>(_appendFormat: P0): R;
    stringByAppendingFormat<R = unknown, P0 = unknown>(_stringByAppendingFormat: P0): R;
    classForCoder<R = unknown>(): R;
    retainWireCount<R = void>(): R;
    _releaseWireCount<R = void, P0 = number>(__releaseWireCount: P0): R;
    protocolForProxy<R = unknown>(): R;
    setProtocolForProxy<R = void, P0 = unknown>(_setProtocolForProxy: P0): R;
    initWithLocal_connection<R = unknown, P0 = unknown, P1 = unknown>(_initWithLocal: P0, _connection: P1): R;
    initWithTarget_connection<R = unknown, P0 = unknown, P1 = unknown>(_initWithTarget: P0, _connection: P1): R;
    connectionForProxy<R = NSConnection>(): R;
  }
  namespace NSDistantObject {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSProxy, NSCodingProtocol {
      newDistantObjectWithCoder<R = unknown, P0 = unknown>(_newDistantObjectWithCoder: P0): R;
      proxyWithLocal_connection<R = unknown, P0 = unknown, P1 = unknown>(_proxyWithLocal: P0, _connection: P1): R;
      proxyWithTarget_connection<R = unknown, P0 = unknown, P1 = unknown>(_proxyWithTarget: P0, _connection: P1): R;
      _enableLogging<R = void, P0 = boolean>(__enableLogging: P0): R;
    }
  }
}

declare const NSDistantObject: cocoa.NSDistantObject.CLASS;
