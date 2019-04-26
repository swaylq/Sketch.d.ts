/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueProxyShareKey<T0 = void, T1 = void, T2 = void> extends NSObject, NSKeyValueProxyCachingProtocol {}
  namespace NSKeyValueProxyShareKey {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSKeyValueProxyCachingProtocol {
      alloc<R = NSKeyValueProxyShareKey>(): R;
      new: <R = NSKeyValueProxyShareKey>() => R;
    }
  }
}

declare const NSKeyValueProxyShareKey: cocoa.NSKeyValueProxyShareKey.CLASS;
