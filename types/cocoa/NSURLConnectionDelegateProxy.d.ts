/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLConnectionDelegateProxy<T0 = void, T1 = void, T2 = void> extends NSObject {
    connection_canAuthenticateAgainstProtectionSpace<R = boolean, P0 = unknown, P1 = unknown>(_connection: P0, _canAuthenticateAgainstProtectionSpace: P1): R;
    connectionShouldUseCredentialStorage<R = boolean, P0 = unknown>(_connectionShouldUseCredentialStorage: P0): R;
    connection_didSendBodyData_totalBytesWritten_totalBytesExpectedToWrite<R = void, P0 = unknown, P1 = number, P2 = number, P3 = number>(_connection: P0, _didSendBodyData: P1, _totalBytesWritten: P2, _totalBytesExpectedToWrite: P3): R;
    connection_didFailWithError<R = void, P0 = unknown, P1 = unknown>(_connection: P0, _didFailWithError: P1): R;
    connection_willCacheResponse<R = unknown, P0 = unknown, P1 = unknown>(_connection: P0, _willCacheResponse: P1): R;
    connectionDidFinishLoading<R = void, P0 = unknown>(_connectionDidFinishLoading: P0): R;
    connection_didReceiveDataArray<R = void, P0 = unknown, P1 = unknown>(_connection: P0, _didReceiveDataArray: P1): R;
    connection_didReceiveData_lengthReceived<R = void, P0 = unknown, P1 = unknown, P2 = number>(_connection: P0, _didReceiveData: P1, _lengthReceived: P2): R;
    connection_didReceiveData<R = void, P0 = unknown, P1 = unknown>(_connection: P0, _didReceiveData: P1): R;
    connection_didReceiveResponse<R = void, P0 = unknown, P1 = unknown>(_connection: P0, _didReceiveResponse: P1): R;
    connection_didCancelAuthenticationChallenge<R = void, P0 = unknown, P1 = unknown>(_connection: P0, _didCancelAuthenticationChallenge: P1): R;
    connection_didReceiveAuthenticationChallenge<R = void, P0 = unknown, P1 = unknown>(_connection: P0, _didReceiveAuthenticationChallenge: P1): R;
    connection_willSendRequest_redirectResponse<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_connection: P0, _willSendRequest: P1, _redirectResponse: P2): R;
    setDelegate<R = void, P0 = unknown>(_setDelegate: P0): R;
  }
  namespace NSURLConnectionDelegateProxy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSURLConnectionDelegateProxy>(): R;
      new: <R = NSURLConnectionDelegateProxy>() => R;
    }
  }
}

declare const NSURLConnectionDelegateProxy: cocoa.NSURLConnectionDelegateProxy.CLASS;
