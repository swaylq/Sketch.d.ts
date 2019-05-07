/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXPCListenerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    listener_shouldAcceptNewConnection<R = boolean, P0 = NSXPCListener, P1 = NSXPCConnection>(_listener: P0, _shouldAcceptNewConnection: P1): R;
  }
  namespace NSXPCListenerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
