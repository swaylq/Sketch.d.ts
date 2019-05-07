/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueArray<T0 = void, T1 = void, T2 = void> extends NSArray, NSKeyValueProxyCachingProtocol {
    objectsAtIndexes<R = unknown, P0 = unknown>(_objectsAtIndexes: P0): R;
    objectAtIndex<R = unknown, P0 = number>(_objectAtIndex: P0): R;
    getObjects_range<R = void, P0 = unknown, P1 = _NSRange>(_getObjects: P0, _range: P1): R;
    count<R = number>(): R;
    dealloc<R = void>(): R;
  }
  namespace NSKeyValueArray {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSArray, NSKeyValueProxyCachingProtocol {}
  }
}

declare const NSKeyValueArray: cocoa.NSKeyValueArray.CLASS;
