/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueFastMutableOrderedSet1<T0 = void, T1 = void, T2 = void> extends NSKeyValueFastMutableOrderedSet {
    objectsAtIndexes<R = unknown, P0 = unknown>(_objectsAtIndexes: P0): R;
    objectAtIndex<R = unknown, P0 = number>(_objectAtIndex: P0): R;
    indexOfObject<R = number, P0 = unknown>(_indexOfObject: P0): R;
    getObjects_range<R = void, P0 = unknown, P1 = _NSRange>(_getObjects: P0, _range: P1): R;
    count<R = number>(): R;
  }
  namespace NSKeyValueFastMutableOrderedSet1 {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyValueFastMutableOrderedSet {}
  }
}

declare const NSKeyValueFastMutableOrderedSet1: cocoa.NSKeyValueFastMutableOrderedSet1.CLASS;
