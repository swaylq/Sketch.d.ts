/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTextFinderSubstringProxy<T0 = void, T1 = void, T2 = void> extends NSString {
    _textfinder_firstMatchForRegularExpression_inRange<R = _NSRange, P0 = unknown, P1 = _NSRange>(__textfinder_firstMatchForRegularExpression: P0, _inRange: P1): R;
    _nextSearchBoundaryAfterOrIncluding_index_forward<R = number, P0 = boolean, P1 = number, P2 = boolean>(__nextSearchBoundaryAfterOrIncluding: P0, _index: P1, _forward: P2): R;
    _getSubstring_effectiveRange_searchBoundary_atCharacterIndex<R = void, P0 = unknown, P1 = _NSRange, P2 = string, P3 = number>(__getSubstring: P0, _effectiveRange: P1, _searchBoundary: P2, _atCharacterIndex: P3): R;
    length<R = number>(): R;
    dealloc<R = void>(): R;
    initWithTextFinderClient<R = unknown, P0 = unknown>(_initWithTextFinderClient: P0): R;
  }
  namespace _NSTextFinderSubstringProxy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSString {
      alloc<R = _NSTextFinderSubstringProxy>(): R;
      new: <R = _NSTextFinderSubstringProxy>() => R;
    }
  }
}
