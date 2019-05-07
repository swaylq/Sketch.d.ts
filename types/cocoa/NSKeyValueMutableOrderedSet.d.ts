/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueMutableOrderedSet<T0 = void, T1 = void, T2 = void> extends NSMutableOrderedSet, NSKeyValueProxyCachingProtocol {
    dealloc<R = void>(): R;
  }
  namespace NSKeyValueMutableOrderedSet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMutableOrderedSet, NSKeyValueProxyCachingProtocol {}
  }
}

declare const NSKeyValueMutableOrderedSet: cocoa.NSKeyValueMutableOrderedSet.CLASS;
