/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueFastMutableOrderedSet<T = any> extends NSKeyValueMutableOrderedSet {
    replaceObjectsAtIndexes_withObjects<R = void, P0 = unknown, P1 = unknown>(_replaceObjectsAtIndexes: P0, _withObjects: P1): R;
    replaceObjectAtIndex_withObject<R = void, P0 = number, P1 = unknown>(_replaceObjectAtIndex: P0, _withObject: P1): R;
    removeObjectsAtIndexes<R = void, P0 = unknown>(_removeObjectsAtIndexes: P0): R;
    removeObjectAtIndex<R = void, P0 = number>(_removeObjectAtIndex: P0): R;
    insertObjects_atIndexes<R = void, P0 = unknown, P1 = unknown>(_insertObjects: P0, _atIndexes: P1): R;
    insertObject_atIndex<R = void, P0 = unknown, P1 = number>(_insertObject: P0, _atIndex: P1): R;
  }
  namespace classes {
    export interface NSKeyValueFastMutableOrderedSet<T = any> extends NSKeyValueMutableOrderedSet {  }
  }
}

declare const NSKeyValueFastMutableOrderedSet: cocoa.classes.NSKeyValueFastMutableOrderedSet;