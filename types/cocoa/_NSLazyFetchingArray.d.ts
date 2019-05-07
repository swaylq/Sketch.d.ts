/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLazyFetchingArray<T0 = void, T1 = void, T2 = void> extends NSMutableArray {
    replaceObjectAtIndex_withObject<R = void, P0 = number, P1 = unknown>(_replaceObjectAtIndex: P0, _withObject: P1): R;
    removeLastObject<R = void>(): R;
    filterUsingPredicate<R = void, P0 = unknown>(_filterUsingPredicate: P0): R;
    sortUsingDescriptors<R = void, P0 = unknown>(_sortUsingDescriptors: P0): R;
    _sortUsingDescriptors<R = void, P0 = unknown>(__sortUsingDescriptors: P0): R;
    _fetchAllRanges<R = void>(): R;
    _contextDidSave<R = void>(): R;
    setShouldFetchAllRanges<R = void, P0 = boolean>(_setShouldFetchAllRanges: P0): R;
    removeObjectIdenticalTo<R = void, P0 = unknown>(_removeObjectIdenticalTo: P0): R;
    removeObjectsAtIndexes<R = void, P0 = unknown>(_removeObjectsAtIndexes: P0): R;
    removeObjectAtIndex<R = void, P0 = number>(_removeObjectAtIndex: P0): R;
    insertObject_atIndex<R = void, P0 = unknown, P1 = number>(_insertObject: P0, _atIndex: P1): R;
    addObject<R = void, P0 = unknown>(_addObject: P0): R;
    addObjectsIDsFromArray<R = void, P0 = unknown>(_addObjectsIDsFromArray: P0): R;
    indexOfObjectIdenticalTo<R = number, P0 = unknown>(_indexOfObjectIdenticalTo: P0): R;
    mutableCopy<R = unknown>(): R;
    objectAtIndex<R = unknown, P0 = number>(_objectAtIndex: P0): R;
    _underlyingArrayObjectAtIndex<R = unknown, P0 = number>(__underlyingArrayObjectAtIndex: P0): R;
    objectIDAtIndex<R = unknown, P0 = number>(_objectIDAtIndex: P0): R;
    objectsAtIndexes<R = unknown, P0 = unknown>(_objectsAtIndexes: P0): R;
    count<R = number>(): R;
    _fetchBatchForIndexes<R = void, P0 = unknown>(__fetchBatchForIndexes: P0): R;
    contextDidSave<R = void>(): R;
    setArray<R = void, P0 = unknown>(_setArray: P0): R;
    _ensureContentArrayIsMutable<R = void>(): R;
    updateBatchSizeForRange<R = void, P0 = _NSRange>(_updateBatchSizeForRange: P0): R;
    _fetchedIndexes<R = unknown>(): R;
    setOwner<R = void, P0 = unknown>(_setOwner: P0): R;
    dealloc<R = void>(): R;
    init<R = unknown>(): R;
  }
  namespace _NSLazyFetchingArray {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMutableArray {}
  }
}
