/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSIBSortedEncodingMutableSet<T0 = void, T1 = void, T2 = void> extends NSMutableSet {
    getObjects<R = void, P0 = unknown>(_getObjects: P0): R;
    allObjects<R = unknown>(): R;
    countByEnumeratingWithState_objects_count<R = number, P0 = unknown, P1 = unknown, P2 = number>(_countByEnumeratingWithState: P0, _objects: P1, _count: P2): R;
    classForCoder<R = unknown>(): R;
    removeObject<R = void, P0 = unknown>(_removeObject: P0): R;
    addObject<R = void, P0 = unknown>(_addObject: P0): R;
    objectEnumerator<R = unknown>(): R;
    member<R = unknown, P0 = unknown>(_member: P0): R;
    count<R = number>(): R;
    sortStorageArray<R = void>(): R;
    dealloc<R = void>(): R;
    initWithSet_comparator<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_initWithSet: P0, _comparator: P1): R;
  }
  namespace NSIBSortedEncodingMutableSet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMutableSet {}
  }
}

declare const NSIBSortedEncodingMutableSet: cocoa.NSIBSortedEncodingMutableSet.CLASS;
