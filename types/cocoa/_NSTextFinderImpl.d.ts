/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTextFinderImpl<T = any> extends cocoa.NSObject, cocoa.NSWindowDelegateProtocol, cocoa.NSComboBoxDelegateProtocol, cocoa.NSFindPatternManagerProtocol {
    _asynchronousDocumentFindOptions<R = number, P0 = boolean>(__asynchronousDocumentFindOptions: P0): R;
    _didFindAsynchronousDocumentMatch_wrapped_forward<R = void, P0 = unknown, P1 = boolean, P2 = boolean>(__didFindAsynchronousDocumentMatch: P0, _wrapped: P1, _forward: P2): R;
    incremental_nextAsynchronousDocumentFindMatchForward_wrap_completionHandler<R = void, P0 = boolean, P1 = boolean, P2 = cocoa.CDUnknownBlockType>(_incremental_nextAsynchronousDocumentFindMatchForward: P0, _wrap: P1, _completionHandler: P2): R;
    _startIncrementalAsynchronousDocumentSearchShowingFirstMatch<R = void, P0 = boolean>(__startIncrementalAsynchronousDocumentSearchShowingFirstMatch: P0): R;
    _DOMRangeMatchesForString_webView_inDOMRange<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__DOMRangeMatchesForString: P0, _webView: P1, _inDOMRange: P2): R;
    supportsFullWord<R = boolean>(): R;
    nextMatchAfterCurrentRange_inWebView_forward_wrap<R = void, P0 = unknown, P1 = unknown, P2 = boolean, P3 = boolean>(_nextMatchAfterCurrentRange: P0, _inWebView: P1, _forward: P2, _wrap: P3): R;
    incremental_nextMatchAfterCurrentWebViewMatchForward_wrap<R = boolean, P0 = boolean, P1 = boolean>(_incremental_nextMatchAfterCurrentWebViewMatchForward: P0, _wrap: P1): R;
    _showFindIndicatorForDOMRange_webView<R = void, P0 = unknown, P1 = unknown>(__showFindIndicatorForDOMRange: P0, _webView: P1): R;
    _matchDOMRangesForWebView<R = unknown, P0 = unknown>(__matchDOMRangesForWebView: P0): R;
    _matchWebViews<R = unknown>(): R;
    _startWebViewSearchShowingFirstMatch<R = void, P0 = boolean>(__startWebViewSearchShowingFirstMatch: P0): R;
    _maxWebViewMatchCount<R = number>(): R;
    _isWebViewMatchCountOverLimit<R = boolean>(): R;
    _searchWebViewsShowingFirstMatch<R = void, P0 = boolean>(__searchWebViewsShowingFirstMatch: P0): R;
    _clearWebViewMatches<R = void>(): R;
    _addDOMRange_webView<R = void, P0 = unknown, P1 = unknown>(__addDOMRange: P0, _webView: P1): R;
    _hasValidFindPattern<R = boolean>(): R;
    _hasFindPattern<R = boolean>(): R;
    _replaceField<R = unknown>(): R;
    _findField<R = unknown>(): R;
    addStringToRecentReplaceStrings<R = void, P0 = unknown>(_addStringToRecentReplaceStrings: P0): R;
    addStringToRecentSearchStrings<R = void, P0 = unknown>(_addStringToRecentSearchStrings: P0): R;
    incremental_allMatchesInRanges<R = unknown, P0 = unknown>(_incremental_allMatchesInRanges: P0): R;
    incremental_nextMatchAfterCurrentRange_forward_wrap<R = cocoa._NSRange, P0 = cocoa._NSRange, P1 = boolean, P2 = boolean>(_incremental_nextMatchAfterCurrentRange: P0, _forward: P1, _wrap: P2): R;
    _getNextMatchAfterCurrentRange_forward_wrap_result<R = boolean, P0 = cocoa._NSRange, P1 = boolean, P2 = boolean, P3 = cocoa._NSRange>(__getNextMatchAfterCurrentRange: P0, _forward: P1, _wrap: P2, _result: P3): R;
    incremental_hasMatchInRange<R = boolean, P0 = cocoa._NSRange>(_incremental_hasMatchInRange: P0): R;
    incremental_matchesIntersectingRanges<R = unknown, P0 = unknown>(_incremental_matchesIntersectingRanges: P0): R;
    _noteClientStringWillChange<R = void>(): R;
    _matchCount<R = number>(): R;
    _setMatchCount<R = void, P0 = number>(__setMatchCount: P0): R;
    _hideIncrementalMatchesAndAnimate<R = void, P0 = boolean>(__hideIncrementalMatchesAndAnimate: P0): R;
    _updateIncrementalMatches<R = void>(): R;
    _clearIncrementalMatches<R = void>(): R;
    _changeIncrementalMatches_indexes_block<R = void, P0 = number, P1 = unknown, P2 = cocoa.CDUnknownBlockType>(__changeIncrementalMatches: P0, _indexes: P1, _block: P2): R;
    _startIncrementalSearchShowingFirstMatch<R = void, P0 = boolean>(__startIncrementalSearchShowingFirstMatch: P0): R;
    _disableDelay<R = void>(): R;
    _asyncSearchCompleted<R = void, P0 = unknown>(__asyncSearchCompleted: P0): R;
    _foundFirstMatchInRange_show_disableDelay<R = void, P0 = cocoa._NSRange, P1 = boolean, P2 = boolean>(__foundFirstMatchInRange: P0, _show: P1, _disableDelay: P2): R;
    _incrementalMatchRanges<R = unknown>(): R;
    _updateIndicator<R = void>(): R;
    _resetIncrementalSearch<R = void>(): R;
    _setIncremental_animate<R = void, P0 = boolean, P1 = boolean>(__setIncremental: P0, _animate: P1): R;
    _incremental<R = boolean>(): R;
    _retireAsyncSearch<R = void, P0 = unknown>(__retireAsyncSearch: P0): R;
    _delayFeedbackWithScrolling_updateBlock<R = void, P0 = boolean, P1 = cocoa.CDUnknownBlockType>(__delayFeedbackWithScrolling: P0, _updateBlock: P1): R;
    _cancelIndicatorDelay<R = void>(): R;
    _selectionIsMatch<R = boolean>(): R;
    _visibleMatchRanges<R = unknown>(): R;
    _containerDidChange<R = void>(): R;
    _findIndicatorNeedsUpdate<R = boolean>(): R;
    _setFindIndicatorNeedsUpdate<R = void, P0 = boolean>(__setFindIndicatorNeedsUpdate: P0): R;
    _cancelFindIndicator<R = void>(): R;
    replacementString<R = unknown>(): R;
    rangesOfMatchesInString_inRanges<R = unknown, P0 = unknown, P1 = unknown>(_rangesOfMatchesInString: P0, _inRanges: P1): R;
    rangeOfNextMatchInString_currentRange_forward_wrap<R = cocoa._NSRange, P0 = unknown, P1 = cocoa._NSRange, P2 = boolean, P3 = boolean>(_rangeOfNextMatchInString: P0, _currentRange: P1, _forward: P2, _wrap: P3): R;
    _lastFindWasSuccessful<R = boolean>(): R;
    _validateAction<R = boolean, P0 = number>(__validateAction: P0): R;
    _performAction<R = void, P0 = number>(__performAction: P0): R;
    hideReplace<R = void>(): R;
    showReplace<R = void>(): R;
    deactivate<R = void>(): R;
    activate<R = void>(): R;
    takeSearchString<R = void, P0 = cocoa.CDUnknownBlockType>(_takeSearchString: P0): R;
    selectAllInSelectionOnly<R = number, P0 = boolean>(_selectAllInSelectionOnly: P0): R;
    replaceAllInSelectionOnly_completionHandler<R = void, P0 = boolean, P1 = cocoa.CDUnknownBlockType>(_replaceAllInSelectionOnly: P0, _completionHandler: P1): R;
    replaceAndFind<R = void, P0 = cocoa.CDUnknownBlockType>(_replaceAndFind: P0): R;
    replace<R = void, P0 = cocoa.CDUnknownBlockType>(_replace: P0): R;
    _performReplace<R = void, P0 = cocoa.CDUnknownBlockType>(__performReplace: P0): R;
    findForward_completionHandler<R = void, P0 = boolean, P1 = cocoa.CDUnknownBlockType>(_findForward: P0, _completionHandler: P1): R;
    _performProgressReportingClientOperationUsingBlock<R = void, P0 = cocoa.CDUnknownBlockType>(__performProgressReportingClientOperationUsingBlock: P0): R;
    _onMainThreadUpdateCurrentProgress_thenProcessResultsUsingBlock<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(__onMainThreadUpdateCurrentProgress: P0, _thenProcessResultsUsingBlock: P1): R;
    _didFindMatchInRange_wrapped_forward<R = void, P0 = cocoa._NSRange, P1 = boolean, P2 = boolean>(__didFindMatchInRange: P0, _wrapped: P1, _forward: P2): R;
    _clientDidReplaceCharacters<R = void>(): R;
    _clientShouldReplaceCharactersInRanges_count_withStrings<R = boolean, P0 = cocoa._NSRange, P1 = number, P2 = unknown>(__clientShouldReplaceCharactersInRanges: P0, _count: P1, _withStrings: P2): R;
    _canReplace<R = boolean>(): R;
    _setSelection<R = void, P0 = unknown>(__setSelection: P0): R;
    _canSetSelection<R = boolean>(): R;
    _clearCurrentMatch<R = void>(): R;
    _currentMatchRange<R = cocoa._NSRange>(): R;
    _showFindIndicatorForRange<R = void, P0 = cocoa._NSRange>(__showFindIndicatorForRange: P0): R;
    _showWrapIndicatorForward<R = void, P0 = boolean>(__showWrapIndicatorForward: P0): R;
    _contentViewAtIndex_effectiveRange<R = unknown, P0 = number, P1 = cocoa._NSRange>(__contentViewAtIndex: P0, _effectiveRange: P1): R;
    _currentRange<R = cocoa._NSRange>(): R;
    handleResult_forAction<R = void, P0 = number, P1 = number>(_handleResult: P0, _forAction: P1): R;
    setSubstringMatchType<R = void, P0 = number>(_setSubstringMatchType: P0): R;
    setSearchOptions<R = void, P0 = number>(_setSearchOptions: P0): R;
    substringMatchType<R = number>(): R;
    searchOptions<R = number>(): R;
    setSearchString_writeToPasteboard<R = void, P0 = unknown, P1 = boolean>(_setSearchString: P0, _writeToPasteboard: P1): R;
    setSearchString<R = void, P0 = unknown>(_setSearchString: P0): R;
    searchString<R = unknown>(): R;
    _loadSearchStringToPasteboard<R = void>(): R;
    _setGlobalFindSettings<R = void>(): R;
    _loadSearchStringFromPasteboard<R = boolean>(): R;
    _restoreDefaultSearchOptions<R = void>(): R;
    appDidActivate<R = void, P0 = unknown>(_appDidActivate: P0): R;
    _needToRefreshFromPasteboard<R = boolean>(): R;
    style<R = number>(): R;
    isVisible<R = boolean>(): R;
    client<R = unknown>(): R;
    _finder<R = unknown>(): R;
    _setFinder<R = void, P0 = unknown>(__setFinder: P0): R;
    dealloc<R = void>(): R;
    currentAsynchronousDocumentProgress<R = cocoa.NSProgress>(): R;
    setCurrentAsynchronousDocumentProgress<R = void, P0 = cocoa.NSProgress>(_v: P0): R;
    incrementalAsynchronousDocumentMatches<R = cocoa.NSMutableArray>(): R;
    setIncrementalAsynchronousDocumentMatches<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
    asynchronousDocumentCurrentMatch<R = cocoa.NSTextFinderAsynchronousDocumentFindMatch>(): R;
    setAsynchronousDocumentCurrentMatch<R = void, P0 = cocoa.NSTextFinderAsynchronousDocumentFindMatch>(_v: P0): R;
    matchWebView<R = cocoa.WebView>(): R;
    setMatchWebView<R = void, P0 = cocoa.WebView>(_v: P0): R;
    matchDOMRange<R = cocoa.DOMRange>(): R;
    setMatchDOMRange<R = void, P0 = cocoa.DOMRange>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSTextFinderImpl<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSWindowDelegateProtocol, cocoa.classes.NSComboBoxDelegateProtocol, cocoa.classes.NSFindPatternManagerProtocol {
      alloc<R = _NSTextFinderImpl>(): R;
      new: <R = _NSTextFinderImpl>() => R;
      _indicatorDelayIntervalForSearchString<R = number, P0 = unknown>(__indicatorDelayIntervalForSearchString: P0): R;
      showWrapIndicatorInView_forward<R = void, P0 = unknown, P1 = boolean>(_showWrapIndicatorInView: P0, _forward: P1): R;
      showWrapIndicatorImage_inView<R = void, P0 = unknown, P1 = unknown>(_showWrapIndicatorImage: P0, _inView: P1): R;
    }
  }
}
