/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSIndexSet<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSMutableCopyingProtocol, NSSecureCodingProtocol {
    enumerateRangesInRange_options_usingBlock<R = void, P0 = _NSRange, P1 = number, P2 = CDUnknownBlockType>(_enumerateRangesInRange: P0, _options: P1, _usingBlock: P2): R;
    enumerateRangesWithOptions_usingBlock<R = void, P0 = number, P1 = CDUnknownBlockType>(_enumerateRangesWithOptions: P0, _usingBlock: P1): R;
    enumerateRangesUsingBlock<R = void, P0 = CDUnknownBlockType>(_enumerateRangesUsingBlock: P0): R;
    indexesInRange_options_passingTest<R = unknown, P0 = _NSRange, P1 = number, P2 = CDUnknownBlockType>(_indexesInRange: P0, _options: P1, _passingTest: P2): R;
    indexesWithOptions_passingTest<R = unknown, P0 = number, P1 = CDUnknownBlockType>(_indexesWithOptions: P0, _passingTest: P1): R;
    indexesPassingTest<R = unknown, P0 = CDUnknownBlockType>(_indexesPassingTest: P0): R;
    indexInRange_options_passingTest<R = number, P0 = _NSRange, P1 = number, P2 = CDUnknownBlockType>(_indexInRange: P0, _options: P1, _passingTest: P2): R;
    indexWithOptions_passingTest<R = number, P0 = number, P1 = CDUnknownBlockType>(_indexWithOptions: P0, _passingTest: P1): R;
    indexPassingTest<R = number, P0 = CDUnknownBlockType>(_indexPassingTest: P0): R;
    enumerateIndexesInRange_options_usingBlock<R = void, P0 = _NSRange, P1 = number, P2 = CDUnknownBlockType>(_enumerateIndexesInRange: P0, _options: P1, _usingBlock: P2): R;
    enumerateIndexesWithOptions_usingBlock<R = void, P0 = number, P1 = CDUnknownBlockType>(_enumerateIndexesWithOptions: P0, _usingBlock: P1): R;
    enumerateIndexesUsingBlock<R = void, P0 = CDUnknownBlockType>(_enumerateIndexesUsingBlock: P0): R;
    __forwardEnumerateRanges<R = void, P0 = CDUnknownBlockType>(___forwardEnumerateRanges: P0): R;
    description<R = unknown>(): R;
    _numberEnumerator<R = unknown>(): R;
    intersectsIndexesInRange<R = boolean, P0 = _NSRange>(_intersectsIndexesInRange: P0): R;
    containsIndexes<R = boolean, P0 = unknown>(_containsIndexes: P0): R;
    containsIndexesInRange<R = boolean, P0 = _NSRange>(_containsIndexesInRange: P0): R;
    containsIndex<R = boolean, P0 = number>(_containsIndex: P0): R;
    rangeAtIndex<R = _NSRange, P0 = number>(_rangeAtIndex: P0): R;
    rangeCount<R = number>(): R;
    countOfIndexesInRange<R = number, P0 = _NSRange>(_countOfIndexesInRange: P0): R;
    __getContainmentVector_inRange<R = number, P0 = string, P1 = _NSRange>(___getContainmentVector: P0, _inRange: P1): R;
    getIndexes_maxCount_inIndexRange<R = number, P0 = number, P1 = number, P2 = _NSRange>(_getIndexes: P0, _maxCount: P1, _inIndexRange: P2): R;
    indexLessThanOrEqualToIndex<R = number, P0 = number>(_indexLessThanOrEqualToIndex: P0): R;
    indexGreaterThanOrEqualToIndex<R = number, P0 = number>(_indexGreaterThanOrEqualToIndex: P0): R;
    indexLessThanIndex<R = number, P0 = number>(_indexLessThanIndex: P0): R;
    indexGreaterThanIndex<R = number, P0 = number>(_indexGreaterThanIndex: P0): R;
    _indexClosestToIndex_equalAllowed_following<R = number, P0 = number, P1 = boolean, P2 = boolean>(__indexClosestToIndex: P0, _equalAllowed: P1, _following: P2): R;
    isEqualToIndexSet<R = boolean, P0 = unknown>(_isEqualToIndexSet: P0): R;
    hash<R = number>(): R;
    _indexOfRangeAfterOrContainingIndex<R = number, P0 = number>(__indexOfRangeAfterOrContainingIndex: P0): R;
    _indexOfRangeBeforeOrContainingIndex<R = number, P0 = number>(__indexOfRangeBeforeOrContainingIndex: P0): R;
    _indexOfRangeContainingIndex<R = number, P0 = number>(__indexOfRangeContainingIndex: P0): R;
    classForCoder<R = unknown>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    dealloc<R = void>(): R;
    initWithIndexes_count<R = unknown, P0 = number, P1 = number>(_initWithIndexes: P0, _count: P1): R;
    initWithIndexSet<R = unknown, P0 = unknown>(_initWithIndexSet: P0): R;
    _setContentToContentFromIndexSet<R = void, P0 = unknown>(__setContentToContentFromIndexSet: P0): R;
    initWithIndexesInRange<R = unknown, P0 = _NSRange>(_initWithIndexesInRange: P0): R;
    initWithIndex<R = unknown, P0 = number>(_initWithIndex: P0): R;
    _init<R = unknown>(): R;
    _indexAtIndex<R = number, P0 = number>(__indexAtIndex: P0): R;
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
    lastIndex<R = number>(): R;
    firstIndex<R = number>(): R;
    count<R = number>(): R;
  }
  namespace NSIndexSet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSMutableCopyingProtocol, NSSecureCodingProtocol {
      alloc<R = NSIndexSet>(): R;
      new: <R = NSIndexSet>() => R;
      indexSetWithIndexes_count<R = unknown, P0 = number, P1 = number>(_indexSetWithIndexes: P0, _count: P1): R;
      indexSetWithIndexesInRange<R = unknown, P0 = _NSRange>(_indexSetWithIndexesInRange: P0): R;
      indexSetWithIndex<R = unknown, P0 = number>(_indexSetWithIndex: P0): R;
      indexSet<R = unknown>(): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSIndexSet: cocoa.NSIndexSet.CLASS;
