/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextFinderAsyncSearch<T0 = void, T1 = void, T2 = void> extends NSObject {
    _scheduleFirstMatchOperation<R = void>(): R;
    _locateFirstMatchIfNecessary<R = void>(): R;
    waitUntilSearchCompletedForRanges_orTimeout<R = boolean, P0 = unknown, P1 = boolean>(_waitUntilSearchCompletedForRanges: P0, _orTimeout: P1): R;
    matchRanges<R = unknown>(): R;
    stopSearchingAndWait<R = void, P0 = boolean>(_stopSearchingAndWait: P0): R;
    _searchCompleted<R = void>(): R;
    _foundMatchRanges_searchedIndexes<R = void, P0 = unknown, P1 = unknown>(__foundMatchRanges: P0, _searchedIndexes: P1): R;
    start<R = void>(): R;
    _foundFirstMatchInRange<R = void, P0 = _NSRange>(__foundFirstMatchInRange: P0): R;
    _addRanges_searchedIndexes<R = void, P0 = unknown, P1 = unknown>(__addRanges: P0, _searchedIndexes: P1): R;
    _getIndexes_forInsertionOfRanges<R = void, P0 = unknown, P1 = unknown>(__getIndexes: P0, _forInsertionOfRanges: P1): R;
    notifyOfFirstMatchAfterIndex_withBlock<R = void, P0 = number, P1 = CDUnknownBlockType>(_notifyOfFirstMatchAfterIndex: P0, _withBlock: P1): R;
    dealloc<R = void>(): R;
    initWithTextFinderImpl<R = unknown, P0 = unknown>(_initWithTextFinderImpl: P0): R;
    isSearching<R = boolean>(): R;
    completionBlock<R = CDUnknownBlockType>(): R;
    setCompletionBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
  }
  namespace NSTextFinderAsyncSearch {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSTextFinderAsyncSearch>(): R;
      new: <R = NSTextFinderAsyncSearch>() => R;
      queue<R = unknown>(): R;
    }
  }
}

declare const NSTextFinderAsyncSearch: cocoa.NSTextFinderAsyncSearch.CLASS;
