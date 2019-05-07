/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueFastMutableArray<T0 = void, T1 = void, T2 = void> extends NSKeyValueMutableArray {
    replaceObjectsAtIndexes_withObjects<R = void, P0 = unknown, P1 = unknown>(_replaceObjectsAtIndexes: P0, _withObjects: P1): R;
    replaceObjectAtIndex_withObject<R = void, P0 = number, P1 = unknown>(_replaceObjectAtIndex: P0, _withObject: P1): R;
    removeObjectsAtIndexes<R = void, P0 = unknown>(_removeObjectsAtIndexes: P0): R;
    removeObjectAtIndex<R = void, P0 = number>(_removeObjectAtIndex: P0): R;
    removeLastObject<R = void>(): R;
    insertObjects_atIndexes<R = void, P0 = unknown, P1 = unknown>(_insertObjects: P0, _atIndexes: P1): R;
    insertObject_atIndex<R = void, P0 = unknown, P1 = number>(_insertObject: P0, _atIndex: P1): R;
    addObject<R = void, P0 = unknown>(_addObject: P0): R;
  }
  namespace NSKeyValueFastMutableArray {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyValueMutableArray {}
  }
}

declare const NSKeyValueFastMutableArray: cocoa.NSKeyValueFastMutableArray.CLASS;
