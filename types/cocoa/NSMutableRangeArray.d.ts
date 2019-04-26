/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMutableRangeArray<T0 = void, T1 = void, T2 = void> extends NSMutableArray {
    replaceObjectAtIndex_withObject<R = void, P0 = number, P1 = unknown>(_replaceObjectAtIndex: P0, _withObject: P1): R;
    replaceRangeAtIndex_withRange<R = void, P0 = number, P1 = _NSRange>(_replaceRangeAtIndex: P0, _withRange: P1): R;
    removeAllObjects<R = void>(): R;
    removeLastObject<R = void>(): R;
    removeLastRange<R = void>(): R;
    addObjectsFromArray<R = void, P0 = unknown>(_addObjectsFromArray: P0): R;
    addRangesFromArray<R = void, P0 = unknown>(_addRangesFromArray: P0): R;
    addObject<R = void, P0 = unknown>(_addObject: P0): R;
    addRange<R = void, P0 = _NSRange>(_addRange: P0): R;
    removeObjectAtIndex<R = void, P0 = number>(_removeObjectAtIndex: P0): R;
    removeRangeAtIndex<R = void, P0 = number>(_removeRangeAtIndex: P0): R;
    insertObject_atIndex<R = void, P0 = unknown, P1 = number>(_insertObject: P0, _atIndex: P1): R;
    insertRange_atIndex<R = void, P0 = _NSRange, P1 = number>(_insertRange: P0, _atIndex: P1): R;
    removeRangesAtIndexes<R = void, P0 = unknown>(_removeRangesAtIndexes: P0): R;
    insertRanges_atIndexes<R = void, P0 = unknown, P1 = unknown>(_insertRanges: P0, _atIndexes: P1): R;
    _growIfNecessary<R = void>(): R;
    _setCapacity<R = void, P0 = number>(__setCapacity: P0): R;
    indexOfFirstRangeContainingOrFollowing<R = number, P0 = number>(_indexOfFirstRangeContainingOrFollowing: P0): R;
    rangeAtIndex<R = _NSRange, P0 = number>(_rangeAtIndex: P0): R;
    lastRange<R = _NSRange>(): R;
    firstRange<R = _NSRange>(): R;
    isEqualToArray<R = boolean, P0 = unknown>(_isEqualToArray: P0): R;
    objectsAtIndexes<R = unknown, P0 = unknown>(_objectsAtIndexes: P0): R;
    rangesAtIndexes<R = unknown, P0 = unknown>(_rangesAtIndexes: P0): R;
    subarrayWithRange<R = unknown, P0 = _NSRange>(_subarrayWithRange: P0): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    objectAtIndex<R = unknown, P0 = number>(_objectAtIndex: P0): R;
    count<R = number>(): R;
    dealloc<R = void>(): R;
    init<R = unknown>(): R;
    initWithRange<R = unknown, P0 = _NSRange>(_initWithRange: P0): R;
    initWithRanges_count<R = unknown, P0 = _NSRange, P1 = number>(_initWithRanges: P0, _count: P1): R;
    initWithCapacity<R = unknown, P0 = number>(_initWithCapacity: P0): R;
  }
  namespace NSMutableRangeArray {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMutableArray {
      array<R = unknown>(): R;
      arrayWithRange<R = unknown, P0 = _NSRange>(_arrayWithRange: P0): R;
      arrayWithRanges_count<R = unknown, P0 = _NSRange, P1 = number>(_arrayWithRanges: P0, _count: P1): R;
    }
  }
}

declare const NSMutableRangeArray: cocoa.NSMutableRangeArray.CLASS;
