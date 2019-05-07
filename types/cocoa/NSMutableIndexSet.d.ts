/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMutableIndexSet<T0 = void, T1 = void, T2 = void> extends NSIndexSet {
    shiftIndexesStartingAtIndex_by<R = void, P0 = number, P1 = number>(_shiftIndexesStartingAtIndex: P0, _by: P1): R;
    _removeAndDecrementBy_startingAtIndex<R = void, P0 = number, P1 = number>(__removeAndDecrementBy: P0, _startingAtIndex: P1): R;
    _incrementBy_startingAtIndex<R = void, P0 = number, P1 = number>(__incrementBy: P0, _startingAtIndex: P1): R;
    removeAllIndexes<R = void>(): R;
    removeIndex<R = void, P0 = number>(_removeIndex: P0): R;
    removeIndexesInRange<R = void, P0 = _NSRange>(_removeIndexesInRange: P0): R;
    addIndex<R = void, P0 = number>(_addIndex: P0): R;
    addIndexesInRange<R = void, P0 = _NSRange>(_addIndexesInRange: P0): R;
    _mergeOverlappingRangesStartingAtIndex<R = void, P0 = number>(__mergeOverlappingRangesStartingAtIndex: P0): R;
    removeIndexesPassingTest<R = void, P0 = CDUnknownBlockType>(_removeIndexesPassingTest: P0): R;
    removeIndexesInRange_options_passingTest<R = void, P0 = _NSRange, P1 = number, P2 = CDUnknownBlockType>(_removeIndexesInRange: P0, _options: P1, _passingTest: P2): R;
    removeIndexesWithOptions_passingTest<R = void, P0 = number, P1 = CDUnknownBlockType>(_removeIndexesWithOptions: P0, _passingTest: P1): R;
    removeIndexesFromIndexSet<R = void, P0 = unknown>(_removeIndexesFromIndexSet: P0): R;
    removeIndexes<R = void, P0 = unknown>(_removeIndexes: P0): R;
    addIndexes_count<R = void, P0 = number, P1 = number>(_addIndexes: P0, _count: P1): R;
    addIndexesFromIndexSet<R = void, P0 = unknown>(_addIndexesFromIndexSet: P0): R;
    addIndexes<R = void, P0 = unknown>(_addIndexes: P0): R;
    _replaceRangeInArrayAtIndex_withRange<R = void, P0 = number, P1 = _NSRange>(__replaceRangeInArrayAtIndex: P0, _withRange: P1): R;
    _removeRangeInArrayAtIndex<R = void, P0 = number>(__removeRangeInArrayAtIndex: P0): R;
    _insertRange_inArrayAtIndex<R = void, P0 = _NSRange, P1 = number>(__insertRange: P0, _inArrayAtIndex: P1): R;
    _addRangeToArray<R = void, P0 = _NSRange>(__addRangeToArray: P0): R;
    _ensureRangeCapacity<R = void, P0 = number>(__ensureRangeCapacity: P0): R;
  }
  namespace NSMutableIndexSet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSIndexSet {
      alloc<R = NSMutableIndexSet>(): R;
      new: <R = NSMutableIndexSet>() => R;
    }
  }
}

declare const NSMutableIndexSet: cocoa.NSMutableIndexSet.CLASS;
