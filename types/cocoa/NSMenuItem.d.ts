/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMenuItem<T0 = void, T1 = void, T2 = void> extends NSObject, NSImmediateActionAnimationControllerProtocol, NSMenuItemProtocol, NSCopyingProtocol, NSCodingProtocol, NSValidatedUserInterfaceItemProtocol, NSUserInterfaceItemIdentificationProtocol, NSAccessibilityElementProtocol, NSAccessibilityProtocol {
    setUserInterfaceItemIdentifier<R = void, P0 = unknown>(_setUserInterfaceItemIdentifier: P0): R;
    userInterfaceItemIdentifier<R = unknown>(): R;
    _bindingAdaptor<R = unknown>(): R;
    _setBindingAdaptor<R = void, P0 = unknown>(__setBindingAdaptor: P0): R;
    _requiresModifiersToBeVisible<R = boolean>(): R;
    _setRequiresModifiersToBeVisible<R = void, P0 = boolean>(__setRequiresModifiersToBeVisible: P0): R;
    _isAlternateDespiteNonmatchingModifiers<R = boolean>(): R;
    _setIsAlternateDespiteNonmatchingModifiers<R = void, P0 = boolean>(__setIsAlternateDespiteNonmatchingModifiers: P0): R;
    _respectsKeyEquivalentForRepeatKeys<R = boolean>(): R;
    _setRespectsKeyEquivalentForRepeatKeys<R = void, P0 = boolean>(__setRespectsKeyEquivalentForRepeatKeys: P0): R;
    _respectsKeyEquivalentWhileHidden<R = boolean>(): R;
    _setRespectsKeyEquivalentWhileHidden<R = void, P0 = boolean>(__setRespectsKeyEquivalentWhileHidden: P0): R;
    _setIgnoredForAccessibility<R = void, P0 = boolean>(__setIgnoredForAccessibility: P0): R;
    _ignoredForAccessibility<R = boolean>(): R;
    _startingWindowForSendAction<R = unknown, P0 = string>(__startingWindowForSendAction: P0): R;
    _menuItemViewer<R = unknown>(): R;
    _viewHandlesEvents<R = boolean>(): R;
    _setViewHandlesEvents<R = void, P0 = boolean>(__setViewHandlesEvents: P0): R;
    _setViewNeedsDisplayInRect<R = void, P0 = CGRect>(__setViewNeedsDisplayInRect: P0): R;
    _changedFlags<R = number>(): R;
    _setChangedFlags<R = void, P0 = number>(__setChangedFlags: P0): R;
    _isHelpMenuAppKitOnly<R = boolean>(): R;
    _isHelpMenu<R = boolean>(): R;
    _setNextItemIsAlternate<R = void, P0 = boolean>(__setNextItemIsAlternate: P0): R;
    _nextItemIsAlternate<R = boolean>(): R;
    isDestructive<R = boolean>(): R;
    setDestructive<R = void, P0 = boolean>(_setDestructive: P0): R;
    _isEnabled<R = boolean>(): R;
    _canBeHighlighted<R = boolean>(): R;
    _currentStateImageEnumeration<R = number>(): R;
    _imageForState<R = unknown, P0 = number>(__imageForState: P0): R;
    _setIconRef<R = void, P0 = OpaqueIconRef>(__setIconRef: P0): R;
    _iconRef<R = OpaqueIconRef>(): R;
    _imageSize<R = CGSize>(): R;
    _setImageSize<R = void, P0 = CGSize>(__setImageSize: P0): R;
    _setMenuItemBelongsToContextualMenu<R = void, P0 = boolean>(__setMenuItemBelongsToContextualMenu: P0): R;
    _canShareKeyEquivalentWithItem<R = boolean, P0 = unknown>(__canShareKeyEquivalentWithItem: P0): R;
    keyEquivalentSharingMode<R = number>(): R;
    setKeyEquivalentSharingMode<R = void, P0 = number>(_setKeyEquivalentSharingMode: P0): R;
    _requiresKERegistration<R = boolean>(): R;
    _keyEquivalentPriority<R = number>(): R;
    _defaultKeyEquivalentPriority<R = number>(): R;
    _setDefaultKeyEquivalentPriority<R = void, P0 = number>(__setDefaultKeyEquivalentPriority: P0): R;
    _blockKE<R = boolean>(): R;
    _setBlockKE<R = void, P0 = boolean>(__setBlockKE: P0): R;
    _menuTitleMayBeInvolvedInMenuPaths<R = boolean>(): R;
    _recursivelyUpdateKeyEquivalents<R = void>(): R;
    _desiredKeyEquivalentModifierMask<R = number>(): R;
    _desiredKeyEquivalent<R = unknown>(): R;
    _rawKeyEquivalentModifierMask<R = number>(): R;
    _rawKeyEquivalent<R = unknown>(): R;
    _keyboardAwareEquivalent<R = unknown>(): R;
    _rawKeyboardAwareEquivalent<R = unknown>(): R;
    _mayBeInvolvedInMenuItemPath<R = boolean>(): R;
    _recacheUserKeyEquivalentOnlyIfStale<R = void, P0 = boolean>(__recacheUserKeyEquivalentOnlyIfStale: P0): R;
    _internalPerformActionThroughMenuIfPossible<R = void>(): R;
    _corePerformAction<R = void>(): R;
    _sendItemSelectedNote<R = void>(): R;
    _canSendAction<R = boolean, P0 = string>(__canSendAction: P0): R;
    _keyEquivalentVirtualKeyCode<R = number>(): R;
    _setKeyEquivalentVirtualKeyCode<R = void, P0 = number>(__setKeyEquivalentVirtualKeyCode: P0): R;
    _shouldForceShiftModifierWithKeyEquivalent<R = boolean, P0 = unknown>(__shouldForceShiftModifierWithKeyEquivalent: P0): R;
    _applicableImage<R = unknown>(): R;
    _applicableKeyEquivalentModifierMask<R = number>(): R;
    _cacheUserKeyEquivalentInfo<R = void, P0 = NSMenuUserKeyEquivalentInfo_t>(__cacheUserKeyEquivalentInfo: P0): R;
    _fetchFreshUserKeyEquivalentInfo<R = NSMenuUserKeyEquivalentInfo_t>(): R;
    _setKeyboardAwareEquivalent<R = void, P0 = unknown>(__setKeyboardAwareEquivalent: P0): R;
    _cachedAttributedTitleSizeForMeasuring_hasAttachment<R = CGSize, P0 = boolean, P1 = string>(__cachedAttributedTitleSizeForMeasuring: P0, _hasAttachment: P1): R;
    _computeBoundingRectSizeForTitle_hasAttachment<R = CGSize, P0 = unknown, P1 = string>(__computeBoundingRectSizeForTitle: P0, _hasAttachment: P1): R;
    setFont<R = void, P0 = unknown>(_setFont: P0): R;
    font<R = unknown>(): R;
    _setNewItemsCount<R = void, P0 = number>(__setNewItemsCount: P0): R;
    _newItemsCount<R = number>(): R;
    _titlePathForUserKeyEquivalents<R = unknown>(): R;
    _titleForUserKeyEquivalents<R = unknown>(): R;
    _unconfigureAsSeparatorItem<R = void>(): R;
    _configureAsSeparatorItem<R = void>(): R;
    _isHidden<R = boolean>(): R;
    _setHidden<R = void, P0 = boolean>(__setHidden: P0): R;
    _setSubmenu<R = void, P0 = unknown>(__setSubmenu: P0): R;
    _superitem<R = unknown>(): R;
    dealloc<R = void>(): R;
    backgroundStyle<R = number>(): R;
    copyNormalizedTitle<R = unknown, P0 = unknown>(_copyNormalizedTitle: P0): R;
    setAccessibilityContentSiblingBelow<R = void, P0 = unknown>(_setAccessibilityContentSiblingBelow: P0): R;
    accessibilityContentSiblingBelow<R = unknown>(): R;
    setAccessibilityContentSiblingAbove<R = void, P0 = unknown>(_setAccessibilityContentSiblingAbove: P0): R;
    accessibilityContentSiblingAbove<R = unknown>(): R;
    setNextContentSibling<R = void, P0 = unknown>(_setNextContentSibling: P0): R;
    accessibilityNextContentSibling<R = unknown>(): R;
    setPreviousContentSibling<R = void, P0 = unknown>(_setPreviousContentSibling: P0): R;
    accessibilityPreviousContentSibling<R = unknown>(): R;
    setAccessibilityFrameInParentSpace<R = void, P0 = CGRect>(_setAccessibilityFrameInParentSpace: P0): R;
    accessibilityFrameInParentSpace<R = CGRect>(): R;
    setAccessibilityHeaderGroup<R = void, P0 = unknown>(_setAccessibilityHeaderGroup: P0): R;
    accessibilityHeaderGroup<R = unknown>(): R;
    setAccessibilitySections<R = void, P0 = unknown>(_setAccessibilitySections: P0): R;
    accessibilitySections<R = unknown>(): R;
    setAccessibilityMimicNativeView<R = void, P0 = boolean>(_setAccessibilityMimicNativeView: P0): R;
    isAccessibilityMimicNativeView<R = boolean>(): R;
    setAccessibilityFunctionRowTopLevelElements<R = void, P0 = unknown>(_setAccessibilityFunctionRowTopLevelElements: P0): R;
    accessibilityFunctionRowTopLevelElements<R = unknown>(): R;
    setAccessibilityEnhancedUserInterface<R = void, P0 = boolean>(_setAccessibilityEnhancedUserInterface: P0): R;
    isAccessibilityEnhancedUserInterface<R = boolean>(): R;
    _accessibilityLabel<R = unknown>(): R;
    setAccessibilityCustomChoosers<R = void, P0 = unknown>(_setAccessibilityCustomChoosers: P0): R;
    accessibilityCustomChoosers<R = unknown>(): R;
    setAccessibilityAuditIssues<R = void, P0 = unknown>(_setAccessibilityAuditIssues: P0): R;
    accessibilityAuditIssues<R = unknown>(): R;
    accessibilityResultsForSearchPredicate<R = unknown, P0 = unknown>(_accessibilityResultsForSearchPredicate: P0): R;
    _releaseDeepAnimation<R = void>(): R;
    _completeDeepAnimation<R = void>(): R;
    _cancelPredeepAnimation<R = void>(): R;
    _doPredeepAnimationWithProgress<R = void, P0 = number>(__doPredeepAnimationWithProgress: P0): R;
    _beginPredeepAnimationAgainstPoint_inView<R = void, P0 = CGPoint, P1 = unknown>(__beginPredeepAnimationAgainstPoint: P0, _inView: P1): R;
    setActionBlock<R = void, P0 = CDUnknownBlockType>(_setActionBlock: P0): R;
    invokeActionBlock<R = void, P0 = unknown>(_invokeActionBlock: P0): R;
    controlView<R = unknown>(): R;
    setControlView<R = void, P0 = unknown>(_setControlView: P0): R;
    accessibilitySetOverrideValue_forAttribute<R = boolean, P0 = unknown, P1 = unknown>(_accessibilitySetOverrideValue: P0, _forAttribute: P1): R;
    accessibilitySupportsOverriddenAttributes<R = boolean>(): R;
    accessibilityIsIgnored<R = boolean>(): R;
    identifier<R = NSString>(): R;
    setIdentifier<R = void, P0 = NSString>(_v: P0): R;
    view<R = NSView>(): R;
    setView<R = void, P0 = NSView>(_v: P0): R;
    toolTip<R = NSString>(): R;
    setToolTip<R = void, P0 = NSString>(_v: P0): R;
    representedObject<R = unknown>(): R;
    setRepresentedObject<R = void, P0 = unknown>(_v: P0): R;
    tag<R = number>(): R;
    setTag<R = void, P0 = number>(_v: P0): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
    indentationLevel<R = number>(): R;
    setIndentationLevel<R = void, P0 = number>(_v: P0): R;
    alternate<R = boolean>(): R;
    setAlternate<R = void, P0 = boolean>(_v: P0): R;
    highlighted<R = boolean>(): R;
    enabled<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_v: P0): R;
    mixedStateImage<R = NSImage>(): R;
    setMixedStateImage<R = void, P0 = NSImage>(_v: P0): R;
    offStateImage<R = NSImage>(): R;
    setOffStateImage<R = void, P0 = NSImage>(_v: P0): R;
    onStateImage<R = NSImage>(): R;
    setOnStateImage<R = void, P0 = NSImage>(_v: P0): R;
    state<R = number>(): R;
    setState<R = void, P0 = number>(_v: P0): R;
    image<R = NSImage>(): R;
    setImage<R = void, P0 = NSImage>(_v: P0): R;
    userKeyEquivalent<R = NSString>(): R;
    allowsKeyEquivalentWhenHidden<R = boolean>(): R;
    setAllowsKeyEquivalentWhenHidden<R = void, P0 = boolean>(_v: P0): R;
    keyEquivalentModifierMask<R = number>(): R;
    setKeyEquivalentModifierMask<R = void, P0 = number>(_v: P0): R;
    keyEquivalent<R = NSString>(): R;
    setKeyEquivalent<R = void, P0 = NSString>(_v: P0): R;
    separatorItem<R = boolean>(): R;
    attributedTitle<R = NSAttributedString>(): R;
    setAttributedTitle<R = void, P0 = NSAttributedString>(_v: P0): R;
    title<R = NSString>(): R;
    setTitle<R = void, P0 = NSString>(_v: P0): R;
    hiddenOrHasHiddenAncestor<R = boolean>(): R;
    hidden<R = boolean>(): R;
    setHidden<R = void, P0 = boolean>(_v: P0): R;
    submenu<R = NSMenu>(): R;
    setSubmenu<R = void, P0 = NSMenu>(_v: P0): R;
    hasSubmenu<R = boolean>(): R;
    menu<R = NSMenu>(): R;
    setMenu<R = void, P0 = NSMenu>(_v: P0): R;
    parentItem<R = NSMenuItem>(): R;
    description<R = NSString>(): R;
    accessibilityZoomButton<R = unknown>(): R;
    setAccessibilityZoomButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityWindows<R = NSArray>(): R;
    setAccessibilityWindows<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityWindow<R = unknown>(): R;
    setAccessibilityWindow<R = void, P0 = unknown>(_v: P0): R;
    accessibilityWarningValue<R = unknown>(): R;
    setAccessibilityWarningValue<R = void, P0 = unknown>(_v: P0): R;
    accessibilityVisibleRows<R = NSArray>(): R;
    setAccessibilityVisibleRows<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityVisibleColumns<R = NSArray>(): R;
    setAccessibilityVisibleColumns<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityVisibleChildren<R = NSArray>(): R;
    setAccessibilityVisibleChildren<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityVisibleCharacterRange<R = _NSRange>(): R;
    setAccessibilityVisibleCharacterRange<R = void, P0 = _NSRange>(_v: P0): R;
    accessibilityVisibleCells<R = NSArray>(): R;
    setAccessibilityVisibleCells<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityVerticalUnits<R = number>(): R;
    setAccessibilityVerticalUnits<R = void, P0 = number>(_v: P0): R;
    accessibilityVerticalUnitDescription<R = NSString>(): R;
    setAccessibilityVerticalUnitDescription<R = void, P0 = NSString>(_v: P0): R;
    accessibilityVerticalScrollBar<R = unknown>(): R;
    setAccessibilityVerticalScrollBar<R = void, P0 = unknown>(_v: P0): R;
    accessibilityValueDescription<R = NSString>(): R;
    setAccessibilityValueDescription<R = void, P0 = NSString>(_v: P0): R;
    accessibilityValue<R = unknown>(): R;
    setAccessibilityValue<R = void, P0 = unknown>(_v: P0): R;
    accessibilityUnits<R = number>(): R;
    setAccessibilityUnits<R = void, P0 = number>(_v: P0): R;
    accessibilityUnitDescription<R = NSString>(): R;
    setAccessibilityUnitDescription<R = void, P0 = NSString>(_v: P0): R;
    accessibilityURL<R = NSURL>(): R;
    setAccessibilityURL<R = void, P0 = NSURL>(_v: P0): R;
    accessibilityTopLevelUIElement<R = unknown>(): R;
    setAccessibilityTopLevelUIElement<R = void, P0 = unknown>(_v: P0): R;
    accessibilityToolbarButton<R = unknown>(): R;
    setAccessibilityToolbarButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityTitleUIElement<R = unknown>(): R;
    setAccessibilityTitleUIElement<R = void, P0 = unknown>(_v: P0): R;
    accessibilityTitle<R = NSString>(): R;
    setAccessibilityTitle<R = void, P0 = NSString>(_v: P0): R;
    accessibilityTabs<R = NSArray>(): R;
    setAccessibilityTabs<R = void, P0 = NSArray>(_v: P0): R;
    accessibilitySubrole<R = NSString>(): R;
    setAccessibilitySubrole<R = void, P0 = NSString>(_v: P0): R;
    accessibilitySplitters<R = NSArray>(): R;
    setAccessibilitySplitters<R = void, P0 = NSArray>(_v: P0): R;
    accessibilitySortDirection<R = number>(): R;
    setAccessibilitySortDirection<R = void, P0 = number>(_v: P0): R;
    accessibilityFrame<R = CGRect>(): R;
    setAccessibilityFrame<R = void, P0 = CGRect>(_v: P0): R;
    accessibilityShownMenu<R = unknown>(): R;
    setAccessibilityShownMenu<R = void, P0 = unknown>(_v: P0): R;
    accessibilitySharedTextUIElements<R = NSArray>(): R;
    setAccessibilitySharedTextUIElements<R = void, P0 = NSArray>(_v: P0): R;
    accessibilitySharedFocusElements<R = NSArray>(): R;
    setAccessibilitySharedFocusElements<R = void, P0 = NSArray>(_v: P0): R;
    accessibilitySharedCharacterRange<R = _NSRange>(): R;
    setAccessibilitySharedCharacterRange<R = void, P0 = _NSRange>(_v: P0): R;
    accessibilityServesAsTitleForUIElements<R = NSArray>(): R;
    setAccessibilityServesAsTitleForUIElements<R = void, P0 = NSArray>(_v: P0): R;
    accessibilitySelectedTextRanges<R = NSArray>(): R;
    setAccessibilitySelectedTextRanges<R = void, P0 = NSArray>(_v: P0): R;
    accessibilitySelectedTextRange<R = _NSRange>(): R;
    setAccessibilitySelectedTextRange<R = void, P0 = _NSRange>(_v: P0): R;
    accessibilitySelectedText<R = NSString>(): R;
    setAccessibilitySelectedText<R = void, P0 = NSString>(_v: P0): R;
    accessibilitySelectedRows<R = NSArray>(): R;
    setAccessibilitySelectedRows<R = void, P0 = NSArray>(_v: P0): R;
    accessibilitySelectedColumns<R = NSArray>(): R;
    setAccessibilitySelectedColumns<R = void, P0 = NSArray>(_v: P0): R;
    accessibilitySelectedChildren<R = NSArray>(): R;
    setAccessibilitySelectedChildren<R = void, P0 = NSArray>(_v: P0): R;
    accessibilitySelectedCells<R = NSArray>(): R;
    setAccessibilitySelectedCells<R = void, P0 = NSArray>(_v: P0): R;
    accessibilitySelected<R = boolean>(): R;
    setAccessibilitySelected<R = void, P0 = boolean>(_v: P0): R;
    accessibilitySearchMenu<R = unknown>(): R;
    setAccessibilitySearchMenu<R = void, P0 = unknown>(_v: P0): R;
    accessibilitySearchButton<R = unknown>(): R;
    setAccessibilitySearchButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityRows<R = NSArray>(): R;
    setAccessibilityRows<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityRowIndexRange<R = _NSRange>(): R;
    setAccessibilityRowIndexRange<R = void, P0 = _NSRange>(_v: P0): R;
    accessibilityRowHeaderUIElements<R = NSArray>(): R;
    setAccessibilityRowHeaderUIElements<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityRowCount<R = number>(): R;
    setAccessibilityRowCount<R = void, P0 = number>(_v: P0): R;
    accessibilityRoleDescription<R = NSString>(): R;
    setAccessibilityRoleDescription<R = void, P0 = NSString>(_v: P0): R;
    accessibilityRole<R = NSString>(): R;
    setAccessibilityRole<R = void, P0 = NSString>(_v: P0): R;
    accessibilityRequired<R = boolean>(): R;
    setAccessibilityRequired<R = void, P0 = boolean>(_v: P0): R;
    accessibilityProxy<R = unknown>(): R;
    setAccessibilityProxy<R = void, P0 = unknown>(_v: P0): R;
    accessibilityPreviousContents<R = NSArray>(): R;
    setAccessibilityPreviousContents<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityPlaceholderValue<R = NSString>(): R;
    setAccessibilityPlaceholderValue<R = void, P0 = NSString>(_v: P0): R;
    accessibilityParent<R = unknown>(): R;
    setAccessibilityParent<R = void, P0 = unknown>(_v: P0): R;
    accessibilityOverflowButton<R = unknown>(): R;
    setAccessibilityOverflowButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityOrientation<R = number>(): R;
    setAccessibilityOrientation<R = void, P0 = number>(_v: P0): R;
    accessibilityOrderedByRow<R = boolean>(): R;
    setAccessibilityOrderedByRow<R = void, P0 = boolean>(_v: P0): R;
    accessibilityNumberOfCharacters<R = number>(): R;
    setAccessibilityNumberOfCharacters<R = void, P0 = number>(_v: P0): R;
    accessibilityNextContents<R = NSArray>(): R;
    setAccessibilityNextContents<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityModal<R = boolean>(): R;
    setAccessibilityModal<R = void, P0 = boolean>(_v: P0): R;
    accessibilityMinimized<R = boolean>(): R;
    setAccessibilityMinimized<R = void, P0 = boolean>(_v: P0): R;
    accessibilityMinimizeButton<R = unknown>(): R;
    setAccessibilityMinimizeButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityMinValue<R = unknown>(): R;
    setAccessibilityMinValue<R = void, P0 = unknown>(_v: P0): R;
    accessibilityMenuBar<R = unknown>(): R;
    setAccessibilityMenuBar<R = void, P0 = unknown>(_v: P0): R;
    accessibilityMaxValue<R = unknown>(): R;
    setAccessibilityMaxValue<R = void, P0 = unknown>(_v: P0): R;
    accessibilityMarkerValues<R = unknown>(): R;
    setAccessibilityMarkerValues<R = void, P0 = unknown>(_v: P0): R;
    accessibilityMarkerUIElements<R = NSArray>(): R;
    setAccessibilityMarkerUIElements<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityMarkerTypeDescription<R = NSString>(): R;
    setAccessibilityMarkerTypeDescription<R = void, P0 = NSString>(_v: P0): R;
    accessibilityRulerMarkerType<R = number>(): R;
    setAccessibilityRulerMarkerType<R = void, P0 = number>(_v: P0): R;
    accessibilityMarkerGroupUIElement<R = unknown>(): R;
    setAccessibilityMarkerGroupUIElement<R = void, P0 = unknown>(_v: P0): R;
    accessibilityMainWindow<R = unknown>(): R;
    setAccessibilityMainWindow<R = void, P0 = unknown>(_v: P0): R;
    accessibilityMain<R = boolean>(): R;
    setAccessibilityMain<R = void, P0 = boolean>(_v: P0): R;
    accessibilityLinkedUIElements<R = NSArray>(): R;
    setAccessibilityLinkedUIElements<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityLabelValue<R = number>(): R;
    setAccessibilityLabelValue<R = void, P0 = number>(_v: P0): R;
    accessibilityLabelUIElements<R = NSArray>(): R;
    setAccessibilityLabelUIElements<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityInsertionPointLineNumber<R = number>(): R;
    setAccessibilityInsertionPointLineNumber<R = void, P0 = number>(_v: P0): R;
    accessibilityIndex<R = number>(): R;
    setAccessibilityIndex<R = void, P0 = number>(_v: P0): R;
    accessibilityIncrementButton<R = unknown>(): R;
    setAccessibilityIncrementButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityIdentifier<R = NSString>(): R;
    setAccessibilityIdentifier<R = void, P0 = NSString>(_v: P0): R;
    accessibilityHorizontalUnits<R = number>(): R;
    setAccessibilityHorizontalUnits<R = void, P0 = number>(_v: P0): R;
    accessibilityHorizontalUnitDescription<R = NSString>(): R;
    setAccessibilityHorizontalUnitDescription<R = void, P0 = NSString>(_v: P0): R;
    accessibilityHorizontalScrollBar<R = unknown>(): R;
    setAccessibilityHorizontalScrollBar<R = void, P0 = unknown>(_v: P0): R;
    accessibilityHidden<R = boolean>(): R;
    setAccessibilityHidden<R = void, P0 = boolean>(_v: P0): R;
    accessibilityHelp<R = NSString>(): R;
    setAccessibilityHelp<R = void, P0 = NSString>(_v: P0): R;
    accessibilityHeader<R = unknown>(): R;
    setAccessibilityHeader<R = void, P0 = unknown>(_v: P0): R;
    accessibilityHandles<R = NSArray>(): R;
    setAccessibilityHandles<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityGrowArea<R = unknown>(): R;
    setAccessibilityGrowArea<R = void, P0 = unknown>(_v: P0): R;
    accessibilityFullScreenButton<R = unknown>(): R;
    setAccessibilityFullScreenButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityFrontmost<R = boolean>(): R;
    setAccessibilityFrontmost<R = void, P0 = boolean>(_v: P0): R;
    accessibilityFocusedWindow<R = unknown>(): R;
    setAccessibilityFocusedWindow<R = void, P0 = unknown>(_v: P0): R;
    accessibilityApplicationFocusedUIElement<R = unknown>(): R;
    setAccessibilityApplicationFocusedUIElement<R = void, P0 = unknown>(_v: P0): R;
    accessibilityFocused<R = boolean>(): R;
    setAccessibilityFocused<R = void, P0 = boolean>(_v: P0): R;
    accessibilityFilename<R = NSString>(): R;
    setAccessibilityFilename<R = void, P0 = NSString>(_v: P0): R;
    accessibilityExtrasMenuBar<R = unknown>(): R;
    setAccessibilityExtrasMenuBar<R = void, P0 = unknown>(_v: P0): R;
    accessibilityExpanded<R = boolean>(): R;
    setAccessibilityExpanded<R = void, P0 = boolean>(_v: P0): R;
    accessibilityEnabled<R = boolean>(): R;
    setAccessibilityEnabled<R = void, P0 = boolean>(_v: P0): R;
    accessibilityEdited<R = boolean>(): R;
    setAccessibilityEdited<R = void, P0 = boolean>(_v: P0): R;
    accessibilityDocument<R = NSString>(): R;
    setAccessibilityDocument<R = void, P0 = NSString>(_v: P0): R;
    accessibilityDisclosureLevel<R = number>(): R;
    setAccessibilityDisclosureLevel<R = void, P0 = number>(_v: P0): R;
    accessibilityDisclosed<R = boolean>(): R;
    setAccessibilityDisclosed<R = void, P0 = boolean>(_v: P0): R;
    accessibilityDisclosedRows<R = unknown>(): R;
    setAccessibilityDisclosedRows<R = void, P0 = unknown>(_v: P0): R;
    accessibilityDisclosedByRow<R = unknown>(): R;
    setAccessibilityDisclosedByRow<R = void, P0 = unknown>(_v: P0): R;
    accessibilityLabel<R = NSString>(): R;
    setAccessibilityLabel<R = void, P0 = NSString>(_v: P0): R;
    accessibilityDefaultButton<R = unknown>(): R;
    setAccessibilityDefaultButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityDecrementButton<R = unknown>(): R;
    setAccessibilityDecrementButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityCustomRotors<R = NSArray>(): R;
    setAccessibilityCustomRotors<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityCustomActions<R = NSArray>(): R;
    setAccessibilityCustomActions<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityCriticalValue<R = unknown>(): R;
    setAccessibilityCriticalValue<R = void, P0 = unknown>(_v: P0): R;
    accessibilityContents<R = NSArray>(): R;
    setAccessibilityContents<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityProtectedContent<R = boolean>(): R;
    setAccessibilityProtectedContent<R = void, P0 = boolean>(_v: P0): R;
    accessibilityColumns<R = NSArray>(): R;
    setAccessibilityColumns<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityColumnTitles<R = NSArray>(): R;
    setAccessibilityColumnTitles<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityColumnIndexRange<R = _NSRange>(): R;
    setAccessibilityColumnIndexRange<R = void, P0 = _NSRange>(_v: P0): R;
    accessibilityColumnHeaderUIElements<R = NSArray>(): R;
    setAccessibilityColumnHeaderUIElements<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityColumnCount<R = number>(): R;
    setAccessibilityColumnCount<R = void, P0 = number>(_v: P0): R;
    accessibilityCloseButton<R = unknown>(): R;
    setAccessibilityCloseButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityClearButton<R = unknown>(): R;
    setAccessibilityClearButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityChildrenInNavigationOrder<R = NSArray>(): R;
    setAccessibilityChildrenInNavigationOrder<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityChildren<R = NSArray>(): R;
    setAccessibilityChildren<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityCancelButton<R = unknown>(): R;
    setAccessibilityCancelButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityAlternateUIVisible<R = boolean>(): R;
    setAccessibilityAlternateUIVisible<R = void, P0 = boolean>(_v: P0): R;
    accessibilityAllowedValues<R = NSArray>(): R;
    setAccessibilityAllowedValues<R = void, P0 = NSArray>(_v: P0): R;
    accessibilityActivationPoint<R = CGPoint>(): R;
    setAccessibilityActivationPoint<R = void, P0 = CGPoint>(_v: P0): R;
    accessibilityElement<R = boolean>(): R;
    setAccessibilityElement<R = void, P0 = boolean>(_v: P0): R;
    _wantsDeepAnimationCallbacks<R = boolean>(): R;
    debugDescription<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
    // + NSMenuItem(CHMenuItemAdditions): 
    isInMainMenu<R = boolean>(): R;
    setSmallCenteredFont<R = void>(): R;
    setSmallFont<R = void>(): R;
    // + NSMenuItem(SharedObjects): 
    generatePreviewWithColorSpace_backingScale_completionHandler<R = boolean, P0 = unknown, P1 = number, P2 = CDUnknownBlockType>(_generatePreviewWithColorSpace: P0, _backingScale: P1, _completionHandler: P2): R;
    // + NSMenuItem(SharedObjects):
    shareableObjectReferences<R = NSArray>(): R;
    setShareableObjectReferences<R = void, P0 = NSArray>(_v: P0): R;
    symbolMasterReferences<R = NSArray>(): R;
  }
  namespace NSMenuItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSImmediateActionAnimationControllerProtocol, NSMenuItemProtocol, NSCopyingProtocol, NSCodingProtocol, NSValidatedUserInterfaceItemProtocol, NSUserInterfaceItemIdentificationProtocol, NSAccessibilityElementProtocol, NSAccessibilityProtocol {
      alloc<R = NSMenuItem>(): R;
      new: <R = NSMenuItem>() => R;
      _menuItemViewerHIViewClassName<R = __CFString>(): R;
      _hasTitlePathBasedUserKeyEquivalent<R = boolean>(): R;
      _updateUserKEsAfterActivation<R = void, P0 = unknown>(__updateUserKEsAfterActivation: P0): R;
      standardQuickLookMenuItem<R = unknown>(): R;
      standardShareMenuItemWithItems<R = unknown, P0 = unknown>(_standardShareMenuItemWithItems: P0): R;
      standardShareMenuItemForItems<R = unknown, P0 = unknown>(_standardShareMenuItemForItems: P0): R;
      standardDeleteMenuItem<R = unknown>(): R;
      standardPasteMenuItem<R = unknown>(): R;
      standardCopyMenuItem<R = unknown>(): R;
      initialize<R = void>(): R;
      _defaultWindowMenuStateImageDirtyWindow<R = unknown>(): R;
      _defaultWindowMenuStateImageKeyWindow<R = unknown>(): R;
      _defaultWindowMenuStateImageMinimizedWindow<R = unknown>(): R;
      standardImportFromDeviceMenuItem<R = unknown>(): R;
      _sidecarServicesMenuItemWithTarget_action_options<R = unknown, P0 = unknown, P1 = string, P2 = number>(__sidecarServicesMenuItemWithTarget: P0, _action: P1, _options: P2): R;
      _sidecarServicesMenuItemWithOptions<R = unknown, P0 = number>(__sidecarServicesMenuItemWithOptions: P0): R;
      _menuItemForItem_view_itemFrame_aimFrame_options<R = unknown, P0 = unknown, P1 = unknown, P2 = CGRect, P3 = CGRect, P4 = unknown>(__menuItemForItem: P0, _view: P1, _itemFrame: P2, _aimFrame: P3, _options: P4): R;
      _dispatchActionBlockFor<R = void, P0 = unknown>(__dispatchActionBlockFor: P0): R;
      _menuItemWithTitle_handler<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(__menuItemWithTitle: P0, _handler: P1): R;
      // + NSMenuItem(CHMenuItemAdditions): 
      menuItemWithTruncatedTitle_target_action<R = unknown, P0 = unknown, P1 = unknown, P2 = string>(_menuItemWithTruncatedTitle: P0, _target: P1, _action: P2): R;
      itemWithTitle_small_target_action<R = unknown, P0 = unknown, P1 = boolean, P2 = unknown, P3 = string>(_itemWithTitle: P0, _small: P1, _target: P2, _action: P3): R;
      itemWithTitle_target_action<R = unknown, P0 = unknown, P1 = unknown, P2 = string>(_itemWithTitle: P0, _target: P1, _action: P2): R;
      itemWithTitle_action<R = unknown, P0 = unknown, P1 = string>(_itemWithTitle: P0, _action: P1): R;
    }
  }
}

declare const NSMenuItem: cocoa.NSMenuItem.CLASS;
