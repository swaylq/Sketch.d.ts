/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSet<T0 = void, T1 = void, T2 = void> {
    // + NSSet(NSCollectionViewAdditions): 
    enumerateIndexPathsWithOptions_usingBlock<R = void, P0 = number, P1 = CDUnknownBlockType>(_enumerateIndexPathsWithOptions: P0, _usingBlock: P1): R;
    // + NSSet(NSKeyValueCoding): 
    valueForKeyPath<R = unknown, P0 = unknown>(_valueForKeyPath: P0): R;
    setValue_forKey<R = void, P0 = unknown, P1 = unknown>(_setValue: P0, _forKey: P1): R;
    valueForKey<R = unknown, P0 = unknown>(_valueForKey: P0): R;
    _distinctUnionOfSetsForKeyPath<R = unknown, P0 = unknown>(__distinctUnionOfSetsForKeyPath: P0): R;
    _distinctUnionOfObjectsForKeyPath<R = unknown, P0 = unknown>(__distinctUnionOfObjectsForKeyPath: P0): R;
    _distinctUnionOfArraysForKeyPath<R = unknown, P0 = unknown>(__distinctUnionOfArraysForKeyPath: P0): R;
    _minForKeyPath<R = unknown, P0 = unknown>(__minForKeyPath: P0): R;
    _maxForKeyPath<R = unknown, P0 = unknown>(__maxForKeyPath: P0): R;
    _countForKeyPath<R = unknown, P0 = unknown>(__countForKeyPath: P0): R;
    _avgForKeyPath<R = unknown, P0 = unknown>(__avgForKeyPath: P0): R;
    _sumForKeyPath<R = unknown, P0 = unknown>(__sumForKeyPath: P0): R;
    // + NSSet(NSKeyValueObserverRegistration): 
    removeObserver_forKeyPath<R = void, P0 = unknown, P1 = unknown>(_removeObserver: P0, _forKeyPath: P1): R;
    removeObserver_forKeyPath_context<R = void, P0 = unknown, P1 = unknown, P2 = void>(_removeObserver: P0, _forKeyPath: P1, _context: P2): R;
    addObserver_forKeyPath_options_context<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = void>(_addObserver: P0, _forKeyPath: P1, _options: P2, _context: P3): R;
    // + NSSet(NSKeyValueSorting): 
    sortedArrayUsingDescriptors<R = unknown, P0 = unknown>(_sortedArrayUsingDescriptors: P0): R;
    // + NSSet(NSPredicateSupport): 
    filteredSetUsingPredicate<R = unknown, P0 = unknown>(_filteredSetUsingPredicate: P0): R;
    // + NSSet(NSSet): 
    classForCoder<R = unknown>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    // + NSSet(NSSetPortCoding): 
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
    // + NSSet(BezierInterval): 
    lastOffsetInBezierInterval_ms<R = unknown>(): R;
    firstOffsetInBezierInterval_ms<R = unknown>(): R;
    sortedOffsets_ms<R = unknown>(): R;
    sortedOffsetsInBezierInterval_ms<R = unknown>(): R;
    offsetsInBezierInterval_ms<R = unknown>(): R;
  }
  namespace NSSet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      // + NSSet(NSCollectionViewAdditions): 
      setWithCollectionViewIndexPaths<R = unknown, P0 = unknown>(_setWithCollectionViewIndexPaths: P0): R;
      setWithCollectionViewIndexPath<R = unknown, P0 = unknown>(_setWithCollectionViewIndexPath: P0): R;
      // + NSSet(NSSet): 
      supportsSecureCoding<R = boolean>(): R;
    }
  }
}

declare const NSSet: cocoa.NSSet.CLASS;
