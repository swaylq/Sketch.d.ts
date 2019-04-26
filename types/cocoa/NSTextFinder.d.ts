/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextFinder<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
    _isSearchingAsynchronousDocument<R = boolean>(): R;
    _webViews<R = unknown>(): R;
    _isSearchingWebViews<R = boolean>(): R;
    setIsSearchingWebViews<R = void, P0 = boolean>(_setIsSearchingWebViews: P0): R;
    noteClientStringWillChange<R = void>(): R;
    cancelFindIndicator<R = void>(): R;
    _clearContentString<R = void>(): R;
    _contentString<R = unknown>(): R;
    validateAction<R = boolean, P0 = number>(_validateAction: P0): R;
    performAction<R = void, P0 = number>(_performAction: P0): R;
    preferredTextFinderStyle<R = number>(): R;
    setPreferredTextFinderStyle<R = void, P0 = number>(_setPreferredTextFinderStyle: P0): R;
    dealloc<R = void>(): R;
    _barTextFinder<R = unknown>(): R;
    _invalidateTextFinders<R = void>(): R;
    _textFinderImplCreate<R = unknown, P0 = boolean>(__textFinderImplCreate: P0): R;
    _defaultStyle<R = number>(): R;
    _textFinderForStyle_create<R = unknown, P0 = number, P1 = boolean>(__textFinderForStyle: P0, _create: P1): R;
    incrementalSearchingShouldDimContentView<R = boolean>(): R;
    setIncrementalSearchingShouldDimContentView<R = void, P0 = boolean>(_v: P0): R;
    incrementalMatchRanges<R = NSArray>(): R;
    incrementalSearchingEnabled<R = boolean>(): R;
    setIncrementalSearchingEnabled<R = void, P0 = boolean>(_v: P0): R;
    findIndicatorNeedsUpdate<R = boolean>(): R;
    setFindIndicatorNeedsUpdate<R = void, P0 = boolean>(_v: P0): R;
    findBarContainer<R = NSTextFinderBarContainer>(): R;
    setFindBarContainer<R = void, P0 = NSTextFinderBarContainer>(_v: P0): R;
    client<R = NSTextFinderClient>(): R;
    setClient<R = void, P0 = NSTextFinderClient>(_v: P0): R;
  }
  namespace NSTextFinder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = NSTextFinder>(): R;
      new: <R = NSTextFinder>() => R;
      drawIncrementalMatchHighlightInRect<R = void, P0 = CGRect>(_drawIncrementalMatchHighlightInRect: P0): R;
      _findIndicatorNeedsUpdate<R = void, P0 = unknown>(__findIndicatorNeedsUpdate: P0): R;
      _cancelFindIndicatorForView<R = void, P0 = unknown>(__cancelFindIndicatorForView: P0): R;
      _findIndicatorForView<R = unknown, P0 = unknown>(__findIndicatorForView: P0): R;
      _setFindIndicator_forView<R = void, P0 = unknown, P1 = unknown>(__setFindIndicator: P0, _forView: P1): R;
      _textFinderForView<R = unknown, P0 = unknown>(__textFinderForView: P0): R;
      _setTextFinder_forView<R = void, P0 = unknown, P1 = unknown>(__setTextFinder: P0, _forView: P1): R;
      _actionResponder<R = unknown>(): R;
      activeStyle<R = number>(): R;
      _endActiveStyle<R = void>(): R;
      _beginActiveStyle<R = void, P0 = number>(__beginActiveStyle: P0): R;
      _sharedPanelTextFinder<R = unknown>(): R;
      _globalTextFinder<R = unknown>(): R;
    }
  }
}

declare const NSTextFinder: cocoa.NSTextFinder.CLASS;
