/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueMutableSet<T0 = void, T1 = void, T2 = void> extends NSMutableSet, NSKeyValueProxyCachingProtocol {
    dealloc<R = void>(): R;
  }
  namespace NSKeyValueMutableSet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMutableSet, NSKeyValueProxyCachingProtocol {}
  }
}

declare const NSKeyValueMutableSet: cocoa.NSKeyValueMutableSet.CLASS;
