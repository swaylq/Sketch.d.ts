/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCollectionViewDataSourceAdapter<T0 = void, T1 = void, T2 = void> extends NSObject, NSCollectionViewDataSourceProtocol {
    dealloc<R = void>(): R;
    moveItemAtIndexPath_toIndexPath<R = void, P0 = unknown, P1 = unknown>(_moveItemAtIndexPath: P0, _toIndexPath: P1): R;
    reloadItemsAtIndexPaths<R = void, P0 = unknown>(_reloadItemsAtIndexPaths: P0): R;
    deleteItemsAtIndexPaths<R = void, P0 = unknown>(_deleteItemsAtIndexPaths: P0): R;
    insertItemsAtIndexPaths<R = void, P0 = unknown>(_insertItemsAtIndexPaths: P0): R;
    moveSection_toSection<R = void, P0 = number, P1 = number>(_moveSection: P0, _toSection: P1): R;
    reloadSections<R = void, P0 = unknown>(_reloadSections: P0): R;
    deleteSections<R = void, P0 = unknown>(_deleteSections: P0): R;
    insertSections<R = void, P0 = unknown>(_insertSections: P0): R;
    _insertSections_representedObjects<R = void, P0 = unknown, P1 = unknown>(__insertSections: P0, _representedObjects: P1): R;
    _indexPathForRepresentedObject<R = unknown, P0 = unknown>(__indexPathForRepresentedObject: P0): R;
    _indexPathOfItemWithRepresentedObject<R = unknown, P0 = unknown>(__indexPathOfItemWithRepresentedObject: P0): R;
    _rebuildRepresentedObjectToIndexPathMap<R = void>(): R;
    _clearRepresentedObjectToIndexPathMap<R = void>(): R;
    _representedObjectForSectionAtIndex<R = unknown, P0 = number>(__representedObjectForSectionAtIndex: P0): R;
    _setRepresentedObject_forSectionAtIndex<R = void, P0 = unknown, P1 = number>(__setRepresentedObject: P0, _forSectionAtIndex: P1): R;
    _representedObjectForIndexPath<R = unknown, P0 = unknown>(__representedObjectForIndexPath: P0): R;
    _representedObjectForItemAtIndexPath<R = unknown, P0 = unknown>(__representedObjectForItemAtIndexPath: P0): R;
    _representedObjectForCurrentDataSourceInvocation<R = unknown>(): R;
    _invalidateEverything<R = void>(): R;
    _fetchSectionInfoAtIndex<R = unknown, P0 = number>(__fetchSectionInfoAtIndex: P0): R;
    _fetchSectionObjectAtIndex<R = unknown, P0 = number>(__fetchSectionObjectAtIndex: P0): R;
    _indexOfSectionWithRepresentedObject<R = number, P0 = unknown>(__indexOfSectionWithRepresentedObject: P0): R;
    _endBatchUpdate<R = void>(): R;
    _allBatchUpdateChangesReceived<R = void>(): R;
    _processQueuedItemMoves<R = void>(): R;
    fetchAllNeededRepresentedObjects<R = void>(): R;
    _beginBatchUpdate<R = void>(): R;
    _flushCacheIfScheduled<R = void>(): R;
    _scheduleFlushCacheAtNextLayoutBecauseReloadDataWasInvoked<R = void>(): R;
    collectionView<R = NSCollectionView>(): R;
    setCollectionView<R = void, P0 = NSCollectionView>(_v: P0): R;
    dataSource<R = NSCollectionViewDataSource>(): R;
    setDataSource<R = void, P0 = NSCollectionViewDataSource>(_v: P0): R;
    sectionCount<R = number>(): R;
    setSectionCount<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSCollectionViewDataSourceAdapter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCollectionViewDataSourceProtocol {
      alloc<R = _NSCollectionViewDataSourceAdapter>(): R;
      new: <R = _NSCollectionViewDataSourceAdapter>() => R;
    }
  }
}
