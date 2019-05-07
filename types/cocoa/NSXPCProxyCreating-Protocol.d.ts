/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXPCProxyCreatingProtocol<T0 = void, T1 = void, T2 = void> {
    remoteObjectProxyWithErrorHandler<R = unknown, P0 = CDUnknownBlockType>(_remoteObjectProxyWithErrorHandler: P0): R;
    remoteObjectProxy<R = unknown>(): R;
    synchronousRemoteObjectProxyWithErrorHandler<R = unknown, P0 = CDUnknownBlockType>(_synchronousRemoteObjectProxyWithErrorHandler: P0): R;
  }
  namespace NSXPCProxyCreatingProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
