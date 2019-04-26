/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextStorageElementArray<T0 = void, T1 = void, T2 = void> extends NSArray {
    objectAtIndex<R = unknown, P0 = number>(_objectAtIndex: P0): R;
    count<R = number>(): R;
    tokenizeToCount<R = void, P0 = number>(_tokenizeToCount: P0): R;
    dealloc<R = void>(): R;
    initWithContainer_key<R = unknown, P0 = unknown, P1 = unknown>(_initWithContainer: P0, _key: P1): R;
  }
  namespace NSTextStorageElementArray {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSArray {}
  }
}

declare const NSTextStorageElementArray: cocoa.NSTextStorageElementArray.CLASS;
