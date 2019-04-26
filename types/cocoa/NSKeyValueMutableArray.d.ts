/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueMutableArray<T0 = void, T1 = void, T2 = void> extends NSMutableArray, NSKeyValueProxyCachingProtocol {
    setArray<R = void, P0 = unknown>(_setArray: P0): R;
    dealloc<R = void>(): R;
  }
  namespace NSKeyValueMutableArray {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMutableArray, NSKeyValueProxyCachingProtocol {}
  }
}

declare const NSKeyValueMutableArray: cocoa.NSKeyValueMutableArray.CLASS;
