/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMutableOrderedSet<T0 = void, T1 = void, T2 = void> {
    // + NSMutableOrderedSet(NSKeyValueSorting): 
    sortUsingDescriptors<R = void, P0 = unknown>(_sortUsingDescriptors: P0): R;
    // + NSMutableOrderedSet(NSPredicateSupport): 
    filterUsingPredicate<R = void, P0 = unknown>(_filterUsingPredicate: P0): R;
    // + NSMutableOrderedSet(MochaAdditions): 
    mo_setObject_forIndexedSubscript<R = void, P0 = unknown, P1 = NSUInteger>(_mo_setObject: P0, _forIndexedSubscript: P1): R;
  }
  namespace NSMutableOrderedSet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const NSMutableOrderedSet: cocoa.NSMutableOrderedSet.CLASS;
