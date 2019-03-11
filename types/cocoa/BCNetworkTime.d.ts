/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCNetworkTime<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    sendCompletion<R = void, P0 = unknown>(_sendCompletion: P0): R;
    requestNTPTime<R = void>(): R;
    readResponse<R = void>(): R;
    sendRequest<R = void>(): R;
    closeSocket<R = void>(): R;
    openSocket<R = void>(): R;
    determineHostAddress<R = void>(): R;
    dealloc<R = void>(): R;
    initWithCompletionBlock<R = unknown, P0 = cocoa.CDUnknownBlockType>(_initWithCompletionBlock: P0): R;
    timeout<R = number>(): R;
    setTimeout<R = void, P0 = number>(_v: P0): R;
    socket<R = number>(): R;
    setSocket<R = void, P0 = number>(_v: P0): R;
    addressInfo<R = cocoa.addrinfo>(): R;
    setAddressInfo<R = void, P0 = cocoa.addrinfo>(_v: P0): R;
    allAddressInfo<R = cocoa.addrinfo>(): R;
    setAllAddressInfo<R = void, P0 = cocoa.addrinfo>(_v: P0): R;
    host<R = cocoa.NSString>(): R;
    setHost<R = void, P0 = cocoa.NSString>(_v: P0): R;
    completion<R = cocoa.CDUnknownBlockType>(): R;
    setCompletion<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    isSocketOpen<R = boolean>(): R;
  }
  namespace classes {
    export interface BCNetworkTime<T = any> extends cocoa.classes.NSObject {
      alloc<R = BCNetworkTime>(): R;
      new: <R = BCNetworkTime>() => R;
      requestTimeFromHost_timeout_completionBlock<R = void, P0 = unknown, P1 = number, P2 = cocoa.CDUnknownBlockType>(_requestTimeFromHost: P0, _timeout: P1, _completionBlock: P2): R;
    }
  }
}

declare const BCNetworkTime: cocoa.classes.BCNetworkTime;
