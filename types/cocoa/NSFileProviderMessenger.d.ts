/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileProviderMessenger<T0 = void, T1 = void, T2 = void> extends NSObject {
    invalidate<R = void>(): R;
    remoteObjectProxyWithErrorHandler<R = unknown, P0 = CDUnknownBlockType>(_remoteObjectProxyWithErrorHandler: P0): R;
    initWithInterface_protocol<R = unknown, P0 = unknown, P1 = unknown>(_initWithInterface: P0, _protocol: P1): R;
    dealloc<R = void>(): R;
  }
  namespace NSFileProviderMessenger {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSFileProviderMessenger>(): R;
      new: <R = NSFileProviderMessenger>() => R;
    }
  }
}

declare const NSFileProviderMessenger: cocoa.NSFileProviderMessenger.CLASS;
