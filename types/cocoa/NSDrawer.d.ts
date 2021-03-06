/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDrawer<T0 = void, T1 = void, T2 = void> extends NSResponder, NSAccessibilityElementProtocol, NSAccessibilityProtocol {
    autosaveName<R = unknown>(): R;
    setAutosaveName<R = void, P0 = unknown>(_setAutosaveName: P0): R;
    isOpen<R = boolean>(): R;
    removeImmediately<R = void, P0 = boolean>(_removeImmediately: P0): R;
    toggle<R = void, P0 = unknown>(_toggle: P0): R;
    close<R = void, P0 = unknown>(_close: P0): R;
    open<R = void, P0 = unknown>(_open: P0): R;
    openOnEdge<R = void, P0 = number>(_openOnEdge: P0): R;
    _moveByOffset<R = void, P0 = CGSize>(__moveByOffset: P0): R;
    _allowsImplicitRemovalFromMovementGroup<R = boolean>(): R;
    initWithContentSize_preferredEdge<R = unknown, P0 = CGSize, P1 = number>(_initWithContentSize: P0, _preferredEdge: P1): R;
    _setVisibleWithoutLogin<R = void>(): R;
    _setLevel<R = void>(): R;
    _endLiveResize<R = void>(): R;
    _startLiveResize<R = void>(): R;
    _resetPostingCounts<R = void>(): R;
    _resetDisableCounts<R = void>(): R;
    _registerDragTypesIfNeeded<R = unknown>(): R;
    _resizeWithDelta_fromFrame_beginOperation_endOperation<R = void, P0 = CGPoint, P1 = CGRect, P2 = boolean, P3 = boolean>(__resizeWithDelta: P0, _fromFrame: P1, _beginOperation: P2, _endOperation: P3): R;
    _slideWithDelta_beginOperation_endOperation<R = void, P0 = CGPoint, P1 = boolean, P2 = boolean>(__slideWithDelta: P0, _beginOperation: P1, _endOperation: P2): R;
    _minParentWindowContentSize<R = CGSize>(): R;
    _takeFocus<R = void>(): R;
    _changeFirstResponderToParentsFirstResponder<R = void>(): R;
    _changeMainState<R = void>(): R;
    _changeKeyState<R = void>(): R;
    _sizeWithRect<R = void, P0 = CGRect>(__sizeWithRect: P0): R;
    _size<R = void>(): R;
    _position<R = void>(): R;
    _displayIfNeeded<R = void>(): R;
    _unhide<R = void>(): R;
    _hide<R = void>(): R;
    _setDrawerEdge<R = void, P0 = number>(__setDrawerEdge: P0): R;
    _edge<R = number>(): R;
    _initWithContentSize_preferredEdge<R = unknown, P0 = CGSize, P1 = number>(__initWithContentSize: P0, _preferredEdge: P1): R;
    _drawerWindow<R = unknown>(): R;
    _doAutoselectEdge<R = void>(): R;
    _doSetParentWindow<R = void, P0 = unknown>(__doSetParentWindow: P0): R;
    _doRemoveDrawer<R = void>(): R;
    _doCloseDrawer<R = void>(): R;
    _doOpenDrawer<R = void>(): R;
    _doResizeDrawerWithDelta_fromFrame<R = void, P0 = CGPoint, P1 = CGRect>(__doResizeDrawerWithDelta: P0, _fromFrame: P1): R;
    _doSlideDrawerWithDelta<R = void, P0 = CGPoint>(__doSlideDrawerWithDelta: P0): R;
    _doPositionDrawerAndSize_parentFrame_stashSize<R = void, P0 = CGSize, P1 = CGRect, P2 = boolean>(__doPositionDrawerAndSize: P0, _parentFrame: P1, _stashSize: P2): R;
    _doPositionDrawerAndSize_parentFrame<R = void, P0 = CGSize, P1 = CGRect>(__doPositionDrawerAndSize: P0, _parentFrame: P1): R;
    _doPositionDrawer<R = void>(): R;
    _doStopDrawer<R = void>(): R;
    _doStartDrawer<R = void>(): R;
    _doDetachDrawer<R = void>(): R;
    _doAttachDrawer<R = void>(): R;
    _doAttachDrawerIgnoreHidden<R = void, P0 = boolean>(__doAttachDrawerIgnoreHidden: P0): R;
    menu<R = unknown>(): R;
    setMenu<R = void, P0 = unknown>(_setMenu: P0): R;
    accessibilitySectionsAttribute<R = unknown>(): R;
    accessibilityAuditIssuesAttribute<R = unknown>(): R;
    accessibilityFocusedUIElement<R = unknown>(): R;
    accessibilityHitTest<R = unknown, P0 = CGPoint>(_accessibilityHitTest: P0): R;
    accessibilityIsIgnored<R = boolean>(): R;
    accessibilityPerformAction<R = void, P0 = unknown>(_accessibilityPerformAction: P0): R;
    accessibilityActionDescription<R = unknown, P0 = unknown>(_accessibilityActionDescription: P0): R;
    accessibilityActionNames<R = unknown>(): R;
    accessibilitySetValue_forAttribute<R = void, P0 = unknown, P1 = unknown>(_accessibilitySetValue: P0, _forAttribute: P1): R;
    accessibilityIsAttributeSettable<R = boolean, P0 = unknown>(_accessibilityIsAttributeSettable: P0): R;
    accessibilityAttributeValue<R = unknown, P0 = unknown>(_accessibilityAttributeValue: P0): R;
    accessibilityIsChildrenAttributeSettable<R = boolean>(): R;
    accessibilityChildrenAttribute<R = unknown>(): R;
    accessibilityChildrenInNavigationOrderAttribute<R = unknown>(): R;
    accessibilityIsParentAttributeSettable<R = boolean>(): R;
    accessibilityParentAttribute<R = unknown>(): R;
    accessibilityAttributeNames<R = unknown>(): R;
    accessibilityParent<R = unknown>(): R;
    setAccessibilityParent<R = void, P0 = unknown>(_v: P0): R;
    accessibilityFrame<R = CGRect>(): R;
    setAccessibilityFrame<R = void, P0 = CGRect>(_v: P0): R;
    delegate<R = NSDrawerDelegate>(): R;
    setDelegate<R = void, P0 = NSDrawerDelegate>(_v: P0): R;
    trailingOffset<R = number>(): R;
    setTrailingOffset<R = void, P0 = number>(_v: P0): R;
    leadingOffset<R = number>(): R;
    setLeadingOffset<R = void, P0 = number>(_v: P0): R;
    maxContentSize<R = CGSize>(): R;
    setMaxContentSize<R = void, P0 = CGSize>(_v: P0): R;
    minContentSize<R = CGSize>(): R;
    setMinContentSize<R = void, P0 = CGSize>(_v: P0): R;
    contentSize<R = CGSize>(): R;
    setContentSize<R = void, P0 = CGSize>(_v: P0): R;
    edge<R = number>(): R;
    state<R = number>(): R;
    preferredEdge<R = number>(): R;
    setPreferredEdge<R = void, P0 = number>(_v: P0): R;
    contentView<R = NSView>(): R;
    setContentView<R = void, P0 = NSView>(_v: P0): R;
    parentWindow<R = NSWindow>(): R;
    setParentWindow<R = void, P0 = NSWindow>(_v: P0): R;
    accessibilityActivationPoint<R = CGPoint>(): R;
    setAccessibilityActivationPoint<R = void, P0 = CGPoint>(_v: P0): R;
    accessibilityAllowedValues<R = NSArray>(): R;
    setAccessibilityAllowedValues<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityAlternateUIVisible<R = boolean>(): R;
    setAccessibilityAlternateUIVisible<R = void, P0 = boolean>(_v: P0): R;
    accessibilityApplicationFocusedUIElement<R = unknown>(): R;
    setAccessibilityApplicationFocusedUIElement<R = void, P0 = unknown>(_v: P0): R;
    accessibilityCancelButton<R = unknown>(): R;
    setAccessibilityCancelButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityChildren<R = NSArray>(): R;
    setAccessibilityChildren<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityChildrenInNavigationOrder<R = NSArray>(): R;
    setAccessibilityChildrenInNavigationOrder<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityClearButton<R = unknown>(): R;
    setAccessibilityClearButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityCloseButton<R = unknown>(): R;
    setAccessibilityCloseButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityColumnCount<R = number>(): R;
    setAccessibilityColumnCount<R = void, P0 = number>(_v: P0): R;
    accessibilityColumnHeaderUIElements<R = NSArray>(): R;
    setAccessibilityColumnHeaderUIElements<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityColumnIndexRange<R = _NSRange>(): R;
    setAccessibilityColumnIndexRange<R = void, P0 = _NSRange>(_v: P0): R;
    accessibilityColumnTitles<R = NSArray>(): R;
    setAccessibilityColumnTitles<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityColumns<R = NSArray>(): R;
    setAccessibilityColumns<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityContents<R = NSArray>(): R;
    setAccessibilityContents<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityCriticalValue<R = unknown>(): R;
    setAccessibilityCriticalValue<R = void, P0 = unknown>(_v: P0): R;
    accessibilityCustomActions<R = NSArray>(): R;
    setAccessibilityCustomActions<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityCustomRotors<R = NSArray>(): R;
    setAccessibilityCustomRotors<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityDecrementButton<R = unknown>(): R;
    setAccessibilityDecrementButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityDefaultButton<R = unknown>(): R;
    setAccessibilityDefaultButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityDisclosed<R = boolean>(): R;
    setAccessibilityDisclosed<R = void, P0 = boolean>(_v: P0): R;
    accessibilityDisclosedByRow<R = unknown>(): R;
    setAccessibilityDisclosedByRow<R = void, P0 = unknown>(_v: P0): R;
    accessibilityDisclosedRows<R = unknown>(): R;
    setAccessibilityDisclosedRows<R = void, P0 = unknown>(_v: P0): R;
    accessibilityDisclosureLevel<R = number>(): R;
    setAccessibilityDisclosureLevel<R = void, P0 = number>(_v: P0): R;
    accessibilityDocument<R = NSString>(): R;
    setAccessibilityDocument<R = void, P0 = NSString>(_v: P0): R;
    accessibilityEdited<R = boolean>(): R;
    setAccessibilityEdited<R = void, P0 = boolean>(_v: P0): R;
    accessibilityElement<R = boolean>(): R;
    setAccessibilityElement<R = void, P0 = boolean>(_v: P0): R;
    accessibilityEnabled<R = boolean>(): R;
    setAccessibilityEnabled<R = void, P0 = boolean>(_v: P0): R;
    accessibilityExpanded<R = boolean>(): R;
    setAccessibilityExpanded<R = void, P0 = boolean>(_v: P0): R;
    accessibilityExtrasMenuBar<R = unknown>(): R;
    setAccessibilityExtrasMenuBar<R = void, P0 = unknown>(_v: P0): R;
    accessibilityFilename<R = NSString>(): R;
    setAccessibilityFilename<R = void, P0 = NSString>(_v: P0): R;
    accessibilityFocused<R = boolean>(): R;
    setAccessibilityFocused<R = void, P0 = boolean>(_v: P0): R;
    accessibilityFocusedWindow<R = unknown>(): R;
    setAccessibilityFocusedWindow<R = void, P0 = unknown>(_v: P0): R;
    accessibilityFrontmost<R = boolean>(): R;
    setAccessibilityFrontmost<R = void, P0 = boolean>(_v: P0): R;
    accessibilityFullScreenButton<R = unknown>(): R;
    setAccessibilityFullScreenButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityGrowArea<R = unknown>(): R;
    setAccessibilityGrowArea<R = void, P0 = unknown>(_v: P0): R;
    accessibilityHandles<R = NSArray>(): R;
    setAccessibilityHandles<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityHeader<R = unknown>(): R;
    setAccessibilityHeader<R = void, P0 = unknown>(_v: P0): R;
    accessibilityHelp<R = NSString>(): R;
    setAccessibilityHelp<R = void, P0 = NSString>(_v: P0): R;
    accessibilityHidden<R = boolean>(): R;
    setAccessibilityHidden<R = void, P0 = boolean>(_v: P0): R;
    accessibilityHorizontalScrollBar<R = unknown>(): R;
    setAccessibilityHorizontalScrollBar<R = void, P0 = unknown>(_v: P0): R;
    accessibilityHorizontalUnitDescription<R = NSString>(): R;
    setAccessibilityHorizontalUnitDescription<R = void, P0 = NSString>(_v: P0): R;
    accessibilityHorizontalUnits<R = number>(): R;
    setAccessibilityHorizontalUnits<R = void, P0 = number>(_v: P0): R;
    accessibilityIdentifier<R = NSString>(): R;
    setAccessibilityIdentifier<R = void, P0 = NSString>(_v: P0): R;
    accessibilityIncrementButton<R = unknown>(): R;
    setAccessibilityIncrementButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityIndex<R = number>(): R;
    setAccessibilityIndex<R = void, P0 = number>(_v: P0): R;
    accessibilityInsertionPointLineNumber<R = number>(): R;
    setAccessibilityInsertionPointLineNumber<R = void, P0 = number>(_v: P0): R;
    accessibilityLabel<R = NSString>(): R;
    setAccessibilityLabel<R = void, P0 = NSString>(_v: P0): R;
    accessibilityLabelUIElements<R = NSArray>(): R;
    setAccessibilityLabelUIElements<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityLabelValue<R = number>(): R;
    setAccessibilityLabelValue<R = void, P0 = number>(_v: P0): R;
    accessibilityLinkedUIElements<R = NSArray>(): R;
    setAccessibilityLinkedUIElements<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityMain<R = boolean>(): R;
    setAccessibilityMain<R = void, P0 = boolean>(_v: P0): R;
    accessibilityMainWindow<R = unknown>(): R;
    setAccessibilityMainWindow<R = void, P0 = unknown>(_v: P0): R;
    accessibilityMarkerGroupUIElement<R = unknown>(): R;
    setAccessibilityMarkerGroupUIElement<R = void, P0 = unknown>(_v: P0): R;
    accessibilityMarkerTypeDescription<R = NSString>(): R;
    setAccessibilityMarkerTypeDescription<R = void, P0 = NSString>(_v: P0): R;
    accessibilityMarkerUIElements<R = NSArray>(): R;
    setAccessibilityMarkerUIElements<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityMarkerValues<R = unknown>(): R;
    setAccessibilityMarkerValues<R = void, P0 = unknown>(_v: P0): R;
    accessibilityMaxValue<R = unknown>(): R;
    setAccessibilityMaxValue<R = void, P0 = unknown>(_v: P0): R;
    accessibilityMenuBar<R = unknown>(): R;
    setAccessibilityMenuBar<R = void, P0 = unknown>(_v: P0): R;
    accessibilityMinValue<R = unknown>(): R;
    setAccessibilityMinValue<R = void, P0 = unknown>(_v: P0): R;
    accessibilityMinimizeButton<R = unknown>(): R;
    setAccessibilityMinimizeButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityMinimized<R = boolean>(): R;
    setAccessibilityMinimized<R = void, P0 = boolean>(_v: P0): R;
    accessibilityModal<R = boolean>(): R;
    setAccessibilityModal<R = void, P0 = boolean>(_v: P0): R;
    accessibilityNextContents<R = NSArray>(): R;
    setAccessibilityNextContents<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityNumberOfCharacters<R = number>(): R;
    setAccessibilityNumberOfCharacters<R = void, P0 = number>(_v: P0): R;
    accessibilityOrderedByRow<R = boolean>(): R;
    setAccessibilityOrderedByRow<R = void, P0 = boolean>(_v: P0): R;
    accessibilityOrientation<R = number>(): R;
    setAccessibilityOrientation<R = void, P0 = number>(_v: P0): R;
    accessibilityOverflowButton<R = unknown>(): R;
    setAccessibilityOverflowButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityPlaceholderValue<R = NSString>(): R;
    setAccessibilityPlaceholderValue<R = void, P0 = NSString>(_v: P0): R;
    accessibilityPreviousContents<R = NSArray>(): R;
    setAccessibilityPreviousContents<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityProtectedContent<R = boolean>(): R;
    setAccessibilityProtectedContent<R = void, P0 = boolean>(_v: P0): R;
    accessibilityProxy<R = unknown>(): R;
    setAccessibilityProxy<R = void, P0 = unknown>(_v: P0): R;
    accessibilityRequired<R = boolean>(): R;
    setAccessibilityRequired<R = void, P0 = boolean>(_v: P0): R;
    accessibilityRole<R = NSString>(): R;
    setAccessibilityRole<R = void, P0 = NSString>(_v: P0): R;
    accessibilityRoleDescription<R = NSString>(): R;
    setAccessibilityRoleDescription<R = void, P0 = NSString>(_v: P0): R;
    accessibilityRowCount<R = number>(): R;
    setAccessibilityRowCount<R = void, P0 = number>(_v: P0): R;
    accessibilityRowHeaderUIElements<R = NSArray>(): R;
    setAccessibilityRowHeaderUIElements<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityRowIndexRange<R = _NSRange>(): R;
    setAccessibilityRowIndexRange<R = void, P0 = _NSRange>(_v: P0): R;
    accessibilityRows<R = NSArray>(): R;
    setAccessibilityRows<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityRulerMarkerType<R = number>(): R;
    setAccessibilityRulerMarkerType<R = void, P0 = number>(_v: P0): R;
    accessibilitySearchButton<R = unknown>(): R;
    setAccessibilitySearchButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilitySearchMenu<R = unknown>(): R;
    setAccessibilitySearchMenu<R = void, P0 = unknown>(_v: P0): R;
    accessibilitySelected<R = boolean>(): R;
    setAccessibilitySelected<R = void, P0 = boolean>(_v: P0): R;
    accessibilitySelectedCells<R = NSArray>(): R;
    setAccessibilitySelectedCells<R = void, P0 = NSArray>(_v: P0): R;
    accessibilitySelectedChildren<R = NSArray>(): R;
    setAccessibilitySelectedChildren<R = void, P0 = NSArray>(_v: P0): R;
    accessibilitySelectedColumns<R = NSArray>(): R;
    setAccessibilitySelectedColumns<R = void, P0 = NSArray>(_v: P0): R;
    accessibilitySelectedRows<R = NSArray>(): R;
    setAccessibilitySelectedRows<R = void, P0 = NSArray>(_v: P0): R;
    accessibilitySelectedText<R = NSString>(): R;
    setAccessibilitySelectedText<R = void, P0 = NSString>(_v: P0): R;
    accessibilitySelectedTextRange<R = _NSRange>(): R;
    setAccessibilitySelectedTextRange<R = void, P0 = _NSRange>(_v: P0): R;
    accessibilitySelectedTextRanges<R = NSArray>(): R;
    setAccessibilitySelectedTextRanges<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityServesAsTitleForUIElements<R = NSArray>(): R;
    setAccessibilityServesAsTitleForUIElements<R = void, P0 = NSArray>(_v: P0): R;
    accessibilitySharedCharacterRange<R = _NSRange>(): R;
    setAccessibilitySharedCharacterRange<R = void, P0 = _NSRange>(_v: P0): R;
    accessibilitySharedFocusElements<R = NSArray>(): R;
    setAccessibilitySharedFocusElements<R = void, P0 = NSArray>(_v: P0): R;
    accessibilitySharedTextUIElements<R = NSArray>(): R;
    setAccessibilitySharedTextUIElements<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityShownMenu<R = unknown>(): R;
    setAccessibilityShownMenu<R = void, P0 = unknown>(_v: P0): R;
    accessibilitySortDirection<R = number>(): R;
    setAccessibilitySortDirection<R = void, P0 = number>(_v: P0): R;
    accessibilitySplitters<R = NSArray>(): R;
    setAccessibilitySplitters<R = void, P0 = NSArray>(_v: P0): R;
    accessibilitySubrole<R = NSString>(): R;
    setAccessibilitySubrole<R = void, P0 = NSString>(_v: P0): R;
    accessibilityTabs<R = NSArray>(): R;
    setAccessibilityTabs<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityTitle<R = NSString>(): R;
    setAccessibilityTitle<R = void, P0 = NSString>(_v: P0): R;
    accessibilityTitleUIElement<R = unknown>(): R;
    setAccessibilityTitleUIElement<R = void, P0 = unknown>(_v: P0): R;
    accessibilityToolbarButton<R = unknown>(): R;
    setAccessibilityToolbarButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityTopLevelUIElement<R = unknown>(): R;
    setAccessibilityTopLevelUIElement<R = void, P0 = unknown>(_v: P0): R;
    accessibilityURL<R = NSURL>(): R;
    setAccessibilityURL<R = void, P0 = NSURL>(_v: P0): R;
    accessibilityUnitDescription<R = NSString>(): R;
    setAccessibilityUnitDescription<R = void, P0 = NSString>(_v: P0): R;
    accessibilityUnits<R = number>(): R;
    setAccessibilityUnits<R = void, P0 = number>(_v: P0): R;
    accessibilityValue<R = unknown>(): R;
    setAccessibilityValue<R = void, P0 = unknown>(_v: P0): R;
    accessibilityValueDescription<R = NSString>(): R;
    setAccessibilityValueDescription<R = void, P0 = NSString>(_v: P0): R;
    accessibilityVerticalScrollBar<R = unknown>(): R;
    setAccessibilityVerticalScrollBar<R = void, P0 = unknown>(_v: P0): R;
    accessibilityVerticalUnitDescription<R = NSString>(): R;
    setAccessibilityVerticalUnitDescription<R = void, P0 = NSString>(_v: P0): R;
    accessibilityVerticalUnits<R = number>(): R;
    setAccessibilityVerticalUnits<R = void, P0 = number>(_v: P0): R;
    accessibilityVisibleCells<R = NSArray>(): R;
    setAccessibilityVisibleCells<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityVisibleCharacterRange<R = _NSRange>(): R;
    setAccessibilityVisibleCharacterRange<R = void, P0 = _NSRange>(_v: P0): R;
    accessibilityVisibleChildren<R = NSArray>(): R;
    setAccessibilityVisibleChildren<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityVisibleColumns<R = NSArray>(): R;
    setAccessibilityVisibleColumns<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityVisibleRows<R = NSArray>(): R;
    setAccessibilityVisibleRows<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityWarningValue<R = unknown>(): R;
    setAccessibilityWarningValue<R = void, P0 = unknown>(_v: P0): R;
    accessibilityWindow<R = unknown>(): R;
    setAccessibilityWindow<R = void, P0 = unknown>(_v: P0): R;
    accessibilityWindows<R = NSArray>(): R;
    setAccessibilityWindows<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityZoomButton<R = unknown>(): R;
    setAccessibilityZoomButton<R = void, P0 = unknown>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSDrawer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSResponder, NSAccessibilityElementProtocol, NSAccessibilityProtocol {
      alloc<R = NSDrawer>(): R;
      new: <R = NSDrawer>() => R;
      _usesCorrectContentSize<R = boolean>(): R;
      _drawerTransform<R = number>(): R;
      _setDrawerTransform<R = void, P0 = number>(__setDrawerTransform: P0): R;
      _drawerVelocity<R = number>(): R;
      _setDrawerVelocity<R = void, P0 = number>(__setDrawerVelocity: P0): R;
    }
  }
}

declare const NSDrawer: cocoa.NSDrawer.CLASS;
