/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCollectionViewCachedSectionInfo<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    description<R = unknown>(): R;
    enumerateObjectsUsingBlock<R = void, P0 = CDUnknownBlockType>(_enumerateObjectsUsingBlock: P0): R;
    reloadItemsAtIndexes<R = void, P0 = unknown>(_reloadItemsAtIndexes: P0): R;
    moveItemFromIndex_toIndex<R = void, P0 = number, P1 = number>(_moveItemFromIndex: P0, _toIndex: P1): R;
    deleteItemsAtIndexes<R = void, P0 = unknown>(_deleteItemsAtIndexes: P0): R;
    insertItemsAtIndexes<R = void, P0 = unknown>(_insertItemsAtIndexes: P0): R;
    actualItemCount<R = number>(): R;
    setObject_atIndex<R = void, P0 = unknown, P1 = number>(_setObject: P0, _atIndex: P1): R;
    objectAtIndex<R = unknown, P0 = number>(_objectAtIndex: P0): R;
    processBatchUpdateItemMoves<R = void, P0 = unknown>(_processBatchUpdateItemMoves: P0): R;
    fetchAllNeededRepresentedObjectsFromObjectBasedDataSource_forCollectionView<R = void, P0 = unknown, P1 = unknown>(_fetchAllNeededRepresentedObjectsFromObjectBasedDataSource: P0, _forCollectionView: P1): R;
    needsToFetchAnyRepresentedObjects<R = boolean>(): R;
    debugDescription<R = unknown>(): R;
    invalidateAllRepresentedObjectPointers<R = void>(): R;
    representedObject<R = unknown>(): R;
    setRepresentedObject<R = void, P0 = unknown>(_v: P0): R;
    itemCount<R = number>(): R;
    setItemCount<R = void, P0 = number>(_v: P0): R;
  }
  namespace _NSCollectionViewCachedSectionInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSCollectionViewCachedSectionInfo>(): R;
      new: <R = _NSCollectionViewCachedSectionInfo>() => R;
    }
  }
}
