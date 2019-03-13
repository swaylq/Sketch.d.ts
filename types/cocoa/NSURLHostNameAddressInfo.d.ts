/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLHostNameAddressInfo<T = any> extends NSObject {
    dealloc<R = void>(): R;
    _timestamp<R = number>(): R;
    addrinfo<R = addrinfo>(): R;
    _initWithAddressInfo<R = unknown, P0 = addrinfo>(__initWithAddressInfo: P0): R;
  }
  namespace classes {
    export interface NSURLHostNameAddressInfo<T = any> extends NSObject {
      alloc<R = NSURLHostNameAddressInfo>(): R;
      new: <R = NSURLHostNameAddressInfo>() => R;
      asyncResolveWithCallbackClient<R = void, P0 = unknown>(_asyncResolveWithCallbackClient: P0): R;
      addressInfoForHost<R = unknown, P0 = unknown>(_addressInfoForHost: P0): R;
    }
  }
}

declare const NSURLHostNameAddressInfo: cocoa.classes.NSURLHostNameAddressInfo;
