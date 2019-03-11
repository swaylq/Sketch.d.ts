/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSearchFieldCell<T = any> extends cocoa.NSTextFieldCell, cocoa.CALayerDelegateProtocol {
    _textLayerRectForBounds<R = cocoa.CGRect, P0 = cocoa.CGRect>(__textLayerRectForBounds: P0): R;
    _setCancelButtonVisible_animate<R = void, P0 = boolean, P1 = boolean>(__setCancelButtonVisible: P0, _animate: P1): R;
    _transitionInRect_ofView_becomeFirstResponder_completion<R = void, P0 = cocoa.CGRect, P1 = unknown, P2 = boolean, P3 = cocoa.CDUnknownBlockType>(__transitionInRect: P0, _ofView: P1, _becomeFirstResponder: P2, _completion: P3): R;
    _resetResignTransition<R = void>(): R;
    _searchMenuButtonLayerFrameForBounds_focus<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = boolean>(__searchMenuButtonLayerFrameForBounds: P0, _focus: P1): R;
    _invalidateButtonLayers<R = void>(): R;
    _searchMenuButtonLayerWithMenu<R = unknown>(): R;
    _searchMenuButtonLayer<R = unknown>(): R;
    _cancelButtonLayer<R = unknown>(): R;
    _tearDownPartialStringTimer<R = void>(): R;
    setTextColor<R = void, P0 = unknown>(_setTextColor: P0): R;
    setResumeEditingOnCancel<R = void, P0 = boolean>(_setResumeEditingOnCancel: P0): R;
    resumeEditingOnCancel<R = boolean>(): R;
    setCenteredLook<R = void, P0 = boolean>(_setCenteredLook: P0): R;
    isCenteredLook<R = boolean>(): R;
    searchMenuFactoryClass<R = unknown>(): R;
    setObjectValue<R = void, P0 = unknown>(_setObjectValue: P0): R;
    cancelButtonRectForBounds<R = cocoa.CGRect, P0 = cocoa.CGRect>(_cancelButtonRectForBounds: P0): R;
    searchButtonRectForBounds<R = cocoa.CGRect, P0 = cocoa.CGRect>(_searchButtonRectForBounds: P0): R;
    searchTextRectForBounds<R = cocoa.CGRect, P0 = cocoa.CGRect>(_searchTextRectForBounds: P0): R;
    searchTextRectForBounds_focused<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = boolean>(_searchTextRectForBounds: P0, _focused: P1): R;
    searchButtonRectForBounds_focused<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = boolean>(_searchButtonRectForBounds: P0, _focused: P1): R;
    _centeredSearchButtonAndTextRectForBounds<R = cocoa.CGRect, P0 = cocoa.CGRect>(__centeredSearchButtonAndTextRectForBounds: P0): R;
    _cancelButtonRectForBounds<R = cocoa.CGRect, P0 = cocoa.CGRect>(__cancelButtonRectForBounds: P0): R;
    _searchTextRectForBounds_focused<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = boolean>(__searchTextRectForBounds: P0, _focused: P1): R;
    _searchButtonRectForBounds_focused<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = boolean>(__searchButtonRectForBounds: P0, _focused: P1): R;
    _cancelButtonInsetForBounds_userInterfaceLayoutDirection<R = number, P0 = cocoa.CGRect, P1 = number>(__cancelButtonInsetForBounds: P0, _userInterfaceLayoutDirection: P1): R;
    _searchButtonInsetForBounds_userInterfaceLayoutDirection_menu<R = number, P0 = cocoa.CGRect, P1 = number, P2 = boolean>(__searchButtonInsetForBounds: P0, _userInterfaceLayoutDirection: P1, _menu: P2): R;
    _cancelButtonSizeForBounds_userInterfaceLayoutDirection<R = cocoa.CGSize, P0 = cocoa.CGRect, P1 = number>(__cancelButtonSizeForBounds: P0, _userInterfaceLayoutDirection: P1): R;
    _searchButtonSizeForBounds_userInterfaceLayoutDirection<R = cocoa.CGSize, P0 = cocoa.CGRect, P1 = number>(__searchButtonSizeForBounds: P0, _userInterfaceLayoutDirection: P1): R;
    _isEmpty<R = boolean>(): R;
    _usesCenteredLook<R = boolean>(): R;
    setControlSize<R = void, P0 = number>(_setControlSize: P0): R;
    resetCancelButtonCell<R = void>(): R;
    resetSearchButtonCell<R = void>(): R;
    _loadRecentSearchList<R = void>(): R;
    _autosaveRecentSearchList<R = void>(): R;
    _textDidEndEditing<R = void, P0 = unknown>(__textDidEndEditing: P0): R;
    _menuLocationInFrame<R = cocoa.CGPoint, P0 = cocoa.CGRect>(__menuLocationInFrame: P0): R;
    _trackButton_forEvent_inRect_ofView<R = void, P0 = unknown, P1 = unknown, P2 = cocoa.CGRect, P3 = unknown>(__trackButton: P0, _forEvent: P1, _inRect: P2, _ofView: P3): R;
    _trimRecentSearchList<R = boolean>(): R;
    _addStringToRecentSearches<R = void, P0 = unknown>(__addStringToRecentSearches: P0): R;
    _adjustCancelButtonCellImages<R = void, P0 = boolean>(__adjustCancelButtonCellImages: P0): R;
    _adjustSearchButtonCellImages<R = void, P0 = boolean>(__adjustSearchButtonCellImages: P0): R;
    _updateAutosavedRecents<R = void, P0 = unknown>(__updateAutosavedRecents: P0): R;
    _deregisterForAutosaveNotification<R = void>(): R;
    _registerForAutosaveNotification<R = void>(): R;
    _updateSearchMenu<R = void>(): R;
    _searchMenuTemplate<R = unknown>(): R;
    _sendPartialString<R = void>(): R;
    _searchFieldClearRecents<R = void, P0 = unknown>(__searchFieldClearRecents: P0): R;
    _searchFieldDoRecent<R = void, P0 = unknown>(__searchFieldDoRecent: P0): R;
    _searchFieldCancel<R = void, P0 = unknown>(__searchFieldCancel: P0): R;
    _controlView_textView_doCommandBySelector<R = boolean, P0 = unknown, P1 = unknown, P2 = string>(__controlView: P0, _textView: P1, _doCommandBySelector: P2): R;
    _searchFieldSearch<R = void, P0 = unknown>(__searchFieldSearch: P0): R;
    _realMaximumRecents<R = number>(): R;
    _setProCancelVisible<R = void, P0 = boolean>(__setProCancelVisible: P0): R;
    _proCancelVisible<R = boolean>(): R;
    _searchMenuTracking<R = boolean>(): R;
    _searchMenuForProxy<R = unknown>(): R;
    _accessibilitySearchFieldCellBounds<R = cocoa.CGRect>(): R;
    accessibilityIsClearButtonAttributeSettable<R = boolean>(): R;
    accessibilityClearButtonAttribute<R = unknown>(): R;
    accessibilityIsSearchButtonAttributeSettable<R = boolean>(): R;
    accessibilitySearchButtonAttribute<R = unknown>(): R;
    accessibilityIsSubroleAttributeSettable<R = boolean>(): R;
    accessibilitySubroleAttribute<R = unknown>(): R;
    sendsSearchStringImmediately<R = boolean>(): R;
    setSendsSearchStringImmediately<R = void, P0 = boolean>(_v: P0): R;
    recentsAutosaveName<R = cocoa.NSString>(): R;
    setRecentsAutosaveName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    recentSearches<R = cocoa.NSArray>(): R;
    setRecentSearches<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    maximumRecents<R = number>(): R;
    setMaximumRecents<R = void, P0 = number>(_v: P0): R;
    sendsWholeSearchString<R = boolean>(): R;
    setSendsWholeSearchString<R = void, P0 = boolean>(_v: P0): R;
    searchMenuTemplate<R = cocoa.NSMenu>(): R;
    setSearchMenuTemplate<R = void, P0 = cocoa.NSMenu>(_v: P0): R;
    cancelButtonCell<R = cocoa.NSButtonCell>(): R;
    setCancelButtonCell<R = void, P0 = cocoa.NSButtonCell>(_v: P0): R;
    searchButtonCell<R = cocoa.NSButtonCell>(): R;
    setSearchButtonCell<R = void, P0 = cocoa.NSButtonCell>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSSearchFieldCell<T = any> extends cocoa.classes.NSTextFieldCell, cocoa.classes.CALayerDelegateProtocol {
      alloc<R = NSSearchFieldCell>(): R;
      new: <R = NSSearchFieldCell>() => R;
      automaticTextCompletionEnabled<R = boolean>(): R;
      _keyboardDelayForPartialSearchString<R = number, P0 = unknown>(__keyboardDelayForPartialSearchString: P0): R;
    }
  }
}

declare const NSSearchFieldCell: cocoa.classes.NSSearchFieldCell;
