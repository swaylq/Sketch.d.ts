/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueSet<T0 = void, T1 = void, T2 = void> extends NSSet, NSKeyValueProxyCachingProtocol {
    objectEnumerator<R = unknown>(): R;
    member<R = unknown, P0 = unknown>(_member: P0): R;
    count<R = number>(): R;
    dealloc<R = void>(): R;
  }
  namespace NSKeyValueSet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSet, NSKeyValueProxyCachingProtocol {}
  }
}

declare const NSKeyValueSet: cocoa.NSKeyValueSet.CLASS;
