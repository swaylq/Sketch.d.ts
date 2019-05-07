/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentRevisionsView<T0 = void, T1 = void, T2 = void> extends NSView {
    updateControls<R = void>(): R;
    shouldUnfocusWindowWithMouseDownAtWindowPoint<R = boolean, P0 = CGPoint>(_shouldUnfocusWindowWithMouseDownAtWindowPoint: P0): R;
    _controlsEnabled<R = boolean>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    _handleInsertionOfStackItems_atIndexes<R = void, P0 = unknown, P1 = unknown>(__handleInsertionOfStackItems: P0, _atIndexes: P1): R;
    _handleRemovalOfStackItemsAtIndexes<R = void, P0 = unknown>(__handleRemovalOfStackItemsAtIndexes: P0): R;
    _animationToIndexCompleted<R = void, P0 = number>(__animationToIndexCompleted: P0): R;
    _goToRevisionWithIdentifier<R = void, P0 = unknown>(__goToRevisionWithIdentifier: P0): R;
    goToStackItemAtIndex_thenContinue<R = void, P0 = number, P1 = CDUnknownBlockType>(_goToStackItemAtIndex: P0, _thenContinue: P1): R;
    _goToStackItemAtIndex_continuingPreviousAnimation_thenContinue<R = void, P0 = number, P1 = boolean, P2 = CDUnknownBlockType>(__goToStackItemAtIndex: P0, _continuingPreviousAnimation: P1, _thenContinue: P2): R;
    _perStepAnimationDurationForDistance<R = number, P0 = number>(__perStepAnimationDurationForDistance: P0): R;
    transitionAnimationCompleted<R = void>(): R;
    performTransitionAnimation<R = void>(): R;
    cancelRevertAnimation<R = void>(): R;
    _resetTransitoryState<R = void>(): R;
    prepareForFinishAnimationWithOutcome<R = void, P0 = number>(_prepareForFinishAnimationWithOutcome: P0): R;
    prepareForStartAnimation<R = void>(): R;
    _prepareRevisionLayers<R = void>(): R;
    setFullScreenShot<R = void, P0 = unknown>(_setFullScreenShot: P0): R;
    _setupFullScreenShot<R = void>(): R;
    _commitTransitoryAnimations<R = void>(): R;
    hideTransitoryLayers<R = void>(): R;
    showTransitoryLayers<R = void>(): R;
    _whenRevisionUpdatesAreAllowedDo<R = void, P0 = CDUnknownBlockType>(__whenRevisionUpdatesAreAllowedDo: P0): R;
    _animationDidEnd<R = void>(): R;
    _animationWillStart<R = void>(): R;
    _unfocusedFrameForOriginalDocumentWindow_state<R = CGRect, P0 = boolean, P1 = number>(__unfocusedFrameForOriginalDocumentWindow: P0, _state: P1): R;
    layoutWithOriginalDocumentWindow_originalVisibleFrame<R = void, P0 = unknown, P1 = CGRect>(_layoutWithOriginalDocumentWindow: P0, _originalVisibleFrame: P1): R;
    _animateControlsForWindowFocusState<R = void, P0 = number>(__animateControlsForWindowFocusState: P0): R;
    _layoutUI<R = void>(): R;
    _updateLabelsForStackItem<R = void, P0 = unknown>(__updateLabelsForStackItem: P0): R;
    _createUI<R = void>(): R;
    _updateReplaceButtonWithAlternate<R = void, P0 = boolean>(__updateReplaceButtonWithAlternate: P0): R;
    _makeVibrantButton<R = unknown>(): R;
    _makeLabelField<R = unknown>(): R;
    _takeDownTimelineWindow<R = void>(): R;
    _isTimelineHidden<R = boolean>(): R;
    _scheduleTimelineTransitionAnimationForEntering<R = void, P0 = boolean>(__scheduleTimelineTransitionAnimationForEntering: P0): R;
    _setTimelineHidden<R = void, P0 = boolean>(__setTimelineHidden: P0): R;
    _setTimelineEventsEnabled<R = void, P0 = boolean>(__setTimelineEventsEnabled: P0): R;
    _setTimelineSelectedItemWithVersionID<R = void, P0 = unknown>(__setTimelineSelectedItemWithVersionID: P0): R;
    _updateTimeline<R = void>(): R;
    _createTimelineWindow<R = void>(): R;
    refreshSnapshotForStackItem<R = void, P0 = unknown>(_refreshSnapshotForStackItem: P0): R;
    _displayWindowForCurrentStackItem<R = void>(): R;
    _switchPlaceholderToSnapshotForItem<R = void, P0 = unknown>(__switchPlaceholderToSnapshotForItem: P0): R;
    _replaceLiveWindowWithLayer<R = void>(): R;
    _replaceTopLayerWithLiveWindow<R = void>(): R;
    ensureSnapshotForStackItem_forceNew_wait<R = void, P0 = unknown, P1 = boolean, P2 = boolean>(_ensureSnapshotForStackItem: P0, _forceNew: P1, _wait: P2): R;
    _validSnapshotClosestToIndex<R = unknown, P0 = number>(__validSnapshotClosestToIndex: P0): R;
    spreadSnapshotOfStackItem<R = void, P0 = unknown>(_spreadSnapshotOfStackItem: P0): R;
    _animateLayerAtIndex_fromPosition_toPosition_duration_completionHandler<R = void, P0 = number, P1 = number, P2 = number, P3 = number, P4 = CDUnknownBlockType>(__animateLayerAtIndex: P0, _fromPosition: P1, _toPosition: P2, _duration: P3, _completionHandler: P4): R;
    _commitAnimation_toLayer<R = void, P0 = unknown, P1 = unknown>(__commitAnimation: P0, _toLayer: P1): R;
    _computeRevisionLayerFrames<R = void>(): R;
    _calculateLayerBoundsWithBaseBounds<R = void, P0 = CGRect>(__calculateLayerBoundsWithBaseBounds: P0): R;
    _calculateLayerBoundsAtZ_withBaseBounds<R = CGRect, P0 = number, P1 = CGRect>(__calculateLayerBoundsAtZ: P0, _withBaseBounds: P1): R;
    _stackOffsetAtZ<R = number, P0 = number>(__stackOffsetAtZ: P0): R;
    _animationParametersFromIndex_toIndex<R = unknown, P0 = number, P1 = number>(__animationParametersFromIndex: P0, _toIndex: P1): R;
    _animationParametersAtIndex<R = unknown, P0 = number>(__animationParametersAtIndex: P0): R;
    _shadingFilterColorForLayerAtIndex<R = unknown, P0 = number>(__shadingFilterColorForLayerAtIndex: P0): R;
    _backgroundOpacityForLayerAtIndex<R = number, P0 = number>(__backgroundOpacityForLayerAtIndex: P0): R;
    _alphaValueAtIndex<R = number, P0 = number>(__alphaValueAtIndex: P0): R;
    _layerBoundsAtPosition<R = CGRect, P0 = number>(__layerBoundsAtPosition: P0): R;
    initWithController<R = unknown, P0 = unknown>(_initWithController: P0): R;
    stackView<R = NSView>(): R;
    setStackView<R = void, P0 = NSView>(_v: P0): R;
    focusedRevisionFrame<R = CGRect>(): R;
    focusedOriginalFrame<R = CGRect>(): R;
    fullTwoUpLayout<R = boolean>(): R;
    originalFrame<R = CGRect>(): R;
    revisionFrame<R = CGRect>(): R;
    currentStackItemIndex<R = number>(): R;
    setCurrentStackItemIndex<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSDocumentRevisionsView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSDocumentRevisionsView>(): R;
      new: <R = NSDocumentRevisionsView>() => R;
      _remoteViewClass<R = unknown>(): R;
    }
  }
}

declare const NSDocumentRevisionsView: cocoa.NSDocumentRevisionsView.CLASS;
