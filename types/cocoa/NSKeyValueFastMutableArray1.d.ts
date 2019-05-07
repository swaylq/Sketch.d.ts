/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueFastMutableArray1<T0 = void, T1 = void, T2 = void> extends NSKeyValueFastMutableArray {
    objectsAtIndexes<R = unknown, P0 = unknown>(_objectsAtIndexes: P0): R;
    objectAtIndex<R = unknown, P0 = number>(_objectAtIndex: P0): R;
    getObjects_range<R = void, P0 = unknown, P1 = _NSRange>(_getObjects: P0, _range: P1): R;
    count<R = number>(): R;
  }
  namespace NSKeyValueFastMutableArray1 {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyValueFastMutableArray {}
  }
}

declare const NSKeyValueFastMutableArray1: cocoa.NSKeyValueFastMutableArray1.CLASS;
