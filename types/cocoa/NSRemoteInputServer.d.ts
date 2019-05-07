/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRemoteInputServer<T0 = void, T1 = void, T2 = void> extends NSInputServer {
    forwardInvocation<R = void, P0 = unknown>(_forwardInvocation: P0): R;
    _invalidateConnectionsAsNecessary<R = void, P0 = unknown>(__invalidateConnectionsAsNecessary: P0): R;
  }
  namespace NSRemoteInputServer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSInputServer {
      alloc<R = NSRemoteInputServer>(): R;
      new: <R = NSRemoteInputServer>() => R;
    }
  }
}

declare const NSRemoteInputServer: cocoa.NSRemoteInputServer.CLASS;
