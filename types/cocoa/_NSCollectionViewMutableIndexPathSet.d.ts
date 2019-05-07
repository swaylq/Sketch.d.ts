/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCollectionViewMutableIndexPathSet<T0 = void, T1 = void, T2 = void> extends NSMutableSet {
    dealloc<R = void>(): R;
    description<R = unknown>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    enumerateIndexRangesBySectionWithOptions_usingBlock<R = void, P0 = number, P1 = CDUnknownBlockType>(_enumerateIndexRangesBySectionWithOptions: P0, _usingBlock: P1): R;
    enumerateIndexSetsBySectionWithOptions_usingBlock<R = void, P0 = number, P1 = CDUnknownBlockType>(_enumerateIndexSetsBySectionWithOptions: P0, _usingBlock: P1): R;
    enumerateIndexPathsWithOptions_usingBlock<R = void, P0 = number, P1 = CDUnknownBlockType>(_enumerateIndexPathsWithOptions: P0, _usingBlock: P1): R;
    indexPathGreaterThan<R = unknown, P0 = unknown>(_indexPathGreaterThan: P0): R;
    indexPathLessThan<R = unknown, P0 = unknown>(_indexPathLessThan: P0): R;
    itemIndexesInSection<R = unknown, P0 = number>(_itemIndexesInSection: P0): R;
    containsItemIndexes_inSection<R = boolean, P0 = unknown, P1 = number>(_containsItemIndexes: P0, _inSection: P1): R;
    containsItemIndex_inSection<R = boolean, P0 = number, P1 = number>(_containsItemIndex: P0, _inSection: P1): R;
    containsIndexPath<R = boolean, P0 = unknown>(_containsIndexPath: P0): R;
    sectionIndexes<R = unknown>(): R;
    allIndexPaths<R = unknown>(): R;
    removeObject<R = void, P0 = unknown>(_removeObject: P0): R;
    addObject<R = void, P0 = unknown>(_addObject: P0): R;
    addItemIndexes_inSection<R = void, P0 = unknown, P1 = number>(_addItemIndexes: P0, _inSection: P1): R;
    _itemIndexSetsBySectionCreatingIfNecessary<R = unknown>(): R;
    initWithSet<R = unknown, P0 = unknown>(_initWithSet: P0): R;
    initWithObjects_count<R = unknown, P0 = unknown, P1 = number>(_initWithObjects: P0, _count: P1): R;
    initWithCapacity<R = unknown, P0 = number>(_initWithCapacity: P0): R;
    init<R = unknown>(): R;
    objectEnumerator<R = unknown>(): R;
    member<R = unknown, P0 = unknown>(_member: P0): R;
    count<R = number>(): R;
    countByEnumeratingWithState_objects_count<R = number, P0 = unknown, P1 = unknown, P2 = number>(_countByEnumeratingWithState: P0, _objects: P1, _count: P2): R;
    mutableCopy<R = unknown>(): R;
    mutableCopyWithZone<R = unknown, P0 = _NSZone>(_mutableCopyWithZone: P0): R;
    copy<R = unknown>(): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
  }
  namespace _NSCollectionViewMutableIndexPathSet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMutableSet {
      supportsSecureCoding<R = boolean>(): R;
      setWithCollectionViewIndexPaths<R = unknown, P0 = unknown>(_setWithCollectionViewIndexPaths: P0): R;
      setWithCollectionViewIndexPath<R = unknown, P0 = unknown>(_setWithCollectionViewIndexPath: P0): R;
    }
  }
}
