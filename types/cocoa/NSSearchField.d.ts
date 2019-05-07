/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSearchField<T0 = void, T1 = void, T2 = void> extends NSTextField {
    rectForCancelButtonWhenCentered<R = CGRect, P0 = boolean>(_rectForCancelButtonWhenCentered: P0): R;
    rectForSearchButtonWhenCentered<R = CGRect, P0 = boolean>(_rectForSearchButtonWhenCentered: P0): R;
    rectForSearchTextWhenCentered<R = CGRect, P0 = boolean>(_rectForSearchTextWhenCentered: P0): R;
    _windowResignedKeyStatus<R = void, P0 = unknown>(__windowResignedKeyStatus: P0): R;
    _updateSearchingState<R = void>(): R;
    _previousResponder<R = unknown>(): R;
    _setPreviousResponder<R = void, P0 = unknown>(__setPreviousResponder: P0): R;
    _addEventToBeRepostedAfterTransition<R = void, P0 = unknown>(__addEventToBeRepostedAfterTransition: P0): R;
    _setEventsNeedingReposting<R = void, P0 = unknown>(__setEventsNeedingReposting: P0): R;
    _eventsNeedingReposting<R = unknown>(): R;
    _transitionForFirstResponder_completion<R = void, P0 = boolean, P1 = CDUnknownBlockType>(__transitionForFirstResponder: P0, _completion: P1): R;
    _invokePostAnimationBlocks<R = void>(): R;
    _createPostAnimationQueueWithBlock<R = void, P0 = CDUnknownBlockType>(__createPostAnimationQueueWithBlock: P0): R;
    _addPostAnimationBlock<R = void, P0 = CDUnknownBlockType>(__addPostAnimationBlock: P0): R;
    _setAnimationCompletionBlocks<R = void, P0 = unknown>(__setAnimationCompletionBlocks: P0): R;
    _animationCompletionBlocks<R = unknown>(): R;
    searchFieldCell_shouldChangeCancelButtonVisibility<R = boolean, P0 = unknown, P1 = boolean>(_searchFieldCell: P0, _shouldChangeCancelButtonVisibility: P1): R;
    searchMenuTemplate<R = NSMenu>(): R;
    setSearchMenuTemplate<R = void, P0 = NSMenu>(_v: P0): R;
    delegate<R = NSSearchFieldDelegate>(): R;
    setDelegate<R = void, P0 = NSSearchFieldDelegate>(_v: P0): R;
    centersPlaceholder<R = boolean>(): R;
    setCentersPlaceholder<R = void, P0 = boolean>(_v: P0): R;
    sendsSearchStringImmediately<R = boolean>(): R;
    setSendsSearchStringImmediately<R = void, P0 = boolean>(_v: P0): R;
    maximumRecents<R = number>(): R;
    setMaximumRecents<R = void, P0 = number>(_v: P0): R;
    sendsWholeSearchString<R = boolean>(): R;
    setSendsWholeSearchString<R = void, P0 = boolean>(_v: P0): R;
    recentsAutosaveName<R = NSString>(): R;
    setRecentsAutosaveName<R = void, P0 = NSString>(_v: P0): R;
    recentSearches<R = NSArray>(): R;
    setRecentSearches<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace NSSearchField {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextField {
      alloc<R = NSSearchField>(): R;
      new: <R = NSSearchField>() => R;
    }
  }
}

declare const NSSearchField: cocoa.NSSearchField.CLASS;
