/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSInputClientWrapper<T0 = void, T1 = void, T2 = void> extends NSObject, NSTextInputProtocol {
    dealloc<R = void>(): R;
    initWithRealClient<R = unknown, P0 = unknown>(_initWithRealClient: P0): R;
    resetState<R = void>(): R;
  }
  namespace NSInputClientWrapper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSTextInputProtocol {
      alloc<R = NSInputClientWrapper>(): R;
      new: <R = NSInputClientWrapper>() => R;
      terminateForClient<R = void, P0 = unknown>(_terminateForClient: P0): R;
      clientWrapperWithRealClient<R = unknown, P0 = unknown>(_clientWrapperWithRealClient: P0): R;
      invalidateConnectionsAsNecessary<R = void, P0 = unknown>(_invalidateConnectionsAsNecessary: P0): R;
    }
  }
}

declare const NSInputClientWrapper: cocoa.NSInputClientWrapper.CLASS;
