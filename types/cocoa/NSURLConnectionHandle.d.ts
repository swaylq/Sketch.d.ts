/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLConnectionHandle<T0 = void, T1 = void, T2 = void> extends NSURLHandle, NSURLConnectionDelegateProtocol {
    connection_didFailLoadingWithError<R = void, P0 = unknown, P1 = unknown>(_connection: P0, _didFailLoadingWithError: P1): R;
    connectionDidFinishLoading<R = void, P0 = unknown>(_connectionDidFinishLoading: P0): R;
    connection_didReceiveData<R = void, P0 = unknown, P1 = unknown>(_connection: P0, _didReceiveData: P1): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSURLConnectionHandle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSURLHandle, NSURLConnectionDelegateProtocol {
      alloc<R = NSURLConnectionHandle>(): R;
      new: <R = NSURLConnectionHandle>() => R;
    }
  }
}

declare const NSURLConnectionHandle: cocoa.NSURLConnectionHandle.CLASS;
