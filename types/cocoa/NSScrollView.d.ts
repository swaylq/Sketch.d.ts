/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrollView<T = any> extends cocoa.NSView, cocoa.NSScrollerImpPairDelegateProtocol, cocoa.NSGestureRecognizerDelegateProtocol, cocoa.NSTextFinderBarContainerProtocol {
    _forcesContentInsetsLayout<R = boolean>(): R;
    _setForcesContentInsetsLayout<R = void, P0 = boolean>(__setForcesContentInsetsLayout: P0): R;
    setMagnification_centeredAtPoint<R = void, P0 = number, P1 = cocoa.CGPoint>(_setMagnification: P0, _centeredAtPoint: P1): R;
    magnifyToFitRect<R = void, P0 = cocoa.CGRect>(_magnifyToFitRect: P0): R;
    _magnifyToFitRect_animate<R = void, P0 = cocoa.CGRect, P1 = boolean>(__magnifyToFitRect: P0, _animate: P1): R;
    _smartMagnifyToRect_centeredAt_animate<R = void, P0 = cocoa.CGRect, P1 = cocoa.CGPoint, P2 = boolean>(__smartMagnifyToRect: P0, _centeredAt: P1, _animate: P2): R;
    _setMagnification_centeredAroundPoint_animate<R = void, P0 = number, P1 = cocoa.CGPoint, P2 = boolean>(__setMagnification: P0, _centeredAroundPoint: P1, _animate: P2): R;
    _setMagnification<R = void, P0 = number>(__setMagnification: P0): R;
    _magnification<R = number>(): R;
    findBarPosition<R = number>(): R;
    setFindBarPosition<R = void, P0 = number>(_setFindBarPosition: P0): R;
    _destinationFloatValueForScroller<R = number, P0 = unknown>(__destinationFloatValueForScroller: P0): R;
    _contentView<R = unknown>(): R;
    _conditionallyReflectScrolledClipView<R = void>(): R;
    reflectScrolledClipView<R = void, P0 = unknown>(_reflectScrolledClipView: P0): R;
    scrollClipView_toPoint<R = void, P0 = unknown, P1 = cocoa.CGPoint>(_scrollClipView: P0, _toPoint: P1): R;
    tile<R = void>(): R;
    _tileWithoutRecursing<R = void>(): R;
    _setVerticalScrollerHidden<R = void, P0 = boolean>(__setVerticalScrollerHidden: P0): R;
    _setHorizontalScrollerHidden<R = void, P0 = boolean>(__setHorizontalScrollerHidden: P0): R;
    _cornerViewHidesWithVerticalScroller<R = boolean>(): R;
    _updateForLiveResizeWithOldSize<R = void, P0 = cocoa.CGSize>(__updateForLiveResizeWithOldSize: P0): R;
    preservesContentDuringLiveResize<R = boolean>(): R;
    _dynamicColorsChanged<R = void, P0 = unknown>(__dynamicColorsChanged: P0): R;
    _updateWithDisplay<R = void>(): R;
    _update<R = void>(): R;
    acceptsFirstResponder<R = boolean>(): R;
    needsPanelToBecomeKey<R = boolean>(): R;
    pageDown<R = void, P0 = unknown>(_pageDown: P0): R;
    pageUp<R = void, P0 = unknown>(_pageUp: P0): R;
    _scrollPageInDirection<R = void, P0 = number>(__scrollPageInDirection: P0): R;
    _doScroller<R = void, P0 = unknown>(__doScroller: P0): R;
    _endMagnifyGesture<R = void>(): R;
    _magnificationInflectionPoints<R = unknown>(): R;
    _beginMagnifyGesture<R = void>(): R;
    _endMagnifying<R = void>(): R;
    _beginMagnifying<R = void>(): R;
    _panWithGestureRecognizer<R = void, P0 = unknown>(__panWithGestureRecognizer: P0): R;
    _gestureRecognizerFailed<R = void, P0 = unknown>(__gestureRecognizerFailed: P0): R;
    _gestureRecognizer_shouldReceiveTouch<R = boolean, P0 = unknown, P1 = unknown>(__gestureRecognizer: P0, _shouldReceiveTouch: P1): R;
    _gestureRecognizer_shouldAttemptToRecognizeWithEvent<R = boolean, P0 = unknown, P1 = unknown>(__gestureRecognizer: P0, _shouldAttemptToRecognizeWithEvent: P1): R;
    setLayer<R = void, P0 = unknown>(_setLayer: P0): R;
    _endScrollGesture<R = void>(): R;
    _beginScrollGesture<R = void>(): R;
    _informDelegateUserDidLiveScroll<R = void>(): R;
    _informDelegateDidEndLiveScroll<R = void>(): R;
    _informDelegateWillStartLiveScroll<R = void>(): R;
    _informDelegateOfNewScrollGesture<R = void>(): R;
    _isInScrollGesture<R = boolean>(): R;
    _canOptInToConcurrentScrolling<R = boolean>(): R;
    _allowsHorizontalStretching<R = boolean>(): R;
    _allowsVerticalStretching<R = boolean>(): R;
    _setHasScrollOccurredOutsideOfGesture<R = void, P0 = boolean>(__setHasScrollOccurredOutsideOfGesture: P0): R;
    _hasScrollOccurredOutsideOfGesture<R = boolean>(): R;
    _snapRubberBandDueToNotification<R = void, P0 = unknown>(__snapRubberBandDueToNotification: P0): R;
    _stretchAmount<R = cocoa.CGSize>(): R;
    _pinnedInDirectionOfScroll<R = boolean, P0 = unknown>(__pinnedInDirectionOfScroll: P0): R;
    _pinnedInDirectionX_y<R = boolean, P0 = number, P1 = number>(__pinnedInDirectionX: P0, _y: P1): R;
    _doScroller_hitPart_multiplier<R = void, P0 = unknown, P1 = number, P2 = number>(__doScroller: P0, _hitPart: P1, _multiplier: P2): R;
    _repeatMultiplier<R = number, P0 = number>(__repeatMultiplier: P0): R;
    _commonNewScroll<R = void, P0 = unknown>(__commonNewScroll: P0): R;
    _setScrollerNeedsDisplay<R = void, P0 = unknown>(__setScrollerNeedsDisplay: P0): R;
    _rulerline_last<R = unknown, P0 = number, P1 = boolean>(__rulerline: P0, _last: P1): R;
    _updateRulerlineForRuler_oldPosition_newPosition_vertical<R = void, P0 = unknown, P1 = number, P2 = number, P3 = boolean>(__updateRulerlineForRuler: P0, _oldPosition: P1, _newPosition: P2, _vertical: P3): R;
    _updateMoreContentIndicatorVisibility<R = void>(): R;
    _newScroll<R = void, P0 = boolean>(__newScroll: P0): R;
    _dirtyFocusRingOrMask<R = void>(): R;
    _drawOldSchoolFocusRingIfNecessaryInRect<R = void, P0 = cocoa.CGRect>(__drawOldSchoolFocusRingIfNecessaryInRect: P0): R;
    _insetBounds<R = cocoa.CGRect>(): R;
    _shouldUseFocusRingMask<R = boolean>(): R;
    _layoutLayerPiecesIfNeeded<R = void>(): R;
    _updateCornerViewForLayer<R = void>(): R;
    _drawCornerViewInRect<R = void, P0 = cocoa.CGRect>(__drawCornerViewInRect: P0): R;
    _removeCornerViewForLayer<R = void>(): R;
    _setCornerViewForLayer<R = void, P0 = unknown>(__setCornerViewForLayer: P0): R;
    _cornerViewForLayer<R = unknown>(): R;
    _needsCornerViewDrawn<R = boolean>(): R;
    _tileIfNeeded<R = void>(): R;
    setCopiesOnScroll<R = void, P0 = boolean>(_setCopiesOnScroll: P0): R;
    _sortSubviews<R = void>(): R;
    _fixHeaderAndCornerViews<R = boolean>(): R;
    _documentViewWantsHeaderView<R = boolean>(): R;
    isFlipped<R = boolean>(): R;
    isOpaque<R = boolean>(): R;
    _cornerViewFrame<R = cocoa.CGRect>(): R;
    _cornerView<R = unknown>(): R;
    _applyContentAreaLayout<R = void, P0 = unknown>(__applyContentAreaLayout: P0): R;
    _allocContentAreaLayout<R = unknown>(): R;
    _setContentViewFrame<R = void, P0 = cocoa.CGRect>(__setContentViewFrame: P0): R;
    _verticalScrollerWidthWithBorder<R = number>(): R;
    _horizontalScrollerHeightWithBorder<R = number>(): R;
    _verticalScrollerWidth<R = number>(): R;
    _horizontalScrollerHeight<R = number>(): R;
    _removeUnderTitlebarNotifications<R = void>(): R;
    _updateStateOfUnderTitlebarView<R = void>(): R;
    _clearUnderTitlebarView<R = void, P0 = unknown>(__clearUnderTitlebarView: P0): R;
    _makeUnderTitlebarView<R = unknown>(): R;
    _setUnderTitlebarView<R = void, P0 = unknown>(__setUnderTitlebarView: P0): R;
    _canAddUnderTitlebarView<R = boolean>(): R;
    _underTitlebarView<R = unknown>(): R;
    _addUnderTitlebarNotifications<R = void>(): R;
    _unregisterForWindowWillClose<R = void>(): R;
    _registerForWindowWillClose<R = void>(): R;
    _floatingSubviewCountChanged<R = void>(): R;
    _floatingSubviewsContainerForAxis<R = unknown, P0 = number>(__floatingSubviewsContainerForAxis: P0): R;
    addFloatingSubview_forAxis<R = void, P0 = unknown, P1 = number>(_addFloatingSubview: P0, _forAxis: P1): R;
    instantiateWithObjectInstantiator<R = void, P0 = unknown>(_instantiateWithObjectInstantiator: P0): R;
    _shouldUseInclusiveLayersAutomatically<R = boolean>(): R;
    _hasNonLayeredOverlappingSiblingView<R = boolean>(): R;
    _willCoverBackingStore<R = boolean>(): R;
    _isConcurrentScrollingCompatible<R = boolean>(): R;
    _messageTraceFutureResponsiveScrollingOptInOut<R = void>(): R;
    _documentViewSubclassesLockFocus<R = boolean>(): R;
    _ensureOveralyScrollerFlashForWindowOrderIn<R = void, P0 = unknown>(__ensureOveralyScrollerFlashForWindowOrderIn: P0): R;
    _resetOveralyScrollerFlashForWindowOrderOut<R = void, P0 = unknown>(__resetOveralyScrollerFlashForWindowOrderOut: P0): R;
    _pointInVisibleScroller<R = unknown, P0 = cocoa.CGPoint>(__pointInVisibleScroller: P0): R;
    _invalidateOverlayScrollerDebrisForScrollCopyOfClipView_byDeltas<R = void, P0 = unknown, P1 = cocoa.CGPoint>(__invalidateOverlayScrollerDebrisForScrollCopyOfClipView: P0, _byDeltas: P1): R;
    _contentFrameMinusScrollers<R = cocoa.CGRect>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    _alwaysWantsContentInsetsLayout<R = boolean>(): R;
    _updateContentInsetsIfAutomatic<R = void>(): R;
    _updateAutomaticContentInsets<R = void>(): R;
    _scrollerDidEndTracking<R = void, P0 = unknown>(__scrollerDidEndTracking: P0): R;
    _scrollerDidBeginTracking<R = void, P0 = unknown>(__scrollerDidBeginTracking: P0): R;
    flashScrollers<R = void>(): R;
    _pulseOverlayScrollers<R = void>(): R;
    _overlayScroller_didBecomeShown<R = void, P0 = unknown, P1 = boolean>(__overlayScroller: P0, _didBecomeShown: P1): R;
    _overlayScrollersShown<R = boolean>(): R;
    _usesOverlayScrollers<R = boolean>(): R;
    _accessibilityAdditionalChildren<R = unknown>(): R;
    accessibilityScrollToShowDescendantAttributeForParameter<R = unknown, P0 = unknown>(_accessibilityScrollToShowDescendantAttributeForParameter: P0): R;
    accessibilityIsContentsAttributeSettable<R = boolean>(): R;
    accessibilityContentsAttribute<R = unknown>(): R;
    accessibilityIsVerticalScrollBarAttributeSettable<R = boolean>(): R;
    accessibilityVerticalScrollBarAttribute<R = unknown>(): R;
    accessibilityIsHorizontalScrollBarAttributeSettable<R = boolean>(): R;
    accessibilityHorizontalScrollBarAttribute<R = unknown>(): R;
    accessibilityParameterizedAttributeNames<R = unknown>(): R;
    rulerStateDescription<R = unknown>(): R;
    _reflectDocumentViewBoundsChange<R = void>(): R;
    _isStuntedForIB<R = boolean>(): R;
    _setStuntedForIB<R = void, P0 = boolean>(__setStuntedForIB: P0): R;
    setDelegate<R = void, P0 = unknown>(_setDelegate: P0): R;
    delegate<R = unknown>(): R;
    _synchronizedSiblingsForAxis<R = unknown, P0 = number>(__synchronizedSiblingsForAxis: P0): R;
    _synchronizedSiblingForAxis<R = unknown, P0 = number>(__synchronizedSiblingForAxis: P0): R;
    _setSynchronizedSibling_forAxis<R = void, P0 = unknown, P1 = number>(__setSynchronizedSibling: P0, _forAxis: P1): R;
    _wantsPageAlignedVerticalAxis<R = boolean>(): R;
    _setWantsPageAlignedVerticalAxis<R = void, P0 = boolean>(__setWantsPageAlignedVerticalAxis: P0): R;
    _wantsPageAlignedHorizontalAxis<R = boolean>(): R;
    _setWantsPageAlignedHorizontalAxis<R = void, P0 = boolean>(__setWantsPageAlignedHorizontalAxis: P0): R;
    _scrollingModeForAxis<R = number, P0 = number>(__scrollingModeForAxis: P0): R;
    _setScrollingMode_forAxis<R = void, P0 = number, P1 = number>(__setScrollingMode: P0, _forAxis: P1): R;
    _setIngoreSynchronizedSiblings<R = void, P0 = boolean>(__setIngoreSynchronizedSiblings: P0): R;
    _overlayScrollerStateIsLocked<R = boolean>(): R;
    _unlockOverlayScrollerState<R = void>(): R;
    _lockOverlayScrollerState<R = void, P0 = number>(__lockOverlayScrollerState: P0): R;
    _hideOverlayScrollers<R = void>(): R;
    _boundsInsetForBorder<R = cocoa.CGRect>(): R;
    setAutoforwardsScrollWheelEvents<R = void, P0 = boolean>(_setAutoforwardsScrollWheelEvents: P0): R;
    autoforwardsScrollWheelEvents<R = boolean>(): R;
    scrollerImpPair<R = unknown>(): R;
    setDrawsContentShadow<R = void, P0 = boolean>(_setDrawsContentShadow: P0): R;
    drawsContentShadow<R = boolean>(): R;
    _unregisterNonInterferingAccessoryView<R = void, P0 = unknown>(__unregisterNonInterferingAccessoryView: P0): R;
    _registerNonInterferingAccessoryView<R = void, P0 = unknown>(__registerNonInterferingAccessoryView: P0): R;
    _accessoryViewMightInterfereWithOverlayScrollers<R = boolean, P0 = unknown>(__accessoryViewMightInterfereWithOverlayScrollers: P0): R;
    _resetScrollingBehavior<R = void>(): R;
    removeFloatingHeaderView<R = void, P0 = unknown>(_removeFloatingHeaderView: P0): R;
    addFloatingHeaderView_forAxis<R = void, P0 = unknown, P1 = number>(_addFloatingHeaderView: P0, _forAxis: P1): R;
    _pageAlignmentsForAxis<R = unknown, P0 = number>(__pageAlignmentsForAxis: P0): R;
    _setPageAlignments_forAxis<R = void, P0 = unknown, P1 = number>(__setPageAlignments: P0, _forAxis: P1): R;
    _automatedLiveScrollingDidEnd<R = void>(): R;
    _automatedLiveScrollingWillBegin<R = void>(): R;
    _automateLiveScroll<R = void>(): R;
    scrollerInsets<R = cocoa.NSEdgeInsets>(): R;
    setScrollerInsets<R = void, P0 = cocoa.NSEdgeInsets>(_v: P0): R;
    automaticallyAdjustsContentInsets<R = boolean>(): R;
    setAutomaticallyAdjustsContentInsets<R = void, P0 = boolean>(_v: P0): R;
    contentInsets<R = cocoa.NSEdgeInsets>(): R;
    setContentInsets<R = void, P0 = cocoa.NSEdgeInsets>(_v: P0): R;
    minMagnification<R = number>(): R;
    setMinMagnification<R = void, P0 = number>(_v: P0): R;
    maxMagnification<R = number>(): R;
    setMaxMagnification<R = void, P0 = number>(_v: P0): R;
    magnification<R = number>(): R;
    setMagnification<R = void, P0 = number>(_v: P0): R;
    allowsMagnification<R = boolean>(): R;
    setAllowsMagnification<R = void, P0 = boolean>(_v: P0): R;
    findBarVisible<R = boolean>(): R;
    setFindBarVisible<R = void, P0 = boolean>(_v: P0): R;
    findBarView<R = cocoa.NSView>(): R;
    setFindBarView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    _headerClipView<R = cocoa.NSClipView>(): R;
    usesPredominantAxisScrolling<R = boolean>(): R;
    setUsesPredominantAxisScrolling<R = void, P0 = boolean>(_v: P0): R;
    verticalScrollElasticity<R = number>(): R;
    setVerticalScrollElasticity<R = void, P0 = number>(_v: P0): R;
    horizontalScrollElasticity<R = number>(): R;
    setHorizontalScrollElasticity<R = void, P0 = number>(_v: P0): R;
    pageScroll<R = number>(): R;
    setPageScroll<R = void, P0 = number>(_v: P0): R;
    verticalPageScroll<R = number>(): R;
    setVerticalPageScroll<R = void, P0 = number>(_v: P0): R;
    horizontalPageScroll<R = number>(): R;
    setHorizontalPageScroll<R = void, P0 = number>(_v: P0): R;
    lineScroll<R = number>(): R;
    setLineScroll<R = void, P0 = number>(_v: P0): R;
    verticalLineScroll<R = number>(): R;
    setVerticalLineScroll<R = void, P0 = number>(_v: P0): R;
    horizontalLineScroll<R = number>(): R;
    setHorizontalLineScroll<R = void, P0 = number>(_v: P0): R;
    autohidesScrollers<R = boolean>(): R;
    setAutohidesScrollers<R = void, P0 = boolean>(_v: P0): R;
    horizontalScroller<R = cocoa.NSScroller>(): R;
    setHorizontalScroller<R = void, P0 = cocoa.NSScroller>(_v: P0): R;
    verticalScroller<R = cocoa.NSScroller>(): R;
    setVerticalScroller<R = void, P0 = cocoa.NSScroller>(_v: P0): R;
    hasHorizontalScroller<R = boolean>(): R;
    setHasHorizontalScroller<R = void, P0 = boolean>(_v: P0): R;
    hasVerticalScroller<R = boolean>(): R;
    setHasVerticalScroller<R = void, P0 = boolean>(_v: P0): R;
    backgroundColor<R = cocoa.NSColor>(): R;
    setBackgroundColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    borderType<R = number>(): R;
    setBorderType<R = void, P0 = number>(_v: P0): R;
    drawsBackground<R = boolean>(): R;
    setDrawsBackground<R = void, P0 = boolean>(_v: P0): R;
    scrollsDynamically<R = boolean>(): R;
    setScrollsDynamically<R = void, P0 = boolean>(_v: P0): R;
    contentSize<R = cocoa.CGSize>(): R;
    documentCursor<R = cocoa.NSCursor>(): R;
    setDocumentCursor<R = void, P0 = cocoa.NSCursor>(_v: P0): R;
    documentVisibleRect<R = cocoa.CGRect>(): R;
    contentView<R = cocoa.NSClipView>(): R;
    setContentView<R = void, P0 = cocoa.NSClipView>(_v: P0): R;
    documentView<R = cocoa.NSView>(): R;
    setDocumentView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    scrollerKnobStyle<R = number>(): R;
    setScrollerKnobStyle<R = void, P0 = number>(_v: P0): R;
    scrollerStyle<R = number>(): R;
    setScrollerStyle<R = void, P0 = number>(_v: P0): R;
    verticalRulerView<R = cocoa.NSRulerView>(): R;
    setVerticalRulerView<R = void, P0 = cocoa.NSRulerView>(_v: P0): R;
    horizontalRulerView<R = cocoa.NSRulerView>(): R;
    setHorizontalRulerView<R = void, P0 = cocoa.NSRulerView>(_v: P0): R;
    hasVerticalRuler<R = boolean>(): R;
    setHasVerticalRuler<R = void, P0 = boolean>(_v: P0): R;
    hasHorizontalRuler<R = boolean>(): R;
    setHasHorizontalRuler<R = void, P0 = boolean>(_v: P0): R;
    rulersVisible<R = boolean>(): R;
    setRulersVisible<R = void, P0 = boolean>(_v: P0): R;
    automaticallyAdjustsContentViewInsets<R = boolean>(): R;
    setAutomaticallyAdjustsContentViewInsets<R = void, P0 = boolean>(_v: P0): R;
    contentInset<R = cocoa.NSEdgeInsets>(): R;
    setContentInset<R = void, P0 = cocoa.NSEdgeInsets>(_v: P0): R;
    verticalScrollDecelerationFactor<R = number>(): R;
    setVerticalScrollDecelerationFactor<R = void, P0 = number>(_v: P0): R;
    horizontalScrollDecelerationFactor<R = number>(): R;
    setHorizontalScrollDecelerationFactor<R = void, P0 = number>(_v: P0): R;
    decelerationRate<R = number>(): R;
    setDecelerationRate<R = void, P0 = number>(_v: P0): R;
    _lineBorderColor<R = cocoa.NSColor>(): R;
    set_lineBorderColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    hasHorizontalMoreContentIndicators<R = boolean>(): R;
    setHasHorizontalMoreContentIndicators<R = void, P0 = boolean>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSScrollView<T = any> extends cocoa.classes.NSView, cocoa.classes.NSScrollerImpPairDelegateProtocol, cocoa.classes.NSGestureRecognizerDelegateProtocol, cocoa.classes.NSTextFinderBarContainerProtocol {
      alloc<R = NSScrollView>(): R;
      new: <R = NSScrollView>() => R;
      _drawCornerWidgetInRect_withSmallSize<R = void, P0 = cocoa.CGRect, P1 = boolean>(__drawCornerWidgetInRect: P0, _withSmallSize: P1): R;
      automaticallyNotifiesObserversOfDocumentView<R = boolean>(): R;
      keyPathsForValuesAffectingDocumentView<R = unknown>(): R;
      contentSizeForFrameSize_hasHorizontalScroller_hasVerticalScroller_borderType<R = cocoa.CGSize, P0 = cocoa.CGSize, P1 = boolean, P2 = boolean, P3 = number>(_contentSizeForFrameSize: P0, _hasHorizontalScroller: P1, _hasVerticalScroller: P2, _borderType: P3): R;
      frameSizeForContentSize_hasHorizontalScroller_hasVerticalScroller_borderType<R = cocoa.CGSize, P0 = cocoa.CGSize, P1 = boolean, P2 = boolean, P3 = number>(_frameSizeForContentSize: P0, _hasHorizontalScroller: P1, _hasVerticalScroller: P2, _borderType: P3): R;
      contentSizeForFrameSize_horizontalScrollerClass_verticalScrollerClass_borderType_controlSize_scrollerStyle<R = cocoa.CGSize, P0 = cocoa.CGSize, P1 = unknown, P2 = unknown, P3 = number, P4 = number, P5 = number>(_contentSizeForFrameSize: P0, _horizontalScrollerClass: P1, _verticalScrollerClass: P2, _borderType: P3, _controlSize: P4, _scrollerStyle: P5): R;
      frameSizeForContentSize_horizontalScrollerClass_verticalScrollerClass_borderType_controlSize_scrollerStyle<R = cocoa.CGSize, P0 = cocoa.CGSize, P1 = unknown, P2 = unknown, P3 = number, P4 = number, P5 = number>(_frameSizeForContentSize: P0, _horizontalScrollerClass: P1, _verticalScrollerClass: P2, _borderType: P3, _controlSize: P4, _scrollerStyle: P5): R;
      automaticallyNotifiesObserversForKey<R = boolean, P0 = unknown>(_automaticallyNotifiesObserversForKey: P0): R;
      rulerViewClass<R = unknown>(): R;
      setRulerViewClass<R = void, P0 = unknown>(_setRulerViewClass: P0): R;
      _verticalScrollerClass<R = unknown>(): R;
      _horizontalScrollerClass<R = unknown>(): R;
      _setShowsResponsiveScrollingStatus<R = void, P0 = boolean>(__setShowsResponsiveScrollingStatus: P0): R;
      _findScrollViewToAutoLiveScrollInWindow<R = unknown, P0 = unknown>(__findScrollViewToAutoLiveScrollInWindow: P0): R;
    }
  }
}

declare const NSScrollView: cocoa.classes.NSScrollView;
