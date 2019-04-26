/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTextFinderAsyncSearchOperation<T0 = void, T1 = void, T2 = void> extends NSOperation {
    _sendUpdate<R = void>(): R;
    searchFinished<R = boolean>(): R;
    waitUntilSearchCompletedForRanges_orTimeout<R = boolean, P0 = unknown, P1 = number>(_waitUntilSearchCompletedForRanges: P0, _orTimeout: P1): R;
    _searchCompletedForIndexes<R = boolean, P0 = unknown>(__searchCompletedForIndexes: P0): R;
    _addMatchRange_searchedRange<R = void, P0 = _NSRange, P1 = _NSRange>(__addMatchRange: P0, _searchedRange: P1): R;
    accessSearchResultsInBlock<R = void, P0 = CDUnknownBlockType>(_accessSearchResultsInBlock: P0): R;
    indexesWaitedFor<R = NSIndexSet>(): R;
    setIndexesWaitedFor<R = void, P0 = NSIndexSet>(_v: P0): R;
    searchedIndexes<R = NSMutableIndexSet>(): R;
    matchRanges<R = NSMutableRangeArray>(): R;
    matchOptions<R = number>(): R;
    setMatchOptions<R = void, P0 = number>(_v: P0): R;
    searchOptions<R = number>(): R;
    setSearchOptions<R = void, P0 = number>(_v: P0): R;
    contentString<R = NSString>(): R;
    setContentString<R = void, P0 = NSString>(_v: P0): R;
    searchString<R = NSString>(): R;
    setSearchString<R = void, P0 = NSString>(_v: P0): R;
    searchController<R = NSTextFinderAsyncSearch>(): R;
    setSearchController<R = void, P0 = NSTextFinderAsyncSearch>(_v: P0): R;
  }
  namespace _NSTextFinderAsyncSearchOperation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSOperation {
      alloc<R = _NSTextFinderAsyncSearchOperation>(): R;
      new: <R = _NSTextFinderAsyncSearchOperation>() => R;
    }
  }
}
