/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueFastMutableArray2<T0 = void, T1 = void, T2 = void> extends NSKeyValueFastMutableArray {
    objectsAtIndexes<R = unknown, P0 = unknown>(_objectsAtIndexes: P0): R;
    objectAtIndex<R = unknown, P0 = number>(_objectAtIndex: P0): R;
    getObjects_range<R = void, P0 = unknown, P1 = _NSRange>(_getObjects: P0, _range: P1): R;
    count<R = number>(): R;
    _nonNilArrayValueWithSelector<R = unknown, P0 = string>(__nonNilArrayValueWithSelector: P0): R;
  }
  namespace NSKeyValueFastMutableArray2 {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyValueFastMutableArray {}
  }
}

declare const NSKeyValueFastMutableArray2: cocoa.NSKeyValueFastMutableArray2.CLASS;
