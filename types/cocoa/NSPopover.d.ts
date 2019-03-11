/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPopover<T = any> extends cocoa.NSResponder, cocoa._NSTransientUIElementProtocol, cocoa.NSAppearanceCustomizationProtocol, cocoa.NSAccessibilityElementProtocol, cocoa.NSAccessibilityProtocol {
    _removeAllForbiddenRects<R = void>(): R;
    _addForbiddenRectForBoundsOfView<R = void, P0 = unknown>(__addForbiddenRectForBoundsOfView: P0): R;
    _dragWithEvent<R = void, P0 = unknown>(__dragWithEvent: P0): R;
    _applicationDidBecomeActive_detachedWindow<R = void, P0 = unknown>(__applicationDidBecomeActive_detachedWindow: P0): R;
    _applicationDidResignActive_detachedWindow<R = void, P0 = unknown>(__applicationDidResignActive_detachedWindow: P0): R;
    setHidesDetachedWindowOnDeactivate<R = void, P0 = boolean>(_setHidesDetachedWindowOnDeactivate: P0): R;
    hidesDetachedWindowOnDeactivate<R = boolean>(): R;
    _resetImplicitWindowDetach<R = void>(): R;
    _finalizeImplicitWindowDetach<R = void>(): R;
    detach<R = void>(): R;
    contentInset<R = cocoa.NSEdgeInsets>(): R;
    anchorSize<R = cocoa.CGSize>(): R;
    popoverDidClose<R = void, P0 = unknown>(_popoverDidClose: P0): R;
    popoverWillClose<R = void, P0 = unknown>(_popoverWillClose: P0): R;
    popoverShouldClose<R = boolean, P0 = unknown>(_popoverShouldClose: P0): R;
    popoverDidShow<R = void, P0 = unknown>(_popoverDidShow: P0): R;
    popoverWillShow<R = void, P0 = unknown>(_popoverWillShow: P0): R;
    popoverDidDetach<R = void, P0 = unknown>(_popoverDidDetach: P0): R;
    detachableWindowForPopover<R = unknown, P0 = unknown>(_detachableWindowForPopover: P0): R;
    popoverShouldDetach<R = boolean, P0 = unknown>(_popoverShouldDetach: P0): R;
    cancelOperation<R = void, P0 = unknown>(_cancelOperation: P0): R;
    cancel<R = void, P0 = unknown>(_cancel: P0): R;
    performClose<R = void, P0 = unknown>(_performClose: P0): R;
    close<R = void>(): R;
    _resetClosingBlock<R = void>(): R;
    _executeClosingBlock<R = void>(): R;
    _queueClosingBlock<R = void, P0 = cocoa.CDUnknownBlockType>(__queueClosingBlock: P0): R;
    _finishClosingAndShouldNotify<R = void, P0 = boolean>(__finishClosingAndShouldNotify: P0): R;
    _closeReason<R = number>(): R;
    _setCloseReason<R = void, P0 = number>(__setCloseReason: P0): R;
    _popoverWindowLevel<R = number>(): R;
    _updatePopoverWindowLevels<R = void>(): R;
    _popoverDidEnterFullscreen<R = void, P0 = unknown>(__popoverDidEnterFullscreen: P0): R;
    _popoverDidExitFullscreen<R = void, P0 = unknown>(__popoverDidExitFullscreen: P0): R;
    _observeFullscreenChanges<R = void, P0 = boolean>(__observeFullscreenChanges: P0): R;
    _completeShow<R = void>(): R;
    _prepareToShowRelativeToRect_inView_preferredEdge<R = void, P0 = cocoa.CGRect, P1 = unknown, P2 = number>(__prepareToShowRelativeToRect: P0, _inView: P1, _preferredEdge: P2): R;
    showRelativeToRect_ofView_preferredEdge<R = void, P0 = cocoa.CGRect, P1 = unknown, P2 = number>(_showRelativeToRect: P0, _ofView: P1, _preferredEdge: P2): R;
    _validatePopoverWindowFirstResponder<R = boolean>(): R;
    _validatePopoverFirstResponder<R = boolean, P0 = unknown>(__validatePopoverFirstResponder: P0): R;
    _repositionRelativeToRect_ofView_preferredEdge<R = void, P0 = cocoa.CGRect, P1 = unknown, P2 = number>(__repositionRelativeToRect: P0, _ofView: P1, _preferredEdge: P2): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    _setListenToEffectiveAppearanceDidChange<R = void, P0 = boolean>(__setListenToEffectiveAppearanceDidChange: P0): R;
    positioningViewGeometryInWindowDidChange<R = void, P0 = unknown>(_positioningViewGeometryInWindowDidChange: P0): R;
    _setListenToViewGeometryInWindowDidChange<R = void, P0 = boolean>(__setListenToViewGeometryInWindowDidChange: P0): R;
    _externalRectEdgeToInternalAnchorEdge_ofView<R = number, P0 = number, P1 = unknown>(__externalRectEdgeToInternalAnchorEdge: P0, _ofView: P1): R;
    _positioningView<R = unknown>(): R;
    _geometryInWindowDidChangeForView<R = void, P0 = unknown>(__geometryInWindowDidChangeForView: P0): R;
    _shouldStillBeVisibleRelativeToView<R = boolean, P0 = unknown>(__shouldStillBeVisibleRelativeToView: P0): R;
    _makePopoverWindowIfNeeded<R = unknown>(): R;
    _updateAnchorPoint<R = void>(): R;
    _updateAnchorPointForFrame_reshape<R = void, P0 = cocoa.CGRect, P1 = boolean>(__updateAnchorPointForFrame: P0, _reshape: P1): R;
    _computeAnchorPointForFrame<R = cocoa.CGPoint, P0 = cocoa.CGRect>(__computeAnchorPointForFrame: P0): R;
    _updateWindow_withContentViewController<R = void, P0 = unknown, P1 = unknown>(__updateWindow: P0, _withContentViewController: P1): R;
    _updateContentViewAndSizeFromViewController<R = void>(): R;
    _popoverWindow_fromConstraintsSetWindowFrame<R = boolean, P0 = unknown, P1 = cocoa.CGRect>(__popoverWindow: P0, _fromConstraintsSetWindowFrame: P1): R;
    _setContentView_size_canAnimate<R = void, P0 = unknown, P1 = cocoa.CGSize, P2 = boolean>(__setContentView: P0, _size: P1, _canAnimate: P2): R;
    setAnchorEdge<R = void, P0 = number>(_setAnchorEdge: P0): R;
    anchorEdge<R = number>(): R;
    _setContentSize<R = void, P0 = cocoa.CGSize>(__setContentSize: P0): R;
    _setBindingAdaptor<R = void, P0 = unknown>(__setBindingAdaptor: P0): R;
    _bindingAdaptor<R = unknown>(): R;
    setPositioningOptions<R = void, P0 = number>(_setPositioningOptions: P0): R;
    positioningOptions<R = number>(): R;
    _updateWindowProperties<R = void>(): R;
    _popoverFrame<R = unknown>(): R;
    _setPopoverWindow<R = void, P0 = unknown>(__setPopoverWindow: P0): R;
    _popoverWindow<R = unknown>(): R;
    _shouldUseNonVibrantAppearanceForContentView<R = boolean, P0 = unknown>(__shouldUseNonVibrantAppearanceForContentView: P0): R;
    _requiresCorrectContentAppearance<R = boolean>(): R;
    _setRequiresCorrectContentAppearance<R = void, P0 = boolean>(__setRequiresCorrectContentAppearance: P0): R;
    _setLegacyAppearance<R = void, P0 = number>(__setLegacyAppearance: P0): R;
    _legacyAppearance<R = number>(): R;
    setCustomAppearance<R = void, P0 = unknown>(_setCustomAppearance: P0): R;
    customAppearance<R = unknown>(): R;
    _delegate<R = unknown>(): R;
    _commonInit<R = void>(): R;
    setShouldHideAnchor<R = void, P0 = boolean>(_setShouldHideAnchor: P0): R;
    shouldHideAnchor<R = boolean>(): R;
    recognizerDidDismissAnimation<R = void, P0 = unknown>(_recognizerDidDismissAnimation: P0): R;
    recognizerDidCompleteAnimation<R = void, P0 = unknown>(_recognizerDidCompleteAnimation: P0): R;
    recognizerDidCancelAnimation<R = void, P0 = unknown>(_recognizerDidCancelAnimation: P0): R;
    recognizerDidUpdateAnimation<R = void, P0 = unknown>(_recognizerDidUpdateAnimation: P0): R;
    recognizerWillBeginAnimation<R = void, P0 = unknown>(_recognizerWillBeginAnimation: P0): R;
    _releaseDeepAnimation<R = void>(): R;
    _completeDeepAnimation<R = void>(): R;
    _cancelPredeepAnimation<R = void>(): R;
    _doPredeepAnimationWithProgress<R = void, P0 = number>(__doPredeepAnimationWithProgress: P0): R;
    _beginPredeepAnimationRelativeToRect_ofView_preferredEdge<R = void, P0 = cocoa.CGRect, P1 = unknown, P2 = number>(__beginPredeepAnimationRelativeToRect: P0, _ofView: P1, _preferredEdge: P2): R;
    _beginPredeepAnimationAgainstPoint_inView<R = void, P0 = cocoa.CGPoint, P1 = unknown>(__beginPredeepAnimationAgainstPoint: P0, _inView: P1): R;
    _reactiveAction<R = string>(): R;
    _currentFrameOnScreenWithContentSize_outAnchorEdge<R = cocoa.CGRect, P0 = cocoa.CGSize, P1 = number>(__currentFrameOnScreenWithContentSize: P0, _outAnchorEdge: P1): R;
    accessibilitySectionsAttribute<R = unknown>(): R;
    accessibilityAuditIssuesAttribute<R = unknown>(): R;
    _accessibilityShouldReportCancelAction<R = boolean>(): R;
    accessibilityIsIgnored<R = boolean>(): R;
    accessibilityAllowsOverriddenAttributesWhenIgnored<R = boolean>(): R;
    accessibilitySupportsOverriddenAttributes<R = boolean>(): R;
    accessibilitySetValue_forAttribute<R = void, P0 = unknown, P1 = unknown>(_accessibilitySetValue: P0, _forAttribute: P1): R;
    accessibilityIsAttributeSettable<R = boolean, P0 = unknown>(_accessibilityIsAttributeSettable: P0): R;
    accessibilityAttributeValue<R = unknown, P0 = unknown>(_accessibilityAttributeValue: P0): R;
    accessibilityAttributeNames<R = unknown>(): R;
    positioningWindow<R = cocoa.NSWindow>(): R;
    setPositioningWindow<R = void, P0 = cocoa.NSWindow>(_v: P0): R;
    positioningView<R = cocoa.NSView>(): R;
    setPositioningView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    accessibilityParent<R = unknown>(): R;
    setAccessibilityParent<R = void, P0 = unknown>(_v: P0): R;
    accessibilityFrame<R = cocoa.CGRect>(): R;
    setAccessibilityFrame<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    detached<R = boolean>(): R;
    description<R = cocoa.NSString>(): R;
    positioningRect<R = cocoa.CGRect>(): R;
    setPositioningRect<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    shown<R = boolean>(): R;
    setShown<R = void, P0 = boolean>(_v: P0): R;
    contentViewController<R = cocoa.NSViewController>(): R;
    setContentViewController<R = void, P0 = cocoa.NSViewController>(_v: P0): R;
    contentSize<R = cocoa.CGSize>(): R;
    setContentSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    animates<R = boolean>(): R;
    setAnimates<R = void, P0 = boolean>(_v: P0): R;
    behavior<R = number>(): R;
    setBehavior<R = void, P0 = number>(_v: P0): R;
    effectiveAppearance<R = cocoa.NSAppearance>(): R;
    appearance<R = cocoa.NSAppearance>(): R;
    setAppearance<R = void, P0 = cocoa.NSAppearance>(_v: P0): R;
    delegate<R = cocoa.NSPopoverDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.NSPopoverDelegate>(_v: P0): R;
    _transientBehavior<R = number>(): R;
    _registeredTransientBehavior<R = number>(): R;
    set_registeredTransientBehavior<R = void, P0 = number>(_v: P0): R;
    accessibilityActivationPoint<R = cocoa.CGPoint>(): R;
    setAccessibilityActivationPoint<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    accessibilityAllowedValues<R = cocoa.NSArray>(): R;
    setAccessibilityAllowedValues<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityAlternateUIVisible<R = boolean>(): R;
    setAccessibilityAlternateUIVisible<R = void, P0 = boolean>(_v: P0): R;
    accessibilityApplicationFocusedUIElement<R = unknown>(): R;
    setAccessibilityApplicationFocusedUIElement<R = void, P0 = unknown>(_v: P0): R;
    accessibilityCancelButton<R = unknown>(): R;
    setAccessibilityCancelButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityChildren<R = cocoa.NSArray>(): R;
    setAccessibilityChildren<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityChildrenInNavigationOrder<R = cocoa.NSArray>(): R;
    setAccessibilityChildrenInNavigationOrder<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityClearButton<R = unknown>(): R;
    setAccessibilityClearButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityCloseButton<R = unknown>(): R;
    setAccessibilityCloseButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityColumnCount<R = number>(): R;
    setAccessibilityColumnCount<R = void, P0 = number>(_v: P0): R;
    accessibilityColumnHeaderUIElements<R = cocoa.NSArray>(): R;
    setAccessibilityColumnHeaderUIElements<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityColumnIndexRange<R = cocoa._NSRange>(): R;
    setAccessibilityColumnIndexRange<R = void, P0 = cocoa._NSRange>(_v: P0): R;
    accessibilityColumnTitles<R = cocoa.NSArray>(): R;
    setAccessibilityColumnTitles<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityColumns<R = cocoa.NSArray>(): R;
    setAccessibilityColumns<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityContents<R = cocoa.NSArray>(): R;
    setAccessibilityContents<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityCriticalValue<R = unknown>(): R;
    setAccessibilityCriticalValue<R = void, P0 = unknown>(_v: P0): R;
    accessibilityCustomActions<R = cocoa.NSArray>(): R;
    setAccessibilityCustomActions<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityCustomRotors<R = cocoa.NSArray>(): R;
    setAccessibilityCustomRotors<R = void, P0 = cocoa.NSArray>(_v: P0): R;
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
    accessibilityDocument<R = cocoa.NSString>(): R;
    setAccessibilityDocument<R = void, P0 = cocoa.NSString>(_v: P0): R;
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
    accessibilityFilename<R = cocoa.NSString>(): R;
    setAccessibilityFilename<R = void, P0 = cocoa.NSString>(_v: P0): R;
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
    accessibilityHandles<R = cocoa.NSArray>(): R;
    setAccessibilityHandles<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityHeader<R = unknown>(): R;
    setAccessibilityHeader<R = void, P0 = unknown>(_v: P0): R;
    accessibilityHelp<R = cocoa.NSString>(): R;
    setAccessibilityHelp<R = void, P0 = cocoa.NSString>(_v: P0): R;
    accessibilityHidden<R = boolean>(): R;
    setAccessibilityHidden<R = void, P0 = boolean>(_v: P0): R;
    accessibilityHorizontalScrollBar<R = unknown>(): R;
    setAccessibilityHorizontalScrollBar<R = void, P0 = unknown>(_v: P0): R;
    accessibilityHorizontalUnitDescription<R = cocoa.NSString>(): R;
    setAccessibilityHorizontalUnitDescription<R = void, P0 = cocoa.NSString>(_v: P0): R;
    accessibilityHorizontalUnits<R = number>(): R;
    setAccessibilityHorizontalUnits<R = void, P0 = number>(_v: P0): R;
    accessibilityIdentifier<R = cocoa.NSString>(): R;
    setAccessibilityIdentifier<R = void, P0 = cocoa.NSString>(_v: P0): R;
    accessibilityIncrementButton<R = unknown>(): R;
    setAccessibilityIncrementButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityIndex<R = number>(): R;
    setAccessibilityIndex<R = void, P0 = number>(_v: P0): R;
    accessibilityInsertionPointLineNumber<R = number>(): R;
    setAccessibilityInsertionPointLineNumber<R = void, P0 = number>(_v: P0): R;
    accessibilityLabel<R = cocoa.NSString>(): R;
    setAccessibilityLabel<R = void, P0 = cocoa.NSString>(_v: P0): R;
    accessibilityLabelUIElements<R = cocoa.NSArray>(): R;
    setAccessibilityLabelUIElements<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityLabelValue<R = number>(): R;
    setAccessibilityLabelValue<R = void, P0 = number>(_v: P0): R;
    accessibilityLinkedUIElements<R = cocoa.NSArray>(): R;
    setAccessibilityLinkedUIElements<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityMain<R = boolean>(): R;
    setAccessibilityMain<R = void, P0 = boolean>(_v: P0): R;
    accessibilityMainWindow<R = unknown>(): R;
    setAccessibilityMainWindow<R = void, P0 = unknown>(_v: P0): R;
    accessibilityMarkerGroupUIElement<R = unknown>(): R;
    setAccessibilityMarkerGroupUIElement<R = void, P0 = unknown>(_v: P0): R;
    accessibilityMarkerTypeDescription<R = cocoa.NSString>(): R;
    setAccessibilityMarkerTypeDescription<R = void, P0 = cocoa.NSString>(_v: P0): R;
    accessibilityMarkerUIElements<R = cocoa.NSArray>(): R;
    setAccessibilityMarkerUIElements<R = void, P0 = cocoa.NSArray>(_v: P0): R;
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
    accessibilityNextContents<R = cocoa.NSArray>(): R;
    setAccessibilityNextContents<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityNumberOfCharacters<R = number>(): R;
    setAccessibilityNumberOfCharacters<R = void, P0 = number>(_v: P0): R;
    accessibilityOrderedByRow<R = boolean>(): R;
    setAccessibilityOrderedByRow<R = void, P0 = boolean>(_v: P0): R;
    accessibilityOrientation<R = number>(): R;
    setAccessibilityOrientation<R = void, P0 = number>(_v: P0): R;
    accessibilityOverflowButton<R = unknown>(): R;
    setAccessibilityOverflowButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityPlaceholderValue<R = cocoa.NSString>(): R;
    setAccessibilityPlaceholderValue<R = void, P0 = cocoa.NSString>(_v: P0): R;
    accessibilityPreviousContents<R = cocoa.NSArray>(): R;
    setAccessibilityPreviousContents<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityProtectedContent<R = boolean>(): R;
    setAccessibilityProtectedContent<R = void, P0 = boolean>(_v: P0): R;
    accessibilityProxy<R = unknown>(): R;
    setAccessibilityProxy<R = void, P0 = unknown>(_v: P0): R;
    accessibilityRequired<R = boolean>(): R;
    setAccessibilityRequired<R = void, P0 = boolean>(_v: P0): R;
    accessibilityRole<R = cocoa.NSString>(): R;
    setAccessibilityRole<R = void, P0 = cocoa.NSString>(_v: P0): R;
    accessibilityRoleDescription<R = cocoa.NSString>(): R;
    setAccessibilityRoleDescription<R = void, P0 = cocoa.NSString>(_v: P0): R;
    accessibilityRowCount<R = number>(): R;
    setAccessibilityRowCount<R = void, P0 = number>(_v: P0): R;
    accessibilityRowHeaderUIElements<R = cocoa.NSArray>(): R;
    setAccessibilityRowHeaderUIElements<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityRowIndexRange<R = cocoa._NSRange>(): R;
    setAccessibilityRowIndexRange<R = void, P0 = cocoa._NSRange>(_v: P0): R;
    accessibilityRows<R = cocoa.NSArray>(): R;
    setAccessibilityRows<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityRulerMarkerType<R = number>(): R;
    setAccessibilityRulerMarkerType<R = void, P0 = number>(_v: P0): R;
    accessibilitySearchButton<R = unknown>(): R;
    setAccessibilitySearchButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilitySearchMenu<R = unknown>(): R;
    setAccessibilitySearchMenu<R = void, P0 = unknown>(_v: P0): R;
    accessibilitySelected<R = boolean>(): R;
    setAccessibilitySelected<R = void, P0 = boolean>(_v: P0): R;
    accessibilitySelectedCells<R = cocoa.NSArray>(): R;
    setAccessibilitySelectedCells<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilitySelectedChildren<R = cocoa.NSArray>(): R;
    setAccessibilitySelectedChildren<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilitySelectedColumns<R = cocoa.NSArray>(): R;
    setAccessibilitySelectedColumns<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilitySelectedRows<R = cocoa.NSArray>(): R;
    setAccessibilitySelectedRows<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilitySelectedText<R = cocoa.NSString>(): R;
    setAccessibilitySelectedText<R = void, P0 = cocoa.NSString>(_v: P0): R;
    accessibilitySelectedTextRange<R = cocoa._NSRange>(): R;
    setAccessibilitySelectedTextRange<R = void, P0 = cocoa._NSRange>(_v: P0): R;
    accessibilitySelectedTextRanges<R = cocoa.NSArray>(): R;
    setAccessibilitySelectedTextRanges<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityServesAsTitleForUIElements<R = cocoa.NSArray>(): R;
    setAccessibilityServesAsTitleForUIElements<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilitySharedCharacterRange<R = cocoa._NSRange>(): R;
    setAccessibilitySharedCharacterRange<R = void, P0 = cocoa._NSRange>(_v: P0): R;
    accessibilitySharedFocusElements<R = cocoa.NSArray>(): R;
    setAccessibilitySharedFocusElements<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilitySharedTextUIElements<R = cocoa.NSArray>(): R;
    setAccessibilitySharedTextUIElements<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityShownMenu<R = unknown>(): R;
    setAccessibilityShownMenu<R = void, P0 = unknown>(_v: P0): R;
    accessibilitySortDirection<R = number>(): R;
    setAccessibilitySortDirection<R = void, P0 = number>(_v: P0): R;
    accessibilitySplitters<R = cocoa.NSArray>(): R;
    setAccessibilitySplitters<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilitySubrole<R = cocoa.NSString>(): R;
    setAccessibilitySubrole<R = void, P0 = cocoa.NSString>(_v: P0): R;
    accessibilityTabs<R = cocoa.NSArray>(): R;
    setAccessibilityTabs<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityTitle<R = cocoa.NSString>(): R;
    setAccessibilityTitle<R = void, P0 = cocoa.NSString>(_v: P0): R;
    accessibilityTitleUIElement<R = unknown>(): R;
    setAccessibilityTitleUIElement<R = void, P0 = unknown>(_v: P0): R;
    accessibilityToolbarButton<R = unknown>(): R;
    setAccessibilityToolbarButton<R = void, P0 = unknown>(_v: P0): R;
    accessibilityTopLevelUIElement<R = unknown>(): R;
    setAccessibilityTopLevelUIElement<R = void, P0 = unknown>(_v: P0): R;
    accessibilityURL<R = cocoa.NSURL>(): R;
    setAccessibilityURL<R = void, P0 = cocoa.NSURL>(_v: P0): R;
    accessibilityUnitDescription<R = cocoa.NSString>(): R;
    setAccessibilityUnitDescription<R = void, P0 = cocoa.NSString>(_v: P0): R;
    accessibilityUnits<R = number>(): R;
    setAccessibilityUnits<R = void, P0 = number>(_v: P0): R;
    accessibilityValue<R = unknown>(): R;
    setAccessibilityValue<R = void, P0 = unknown>(_v: P0): R;
    accessibilityValueDescription<R = cocoa.NSString>(): R;
    setAccessibilityValueDescription<R = void, P0 = cocoa.NSString>(_v: P0): R;
    accessibilityVerticalScrollBar<R = unknown>(): R;
    setAccessibilityVerticalScrollBar<R = void, P0 = unknown>(_v: P0): R;
    accessibilityVerticalUnitDescription<R = cocoa.NSString>(): R;
    setAccessibilityVerticalUnitDescription<R = void, P0 = cocoa.NSString>(_v: P0): R;
    accessibilityVerticalUnits<R = number>(): R;
    setAccessibilityVerticalUnits<R = void, P0 = number>(_v: P0): R;
    accessibilityVisibleCells<R = cocoa.NSArray>(): R;
    setAccessibilityVisibleCells<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityVisibleCharacterRange<R = cocoa._NSRange>(): R;
    setAccessibilityVisibleCharacterRange<R = void, P0 = cocoa._NSRange>(_v: P0): R;
    accessibilityVisibleChildren<R = cocoa.NSArray>(): R;
    setAccessibilityVisibleChildren<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityVisibleColumns<R = cocoa.NSArray>(): R;
    setAccessibilityVisibleColumns<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityVisibleRows<R = cocoa.NSArray>(): R;
    setAccessibilityVisibleRows<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityWarningValue<R = unknown>(): R;
    setAccessibilityWarningValue<R = void, P0 = unknown>(_v: P0): R;
    accessibilityWindow<R = unknown>(): R;
    setAccessibilityWindow<R = void, P0 = unknown>(_v: P0): R;
    accessibilityWindows<R = cocoa.NSArray>(): R;
    setAccessibilityWindows<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    accessibilityZoomButton<R = unknown>(): R;
    setAccessibilityZoomButton<R = void, P0 = unknown>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSPopover<T = any> extends cocoa.classes.NSResponder, cocoa.classes._NSTransientUIElementProtocol, cocoa.classes.NSAppearanceCustomizationProtocol, cocoa.classes.NSAccessibilityElementProtocol, cocoa.classes.NSAccessibilityProtocol {
      alloc<R = NSPopover>(): R;
      new: <R = NSPopover>() => R;
    }
  }
}

declare const NSPopover: cocoa.classes.NSPopover;
