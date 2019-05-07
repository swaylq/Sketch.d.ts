/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLConnectionDelegateProtocol<T0 = void, T1 = void, T2 = void> {
    connection_didCancelAuthenticationChallenge<R = void, P0 = NSURLConnection, P1 = NSURLAuthenticationChallenge>(_connection: P0, _didCancelAuthenticationChallenge: P1): R;
    connection_didReceiveAuthenticationChallenge<R = void, P0 = NSURLConnection, P1 = NSURLAuthenticationChallenge>(_connection: P0, _didReceiveAuthenticationChallenge: P1): R;
    connection_canAuthenticateAgainstProtectionSpace<R = boolean, P0 = NSURLConnection, P1 = NSURLProtectionSpace>(_connection: P0, _canAuthenticateAgainstProtectionSpace: P1): R;
    connection_willSendRequestForAuthenticationChallenge<R = void, P0 = NSURLConnection, P1 = NSURLAuthenticationChallenge>(_connection: P0, _willSendRequestForAuthenticationChallenge: P1): R;
    connectionShouldUseCredentialStorage<R = boolean, P0 = NSURLConnection>(_connectionShouldUseCredentialStorage: P0): R;
    connection_didFailWithError<R = void, P0 = NSURLConnection, P1 = NSError>(_connection: P0, _didFailWithError: P1): R;
  }
  namespace NSURLConnectionDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
