/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSManagedProxy<T0 = void, T1 = void, T2 = void> extends NSObject {
    _lazyFetchResultProxyForObjects<R = unknown, P0 = unknown>(__lazyFetchResultProxyForObjects: P0): R;
    updateBatchSizeForRange<R = void, P0 = _NSRange>(_updateBatchSizeForRange: P0): R;
    _managedObjectsChangedInContext<R = void, P0 = unknown>(__managedObjectsChangedInContext: P0): R;
    _refetchForContext<R = void, P0 = unknown>(__refetchForContext: P0): R;
    _managedObjectContextDidSave<R = void, P0 = unknown>(__managedObjectContextDidSave: P0): R;
    _objectMatchesFetchPredicate<R = boolean, P0 = unknown>(__objectMatchesFetchPredicate: P0): R;
    _storesDidChange<R = void, P0 = unknown>(__storesDidChange: P0): R;
    _objectMatchesEntity<R = boolean, P0 = unknown>(__objectMatchesEntity: P0): R;
    deleteObject<R = void, P0 = unknown>(_deleteObject: P0): R;
    newInsertedObject<R = unknown>(): R;
    newInsertedObjectForEntity<R = unknown, P0 = unknown>(_newInsertedObjectForEntity: P0): R;
    _executeFetchForObjects<R = void, P0 = unknown>(__executeFetchForObjects: P0): R;
    fetchObjectsWithFetchRequest_error<R = unknown, P0 = unknown, P1 = unknown>(_fetchObjectsWithFetchRequest: P0, _error: P1): R;
    fetchRequestWithSortDescriptors_limit<R = unknown, P0 = unknown, P1 = number>(_fetchRequestWithSortDescriptors: P0, _limit: P1): R;
    _relationshipKeyPathsForPrefetching<R = unknown>(): R;
    usableSortDescriptorsFromArray<R = unknown, P0 = unknown>(_usableSortDescriptorsFromArray: P0): R;
    isEntityUsable<R = boolean, P0 = unknown>(_isEntityUsable: P0): R;
    _entity<R = unknown>(): R;
    _persistentStoreCoordinator<R = unknown>(): R;
    _managedObjectContext<R = unknown>(): R;
    sortDescriptors<R = unknown>(): R;
    setSortDescriptors<R = void, P0 = unknown>(_setSortDescriptors: P0): R;
    fetchPredicate<R = unknown>(): R;
    setFetchPredicate<R = void, P0 = unknown>(_setFetchPredicate: P0): R;
    entityName<R = unknown>(): R;
    setEntityName<R = void, P0 = unknown>(_setEntityName: P0): R;
    managedObjectContext<R = unknown>(): R;
    setManagedObjectContext<R = void, P0 = unknown>(_setManagedObjectContext: P0): R;
    _callbackHandler<R = unknown>(): R;
    _setCallbackHandler<R = void, P0 = unknown>(__setCallbackHandler: P0): R;
    dealloc<R = void>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
  }
  namespace _NSManagedProxy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSManagedProxy>(): R;
      new: <R = _NSManagedProxy>() => R;
    }
  }
}
