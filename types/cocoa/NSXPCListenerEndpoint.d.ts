/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXPCListenerEndpoint<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol {
    _setEndpoint<R = void, P0 = unknown>(__setEndpoint: P0): R;
    _endpoint<R = unknown>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    dealloc<R = void>(): R;
    _initWithConnection<R = unknown, P0 = unknown>(__initWithConnection: P0): R;
  }
  namespace NSXPCListenerEndpoint {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol {
      alloc<R = NSXPCListenerEndpoint>(): R;
      new: <R = NSXPCListenerEndpoint>() => R;
    }
  }
}

declare const NSXPCListenerEndpoint: cocoa.NSXPCListenerEndpoint.CLASS;
