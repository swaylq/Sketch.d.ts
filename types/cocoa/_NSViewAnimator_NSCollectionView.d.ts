/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSViewAnimator_NSCollectionView<T0 = void, T1 = void, T2 = void> extends _NSViewAnimator {
    reloadItemsAtIndexes_inSectionObject<R = void, P0 = unknown, P1 = unknown>(_reloadItemsAtIndexes: P0, _inSectionObject: P1): R;
    deleteItemsAtIndexes_inSectionObject<R = void, P0 = unknown, P1 = unknown>(_deleteItemsAtIndexes: P0, _inSectionObject: P1): R;
    insertItemsAtIndexes_inSectionObject<R = void, P0 = unknown, P1 = unknown>(_insertItemsAtIndexes: P0, _inSectionObject: P1): R;
    performBatchUpdates_completionHandler<R = void, P0 = CDUnknownBlockType, P1 = CDUnknownBlockType>(_performBatchUpdates: P0, _completionHandler: P1): R;
    moveItemAtIndexPath_toIndexPath<R = void, P0 = unknown, P1 = unknown>(_moveItemAtIndexPath: P0, _toIndexPath: P1): R;
    reloadItemsAtIndexPaths<R = void, P0 = unknown>(_reloadItemsAtIndexPaths: P0): R;
    deleteItemsAtIndexPaths<R = void, P0 = unknown>(_deleteItemsAtIndexPaths: P0): R;
    insertItemsAtIndexPaths<R = void, P0 = unknown>(_insertItemsAtIndexPaths: P0): R;
    moveSection_toSection<R = void, P0 = number, P1 = number>(_moveSection: P0, _toSection: P1): R;
    reloadSections<R = void, P0 = unknown>(_reloadSections: P0): R;
    deleteSections<R = void, P0 = unknown>(_deleteSections: P0): R;
    insertSections<R = void, P0 = unknown>(_insertSections: P0): R;
    setSelectionIndexPaths<R = void, P0 = unknown>(_setSelectionIndexPaths: P0): R;
    setCollectionViewLayout<R = void, P0 = unknown>(_setCollectionViewLayout: P0): R;
  }
  namespace _NSViewAnimator_NSCollectionView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSViewAnimator {}
  }
}
