/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewBinder<T0 = void, T1 = void, T2 = void> extends NSBinder {
    collectionView_didChangeToSelectionIndexes<R = void, P0 = unknown, P1 = unknown>(_collectionView: P0, _didChangeToSelectionIndexes: P1): R;
    _updateContent<R = void>(): R;
    _updateSelectionIndexes<R = void, P0 = unknown>(__updateSelectionIndexes: P0): R;
  }
  namespace NSCollectionViewBinder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSBinder {
      alloc<R = NSCollectionViewBinder>(): R;
      new: <R = NSCollectionViewBinder>() => R;
    }
  }
}

declare const NSCollectionViewBinder: cocoa.NSCollectionViewBinder.CLASS;
