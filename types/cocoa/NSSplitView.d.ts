/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSplitView<T0 = void, T1 = void, T2 = void> extends NSView, _NSTransientUIElementProtocol {
    _automaticMaximumSizeForArrangedView<R = number, P0 = unknown>(__automaticMaximumSizeForArrangedView: P0): R;
    _uncollapseWithOverlayArrangedView_animated<R = void, P0 = unknown, P1 = boolean>(__uncollapseWithOverlayArrangedView: P0, _animated: P1): R;
    _uncollapseArrangedView_animated<R = void, P0 = unknown, P1 = boolean>(__uncollapseArrangedView: P0, _animated: P1): R;
    _uncollapseArrangedView<R = void, P0 = unknown>(__uncollapseArrangedView: P0): R;
    _collapseArrangedView_animated<R = void, P0 = unknown, P1 = boolean>(__collapseArrangedView: P0, _animated: P1): R;
    _setArrangedView_isCollapsed<R = void, P0 = unknown, P1 = boolean>(__setArrangedView: P0, _isCollapsed: P1): R;
    _isArrangedViewAnimating<R = boolean, P0 = unknown>(__isArrangedViewAnimating: P0): R;
    _resizeViewsForOffset_coordinate<R = CGRect, P0 = number, P1 = number>(__resizeViewsForOffset: P0, _coordinate: P1): R;
    _setSplitViewControllerAllowsPropertyChange<R = void, P0 = boolean>(__setSplitViewControllerAllowsPropertyChange: P0): R;
    _splitViewControllerAllowsPropertyChange<R = boolean>(): R;
    _canMakePropertyChange<R = boolean>(): R;
    _splitViewOwnedBySplitViewController<R = boolean>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    _stopObservingView<R = void, P0 = unknown>(__stopObservingView: P0): R;
    _startObservingView<R = void, P0 = unknown>(__startObservingView: P0): R;
    _stopObservingViews<R = void, P0 = unknown>(__stopObservingViews: P0): R;
    _startObservingViews<R = void, P0 = unknown>(__startObservingViews: P0): R;
    _compatibility_seemsToBeVertical<R = boolean>(): R;
    _constraintsFreezingFrameForView_identifierIndex<R = unknown, P0 = unknown, P1 = number>(__constraintsFreezingFrameForView: P0, _identifierIndex: P1): R;
    _constraintsForPerpendicularAxisForView_identifierIndex_divider<R = unknown, P0 = unknown, P1 = number, P2 = boolean>(__constraintsForPerpendicularAxisForView: P0, _identifierIndex: P1, _divider: P2): R;
    _constraintsForStacking_toView_previousIndex_identifierIndex_spacing_canLiveCollapse_forDivider<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = number, P4 = number, P5 = boolean, P6 = boolean>(__constraintsForStacking: P0, _toView: P1, _previousIndex: P2, _identifierIndex: P3, _spacing: P4, _canLiveCollapse: P5, _forDivider: P6): R;
    _constraintsForTrailingView_identifierIndex_spacing_canLiveCollapse_forOverlay<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = boolean, P4 = boolean>(__constraintsForTrailingView: P0, _identifierIndex: P1, _spacing: P2, _canLiveCollapse: P3, _forOverlay: P4): R;
    _constraintsForLeadingView_identifierIndex_spacing_canLiveCollapse_forOverlay<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = boolean, P4 = boolean>(__constraintsForLeadingView: P0, _identifierIndex: P1, _spacing: P2, _canLiveCollapse: P3, _forOverlay: P4): R;
    _updateConstraintsForProportionalResizing<R = void>(): R;
    _needsUpdateConstraintsForProportionalResizing<R = boolean>(): R;
    _updateSizeConstraints<R = void>(): R;
    _updateStackConstraints<R = void>(): R;
    _removeStackConstraints<R = void>(): R;
    _invalidateStackConstraints<R = void>(): R;
    _invalidateStackAndSizeConstraints<R = void>(): R;
    _invalidateSizeConstraints<R = void>(): R;
    setHoldingPriority_forSubviewAtIndex<R = void, P0 = number, P1 = number>(_setHoldingPriority: P0, _forSubviewAtIndex: P1): R;
    holdingPriorityForSubviewAtIndex<R = number, P0 = number>(_holdingPriorityForSubviewAtIndex: P0): R;
    setStayPutPriority_forSubviewAtIndex<R = void, P0 = number, P1 = number>(_setStayPutPriority: P0, _forSubviewAtIndex: P1): R;
    stayPutPriorityForSubviewAtIndex<R = number, P0 = number>(_stayPutPriorityForSubviewAtIndex: P0): R;
    _usesAlternateDrag<R = boolean>(): R;
    _delegateImplementsAutolayoutIncompatibleMethods<R = boolean>(): R;
    _splitViewUseConstraintBasedLayout<R = boolean>(): R;
    _nsib_splitViewIntegralizesInUserSpace<R = boolean>(): R;
    _nsib_setSplitViewIntegralizesInUserSpace<R = void, P0 = boolean>(__nsib_setSplitViewIntegralizesInUserSpace: P0): R;
    _nsib_splitViewAlwaysLaysOutAccordingToAlignmentRects<R = boolean>(): R;
    _nsib_setSplitViewAlwaysLaysOutAccordingToAlignmentRects<R = void, P0 = boolean>(__nsib_setSplitViewAlwaysLaysOutAccordingToAlignmentRects: P0): R;
    _inDividerLiveResize<R = boolean>(): R;
    _inWindowLiveResize<R = boolean>(): R;
    _updateConstraintsForMinMaxMeasure<R = void>(): R;
    _resetUserPreferredThicknessAfterUserResizeWithDelay<R = void>(): R;
    _cancelResetUserPreferredThicknessAfterUserResizeWithDelay<R = void>(): R;
    _windowDidEndLiveResize<R = void, P0 = unknown>(__windowDidEndLiveResize: P0): R;
    _usesExplicitSizeForAutoCollapse<R = boolean>(): R;
    _setExplicitAutocollapseThicknessDisabled<R = void, P0 = boolean>(__setExplicitAutocollapseThicknessDisabled: P0): R;
    _explicitAutocollapseThicknessDisabled<R = boolean>(): R;
    _setMinimumSizeForInlineSidebars<R = void, P0 = number>(__setMinimumSizeForInlineSidebars: P0): R;
    _minimumSizeForInlineSidebars<R = number>(): R;
    _canAutocollapseArrangedView<R = boolean, P0 = unknown>(__canAutocollapseArrangedView: P0): R;
    _canLiveCollapseArrangedView<R = boolean, P0 = unknown>(__canLiveCollapseArrangedView: P0): R;
    _liveCollapseIsCanned<R = boolean>(): R;
    _canLiveCollapseArrangedViews<R = boolean>(): R;
    _adjustArrangedViewsIfNecessary<R = void>(): R;
    setAutoresizesSubviews<R = void, P0 = boolean>(_setAutoresizesSubviews: P0): R;
    _checkForAutoUncollapsedViews<R = boolean>(): R;
    _checkForEarlyCollapseArrangedViews<R = boolean>(): R;
    _doLayerBackedLayout<R = void>(): R;
    setLayer<R = void, P0 = unknown>(_setLayer: P0): R;
    _makeShadowView<R = unknown>(): R;
    _updateLayerDividersIfNeeded<R = void>(): R;
    _canUseLayersForDividers<R = boolean>(): R;
    _priorityGroups<R = unknown>(): R;
    _validateArrangedViewFrames<R = boolean>(): R;
    preservesContentDuringLiveResize<R = boolean>(): R;
    mouseDownCanMoveWindow<R = boolean>(): R;
    _invalidateCursorRectsAndDragRegion<R = void>(): R;
    _cursorOfDividerAtIndex_position_dragLimits<R = unknown, P0 = number, P1 = number, P2 = unknown>(__cursorOfDividerAtIndex: P0, _position: P1, _dragLimits: P2): R;
    isOpaque<R = boolean>(): R;
    _allSubviewsAreOpaque<R = boolean>(): R;
    isFlipped<R = boolean>(): R;
    _visualIndexOfDividerForLocation_andReturnFrame<R = number, P0 = CGPoint, P1 = CGRect>(__visualIndexOfDividerForLocation: P0, _andReturnFrame: P1): R;
    _indexOfDividerForLocation_andReturnFrame<R = number, P0 = CGPoint, P1 = CGRect>(__indexOfDividerForLocation: P0, _andReturnFrame: P1): R;
    _canCollapseArrangedView<R = boolean, P0 = unknown>(__canCollapseArrangedView: P0): R;
    _additionalEffectiveFrameOfDividerAtIndex<R = CGRect, P0 = number>(__additionalEffectiveFrameOfDividerAtIndex: P0): R;
    _effectiveFrameForDrawnFrame_ofDividerAtIndex<R = CGRect, P0 = CGRect, P1 = number>(__effectiveFrameForDrawnFrame: P0, _ofDividerAtIndex: P1): R;
    _makeDividerLayerWithFrame<R = unknown, P0 = CGRect>(__makeDividerLayerWithFrame: P0): R;
    _updateDividerLayer<R = void, P0 = unknown>(__updateDividerLayer: P0): R;
    _removeDividerLayers<R = void>(): R;
    _setDividerLayers<R = void, P0 = unknown>(__setDividerLayers: P0): R;
    _dividerLayers<R = unknown>(): R;
    _isSubclassThatOverridesDrawingMethods<R = boolean>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    _shouldDrawDivider<R = boolean>(): R;
    _windowWillExitFullScreen<R = void, P0 = unknown>(__windowWillExitFullScreen: P0): R;
    setSubviews<R = void, P0 = unknown>(_setSubviews: P0): R;
    _sortSubviews<R = void>(): R;
    isPaneSplitter<R = boolean>(): R;
    setIsPaneSplitter<R = void, P0 = boolean>(_setIsPaneSplitter: P0): R;
    setPosition_ofDividerAtIndex<R = void, P0 = number, P1 = number>(_setPosition: P0, _ofDividerAtIndex: P1): R;
    positionOfDividerAtIndex<R = number, P0 = number>(_positionOfDividerAtIndex: P0): R;
    _presentDividerDragResult_withParams<R = number, P0 = unknown, P1 = unknown>(__presentDividerDragResult: P0, _withParams: P1): R;
    _doConstraintBasedPresentDividerDragResult_withParams<R = number, P0 = unknown, P1 = unknown>(__doConstraintBasedPresentDividerDragResult: P0, _withParams: P1): R;
    _visualDividerIndexForLogicalIndex<R = number, P0 = number>(__visualDividerIndexForLogicalIndex: P0): R;
    _logicalDividerIndexForVisualIndex<R = number, P0 = number>(__logicalDividerIndexForVisualIndex: P0): R;
    _trailingViewForLogicalSeparatorIndex<R = unknown, P0 = number>(__trailingViewForLogicalSeparatorIndex: P0): R;
    _leadingViewForLogicalSeparatorIndex<R = unknown, P0 = number>(__leadingViewForLogicalSeparatorIndex: P0): R;
    _resultOfDividerDragToLeadingPosition_withParams<R = unknown, P0 = number, P1 = unknown>(__resultOfDividerDragToLeadingPosition: P0, _withParams: P1): R;
    _dragParamsOfDividerAtVisualIndex<R = unknown, P0 = number>(__dragParamsOfDividerAtVisualIndex: P0): R;
    _dividerDraggingAnchor<R = unknown>(): R;
    _constantFromDividerPosition_toAnchorView<R = number, P0 = number, P1 = unknown>(__constantFromDividerPosition: P0, _toAnchorView: P1): R;
    _distanceFromTrailingEdgeOfView_toAnchor<R = number, P0 = unknown, P1 = unknown>(__distanceFromTrailingEdgeOfView: P0, _toAnchor: P1): R;
    _trailingDistanceFromSelf<R = number, P0 = CGRect>(__trailingDistanceFromSelf: P0): R;
    _leadingDistanceFromSelf<R = number, P0 = CGRect>(__leadingDistanceFromSelf: P0): R;
    _dragLimitsOfDividerAtLogicalIndex<R = unknown, P0 = number>(__dragLimitsOfDividerAtLogicalIndex: P0): R;
    _unscaledDividerThickness<R = number>(): R;
    maxPossiblePositionOfDividerAtIndex<R = number, P0 = number>(_maxPossiblePositionOfDividerAtIndex: P0): R;
    minPossiblePositionOfDividerAtIndex<R = number, P0 = number>(_minPossiblePositionOfDividerAtIndex: P0): R;
    isSubviewCollapsed<R = boolean, P0 = unknown>(_isSubviewCollapsed: P0): R;
    adjustSubviews<R = void>(): R;
    _setFrameOrAlignmentRect_ofArrangedView<R = void, P0 = CGRect, P1 = unknown>(__setFrameOrAlignmentRect: P0, _ofArrangedView: P1): R;
    _frameOrAlignmentRectOfArrangedView<R = CGRect, P0 = unknown>(__frameOrAlignmentRectOfArrangedView: P0): R;
    _arrangedViewsOrDividersHaveChangedSinceAdjustment<R = boolean>(): R;
    _setArrangedViewsAreAdjusted<R = void, P0 = boolean>(__setArrangedViewsAreAdjusted: P0): R;
    instantiateWithObjectInstantiator<R = void, P0 = unknown>(_instantiateWithObjectInstantiator: P0): R;
    setUserInterfaceLayoutDirection<R = void, P0 = number>(_setUserInterfaceLayoutDirection: P0): R;
    _effectiveUserInterfaceLayoutDirection<R = number>(): R;
    _shouldMirrorForRTL<R = boolean>(): R;
    _dividerFrames<R = unknown>(): R;
    _scaledDividerThickness<R = number>(): R;
    _shouldAdjustSizeOfArrangedView<R = boolean, P0 = unknown>(__shouldAdjustSizeOfArrangedView: P0): R;
    _hasHidableDividerAtLogicalIndex<R = boolean, P0 = number>(__hasHidableDividerAtLogicalIndex: P0): R;
    _dividerIsHiddenAtLogicalIndex<R = boolean, P0 = number>(__dividerIsHiddenAtLogicalIndex: P0): R;
    setDividerColor<R = void, P0 = unknown>(_setDividerColor: P0): R;
    drawDividerInRect<R = void, P0 = CGRect>(_drawDividerInRect: P0): R;
    _drawDividerDimpleInRect_indicatorOnly<R = void, P0 = CGRect, P1 = boolean>(__drawDividerDimpleInRect: P0, _indicatorOnly: P1): R;
    _currentStateKey<R = __CFString>(): R;
    _currentVerticalKey<R = __CFString>(): R;
    _currentDividerDimpleVariant<R = __CFString>(): R;
    _isInTexturedWindow<R = boolean>(): R;
    orientation<R = number>(): R;
    _initVariables<R = void>(): R;
    _didRemoveArrangedSubview<R = void, P0 = unknown>(__didRemoveArrangedSubview: P0): R;
    _willRemoveArrangedSubview<R = void, P0 = unknown>(__willRemoveArrangedSubview: P0): R;
    _didAddArrangedSubview<R = void, P0 = unknown>(__didAddArrangedSubview: P0): R;
    _willAddArrangedSubview<R = void, P0 = unknown>(__willAddArrangedSubview: P0): R;
    insertArrangedSubview_atIndex<R = void, P0 = unknown, P1 = number>(_insertArrangedSubview: P0, _atIndex: P1): R;
    removeArrangedSubview<R = void, P0 = unknown>(_removeArrangedSubview: P0): R;
    addArrangedSubview<R = void, P0 = unknown>(_addArrangedSubview: P0): R;
    isArrangedViewCollapsed<R = boolean, P0 = unknown>(_isArrangedViewCollapsed: P0): R;
    _isArrangedViewOverlaid<R = boolean, P0 = unknown>(__isArrangedViewOverlaid: P0): R;
    _didRemoveOverlay<R = void, P0 = unknown>(__didRemoveOverlay: P0): R;
    _willAddOverlayView<R = void, P0 = unknown>(__willAddOverlayView: P0): R;
    _overlayArrangedView<R = void, P0 = unknown>(__overlayArrangedView: P0): R;
    _uncollapseAndOverlayArrangedView<R = void, P0 = unknown>(__uncollapseAndOverlayArrangedView: P0): R;
    _fakeCollapse_arrangedView_canOverlay_withHandler<R = void, P0 = boolean, P1 = unknown, P2 = boolean, P3 = CDUnknownBlockType>(__fakeCollapse: P0, _arrangedView: P1, _canOverlay: P2, _withHandler: P3): R;
    _uncollapseArrangedView_overlayIfNecessary<R = boolean, P0 = unknown, P1 = boolean>(__uncollapseArrangedView: P0, _overlayIfNecessary: P1): R;
    _testingForOverlays<R = boolean>(): R;
    _setInTransientSpringLoad<R = void, P0 = boolean>(__setInTransientSpringLoad: P0): R;
    _inTransientSpringLoad<R = boolean>(): R;
    _updateDividerViews<R = void>(): R;
    _appearanceForDividerAtIndex<R = unknown, P0 = number>(__appearanceForDividerAtIndex: P0): R;
    _blendingModeForDividerAtIndex<R = number, P0 = number>(__blendingModeForDividerAtIndex: P0): R;
    _dividerShouldBeVibrantAtIndex<R = boolean, P0 = number>(__dividerShouldBeVibrantAtIndex: P0): R;
    _customThickness<R = unknown>(): R;
    _customDividerColor<R = unknown>(): R;
    _canUseDividerViewsAsSubviews<R = boolean>(): R;
    _scheduleAutosaveArrangedViewLayoutIfNecessary<R = void>(): R;
    _autosaveSubviewLayoutIfNecessary<R = void>(): R;
    _autosaveArrangedViewLayoutIfNecessary<R = void>(): R;
    _arrangedViewLayoutDescriptions<R = unknown>(): R;
    _walkLayoutDescriptionArray_withFrameHandler<R = boolean, P0 = unknown, P1 = CDUnknownBlockType>(__walkLayoutDescriptionArray: P0, _withFrameHandler: P1): R;
    _isArrangedViewAutoCollapsed<R = boolean, P0 = unknown>(__isArrangedViewAutoCollapsed: P0): R;
    _setArrangedView_isAutocollapsed<R = void, P0 = unknown, P1 = boolean>(__setArrangedView: P0, _isAutocollapsed: P1): R;
    _animatedAutoCollapseArrangedView<R = void, P0 = unknown>(__animatedAutoCollapseArrangedView: P0): R;
    _autoCollapseArrangedView<R = void, P0 = unknown>(__autoCollapseArrangedView: P0): R;
    _autoCollapseArrangedView_animated<R = void, P0 = unknown, P1 = boolean>(__autoCollapseArrangedView: P0, _animated: P1): R;
    debugReasonForLayoutMode<R = unknown>(): R;
    _debugDividerType<R = unknown>(): R;
    _debugLayoutType<R = unknown>(): R;
    _resetUserPreferredThicknessFromSetAlignmentFrameForAllArrangedSubviews<R = void>(): R;
    _removeUserPreferredThicknessForArrangedSubview<R = void, P0 = unknown>(__removeUserPreferredThicknessForArrangedSubview: P0): R;
    _resetUserPreferredThicknessFromLayoutAlignmentFrameForArrangedSubview<R = void, P0 = unknown>(__resetUserPreferredThicknessFromLayoutAlignmentFrameForArrangedSubview: P0): R;
    _resetUserPreferredThicknessFromSetAlignmentFrameForArrangedSubview<R = void, P0 = unknown>(__resetUserPreferredThicknessFromSetAlignmentFrameForArrangedSubview: P0): R;
    _setUserPreferredThickness_forArrangedSubview<R = void, P0 = number, P1 = unknown>(__setUserPreferredThickness: P0, _forArrangedSubview: P1): R;
    _userPreferredThicknessForArrangedSubview<R = number, P0 = unknown>(__userPreferredThicknessForArrangedSubview: P0): R;
    _accessibilitySplitterRects<R = unknown>(): R;
    accessibilitySizeOfChild<R = unknown, P0 = unknown>(_accessibilitySizeOfChild: P0): R;
    accessibilityPositionOfChild<R = unknown, P0 = unknown>(_accessibilityPositionOfChild: P0): R;
    accessibilityIsChildFocusable<R = boolean, P0 = unknown>(_accessibilityIsChildFocusable: P0): R;
    accessibilityHelpStringForChild<R = unknown, P0 = unknown>(_accessibilityHelpStringForChild: P0): R;
    accessibilityResetChildrenAttribute<R = void>(): R;
    _accessibilitySplitterAtIndex<R = unknown, P0 = number>(__accessibilitySplitterAtIndex: P0): R;
    accessibilityIsSplittersAttributeSettable<R = boolean>(): R;
    accessibilitySplittersAttribute<R = unknown>(): R;
    dividerThickness<R = number>(): R;
    dividerColor<R = NSColor>(): R;
    delegate<R = NSSplitViewDelegate>(): R;
    setDelegate<R = void, P0 = NSSplitViewDelegate>(_v: P0): R;
    autosaveName<R = NSString>(): R;
    setAutosaveName<R = void, P0 = NSString>(_v: P0): R;
    dividerStyle<R = number>(): R;
    setDividerStyle<R = void, P0 = number>(_v: P0): R;
    vertical<R = boolean>(): R;
    setVertical<R = void, P0 = boolean>(_v: P0): R;
    arrangedSubviews<R = NSArray>(): R;
    arrangesAllSubviews<R = boolean>(): R;
    setArrangesAllSubviews<R = void, P0 = boolean>(_v: P0): R;
    _canOverlayArrangedViews<R = boolean>(): R;
    springLoaded<R = boolean>(): R;
    setSpringLoaded<R = void, P0 = boolean>(_v: P0): R;
    _animatesAutocollapses<R = boolean>(): R;
    set_animatesAutocollapses<R = void, P0 = boolean>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    _transientBehavior<R = number>(): R;
    _registeredTransientBehavior<R = number>(): R;
    set_registeredTransientBehavior<R = void, P0 = number>(_v: P0): R;
    description<R = NSString>(): R;
    detached<R = boolean>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSSplitView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView, _NSTransientUIElementProtocol {
      alloc<R = NSSplitView>(): R;
      new: <R = NSSplitView>() => R;
      _autosaveDefaultsKeyForName<R = unknown, P0 = unknown>(__autosaveDefaultsKeyForName: P0): R;
    }
  }
}

declare const NSSplitView: cocoa.NSSplitView.CLASS;