/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrollerImpPair<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    updateTrackingAreas<R = void>(): R;
    _addRemoveTrackingAreasAsNeeded<R = void>(): R;
    mouseExited<R = void, P0 = unknown>(_mouseExited: P0): R;
    mouseMoved<R = void, P0 = unknown>(_mouseMoved: P0): R;
    mouseEntered<R = void, P0 = unknown>(_mouseEntered: P0): R;
    cancelScrollGesture<R = void>(): R;
    endScrollGesture<R = void>(): R;
    _endScrollGestureWithCancel<R = void, P0 = boolean>(__endScrollGestureWithCancel: P0): R;
    beginScrollGesture<R = void>(): R;
    endTrackingInScrollerImp<R = void, P0 = unknown>(_endTrackingInScrollerImp: P0): R;
    endLiveResize<R = void>(): R;
    contentAreaDidResize<R = void>(): R;
    startLiveResize<R = void>(): R;
    mouseExitedContentArea<R = void>(): R;
    mouseMovedInContentArea<R = void>(): R;
    mouseEnteredContentArea<R = void>(): R;
    windowOrderedIn<R = void>(): R;
    windowOrderedOut<R = void>(): R;
    movedToNewWindow<R = void>(): R;
    removedFromSuperview<R = void>(): R;
    contentAreaDidHide<R = void>(): R;
    contentAreaWillDraw<R = void>(): R;
    _doWork<R = void, P0 = CDUnknownBlockType>(__doWork: P0): R;
    contentAreaScrolledInDirection<R = void, P0 = CGPoint>(_contentAreaScrolledInDirection: P0): R;
    contentAreaScrolled<R = void>(): R;
    overlayScrollerStateIsLocked<R = boolean>(): R;
    unlockOverlayScrollerState<R = void>(): R;
    lockOverlayScrollerState<R = void, P0 = number>(_lockOverlayScrollerState: P0): R;
    hideOverlayScrollers<R = void>(): R;
    flashScrollers<R = void>(): R;
    _updateOverlayScrollersStateWithReason_forceAtLeastKnobsVisible<R = void, P0 = unknown, P1 = boolean>(__updateOverlayScrollersStateWithReason: P0, _forceAtLeastKnobsVisible: P1): R;
    _updateOverlayScrollersStateWithReason_forcingVisibilityForHorizontalKnob_verticalKnob<R = void, P0 = unknown, P1 = number, P2 = number>(__updateOverlayScrollersStateWithReason: P0, _forcingVisibilityForHorizontalKnob: P1, _verticalKnob: P2): R;
    _rescheduleOverlayScrollerHideTimerWithDelay<R = void, P0 = number>(__rescheduleOverlayScrollerHideTimerWithDelay: P0): R;
    _cancelOverlayScrollerHideTimer<R = void>(): R;
    _overlayScrollerHideTimerFired<R = void, P0 = unknown>(__overlayScrollerHideTimerFired: P0): R;
    _beginHideOverlayScrollers<R = void>(): R;
    _setOverlayScrollerState_forScrollerImp_forceImmediately<R = void, P0 = number, P1 = unknown, P2 = boolean>(__setOverlayScrollerState: P0, _forScrollerImp: P1, _forceImmediately: P2): R;
    delegate<R = NSScrollerImpPairDelegate>(): R;
    setDelegate<R = void, P0 = NSScrollerImpPairDelegate>(_v: P0): R;
    inScrollGesture<R = boolean>(): R;
    overlayScrollersShown<R = boolean>(): R;
    scrollerKnobStyle<R = number>(): R;
    setScrollerKnobStyle<R = void, P0 = number>(_v: P0): R;
    horizontalScrollerImp<R = NSScrollerImp>(): R;
    setHorizontalScrollerImp<R = void, P0 = NSScrollerImp>(_v: P0): R;
    verticalScrollerImp<R = NSScrollerImp>(): R;
    setVerticalScrollerImp<R = void, P0 = NSScrollerImp>(_v: P0): R;
    scrollerStyle<R = number>(): R;
    setScrollerStyle<R = void, P0 = number>(_v: P0): R;
    scrollView<R = NSScrollView>(): R;
    setScrollView<R = void, P0 = NSScrollView>(_v: P0): R;
    flipped<R = boolean>(): R;
    setFlipped<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSScrollerImpPair {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSScrollerImpPair>(): R;
      new: <R = NSScrollerImpPair>() => R;
      scrollerLayoutDirection<R = number>(): R;
      setSuppressScrollerFlash_forDecendantsOfView<R = void, P0 = boolean, P1 = unknown>(_setSuppressScrollerFlash: P0, _forDecendantsOfView: P1): R;
      _scrollerStyleRecommendationChanged<R = void, P0 = unknown>(__scrollerStyleRecommendationChanged: P0): R;
      _updateAllScrollerImpPairsForNewRecommendedScrollerStyle<R = void, P0 = number>(__updateAllScrollerImpPairsForNewRecommendedScrollerStyle: P0): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSScrollerImpPair: cocoa.NSScrollerImpPair.CLASS;
