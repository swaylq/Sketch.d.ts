/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCNetworkTime<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    systemStartupTime<R = number>(): R;
    systemDate<R = unknown>(): R;
    requestNTPTime<R = void>(): R;
    readResponse<R = void>(): R;
    sendRequest<R = void>(): R;
    closeSocket<R = void>(): R;
    openSocket<R = void>(): R;
    determineHostAddress<R = void>(): R;
    startRequest<R = void>(): R;
    dealloc<R = void>(): R;
    initWithHost_timeout<R = unknown, P0 = unknown, P1 = number>(_initWithHost: P0, _timeout: P1): R;
    startupReferenceTime<R = number>(): R;
    networkTimeUpdateTime<R = number>(): R;
    networkTime<R = number>(): R;
    setNetworkTime<R = void, P0 = number>(_v: P0): R;
    requestTimer<R = NSTimer>(): R;
    setRequestTimer<R = void, P0 = NSTimer>(_v: P0): R;
    socket<R = number>(): R;
    setSocket<R = void, P0 = number>(_v: P0): R;
    addressInfo<R = addrinfo>(): R;
    setAddressInfo<R = void, P0 = addrinfo>(_v: P0): R;
    allAddressInfo<R = addrinfo>(): R;
    setAllAddressInfo<R = void, P0 = addrinfo>(_v: P0): R;
    timeout<R = number>(): R;
    setTimeout<R = void, P0 = number>(_v: P0): R;
    host<R = NSString>(): R;
    setHost<R = void, P0 = NSString>(_v: P0): R;
    currentDate<R = NSDate>(): R;
    includesNetworkTime<R = boolean>(): R;
    isSocketOpen<R = boolean>(): R;
  }
  namespace BCNetworkTime {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = BCNetworkTime>(): R;
      new: <R = BCNetworkTime>() => R;
      requestTimeFromHost_timeout_completionBlock<R = void, P0 = unknown, P1 = number, P2 = CDUnknownBlockType>(_requestTimeFromHost: P0, _timeout: P1, _completionBlock: P2): R;
      dispatchQueue<R = unknown>(): R;
    }
  }
}

declare const BCNetworkTime: cocoa.BCNetworkTime.CLASS;
