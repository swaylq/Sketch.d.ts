/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueNotifyingMutableOrderedSet<T0 = void, T1 = void, T2 = void> extends NSKeyValueMutableOrderedSet {
    replaceObjectsAtIndexes_withObjects<R = void, P0 = unknown, P1 = unknown>(_replaceObjectsAtIndexes: P0, _withObjects: P1): R;
    replaceObjectAtIndex_withObject<R = void, P0 = number, P1 = unknown>(_replaceObjectAtIndex: P0, _withObject: P1): R;
    removeObjectsAtIndexes<R = void, P0 = unknown>(_removeObjectsAtIndexes: P0): R;
    removeObjectAtIndex<R = void, P0 = number>(_removeObjectAtIndex: P0): R;
    insertObjects_atIndexes<R = void, P0 = unknown, P1 = unknown>(_insertObjects: P0, _atIndexes: P1): R;
    insertObject_atIndex<R = void, P0 = unknown, P1 = number>(_insertObject: P0, _atIndex: P1): R;
    objectsAtIndexes<R = unknown, P0 = unknown>(_objectsAtIndexes: P0): R;
    objectAtIndex<R = unknown, P0 = number>(_objectAtIndex: P0): R;
    indexOfObject<R = number, P0 = unknown>(_indexOfObject: P0): R;
    getObjects_range<R = void, P0 = unknown, P1 = _NSRange>(_getObjects: P0, _range: P1): R;
    count<R = number>(): R;
  }
  namespace NSKeyValueNotifyingMutableOrderedSet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyValueMutableOrderedSet {}
  }
}

declare const NSKeyValueNotifyingMutableOrderedSet: cocoa.NSKeyValueNotifyingMutableOrderedSet.CLASS;
