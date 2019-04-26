/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileProviderProxy<T0 = void, T1 = void, T2 = void> extends NSFileReactorProxy {
    wantsWriteNotifications<R = boolean>(): R;
    setWantsWriteNotifications<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSFileProviderProxy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFileReactorProxy {
      alloc<R = NSFileProviderProxy>(): R;
      new: <R = NSFileProviderProxy>() => R;
    }
  }
}

declare const NSFileProviderProxy: cocoa.NSFileProviderProxy.CLASS;
