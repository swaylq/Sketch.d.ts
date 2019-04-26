/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMutableSet<T0 = void, T1 = void, T2 = void> {
    // + NSMutableSet(NSMutableSet): 
    classForCoder<R = unknown>(): R;
    // + NSMutableSet(NSPredicateSupport): 
    filterUsingPredicate<R = void, P0 = unknown>(_filterUsingPredicate: P0): R;
  }
  namespace NSMutableSet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      // + NSMutableSet(NSCollectionViewAdditions): 
      setWithCollectionViewIndexPaths<R = unknown, P0 = unknown>(_setWithCollectionViewIndexPaths: P0): R;
      setWithCollectionViewIndexPath<R = unknown, P0 = unknown>(_setWithCollectionViewIndexPath: P0): R;
      // + NSMutableSet(NSPasteboardTypesAdditions): 
      _newUniformTypeIdentifierSet<R = unknown>(): R;
    }
  }
}

declare const NSMutableSet: cocoa.NSMutableSet.CLASS;
