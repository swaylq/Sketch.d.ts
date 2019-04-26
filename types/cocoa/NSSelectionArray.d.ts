/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSelectionArray<T0 = void, T1 = void, T2 = void> extends NSArray {
    enumerateRangesAtIndexes_options_usingBlock<R = void, P0 = unknown, P1 = number, P2 = CDUnknownBlockType>(_enumerateRangesAtIndexes: P0, _options: P1, _usingBlock: P2): R;
    enumerateRangesWithOptions_usingBlock<R = void, P0 = number, P1 = CDUnknownBlockType>(_enumerateRangesWithOptions: P0, _usingBlock: P1): R;
    enumerateRangesUsingBlock<R = void, P0 = CDUnknownBlockType>(_enumerateRangesUsingBlock: P0): R;
    indexOfFirstRangeContainingOrFollowing<R = number, P0 = number>(_indexOfFirstRangeContainingOrFollowing: P0): R;
    rangeAtIndex<R = _NSRange, P0 = number>(_rangeAtIndex: P0): R;
    maximumRange<R = _NSRange>(): R;
    lastRange<R = _NSRange>(): R;
    firstRange<R = _NSRange>(): R;
    isEqualToArray<R = boolean, P0 = unknown>(_isEqualToArray: P0): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    objectAtIndex<R = unknown, P0 = number>(_objectAtIndex: P0): R;
    count<R = number>(): R;
    initWithArray<R = unknown, P0 = unknown>(_initWithArray: P0): R;
    initWithObjects_count<R = unknown, P0 = unknown, P1 = number>(_initWithObjects: P0, _count: P1): R;
    initWithIndexes<R = unknown, P0 = unknown>(_initWithIndexes: P0): R;
    initWithRange<R = unknown, P0 = _NSRange>(_initWithRange: P0): R;
    initWithRanges_count<R = unknown, P0 = _NSRange, P1 = number>(_initWithRanges: P0, _count: P1): R;
  }
  namespace NSSelectionArray {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSArray {
      arrayWithObjects_count<R = unknown, P0 = unknown, P1 = number>(_arrayWithObjects: P0, _count: P1): R;
      arrayWithArray<R = unknown, P0 = unknown>(_arrayWithArray: P0): R;
      arrayWithIndexes<R = unknown, P0 = unknown>(_arrayWithIndexes: P0): R;
      arrayWithRange<R = unknown, P0 = _NSRange>(_arrayWithRange: P0): R;
      arrayWithRanges_count<R = unknown, P0 = _NSRange, P1 = number>(_arrayWithRanges: P0, _count: P1): R;
      newWithObjects_count<R = unknown, P0 = unknown, P1 = number>(_newWithObjects: P0, _count: P1): R;
      newWithArray<R = unknown, P0 = unknown>(_newWithArray: P0): R;
      newWithIndexes<R = unknown, P0 = unknown>(_newWithIndexes: P0): R;
      newWithRange<R = unknown, P0 = _NSRange>(_newWithRange: P0): R;
      newWithRanges_count<R = unknown, P0 = _NSRange, P1 = number>(_newWithRanges: P0, _count: P1): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSSelectionArray: cocoa.NSSelectionArray.CLASS;
