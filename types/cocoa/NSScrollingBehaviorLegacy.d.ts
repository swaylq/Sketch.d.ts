/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrollingBehaviorLegacy<T0 = void, T1 = void, T2 = void> extends NSScrollingBehavior {
    _momentumAnimationTimerFire<R = void, P0 = unknown>(__momentumAnimationTimerFire: P0): R;
    _cancelAnyOutstandingPanAnimation<R = boolean>(): R;
    scrollView_panGestureRecognizerEndedOrFailed<R = void, P0 = unknown, P1 = unknown>(_scrollView: P0, _panGestureRecognizerEndedOrFailed: P1): R;
    _latchAcceleratedScrollEventsToScrollView<R = void, P0 = unknown>(__latchAcceleratedScrollEventsToScrollView: P0): R;
    _latchMomentumScrollEventsToScrollView<R = void, P0 = unknown>(__latchMomentumScrollEventsToScrollView: P0): R;
    _snapRubberBandWhenMouseReleasedFromTrackingLoopOfScrollView<R = void, P0 = unknown>(__snapRubberBandWhenMouseReleasedFromTrackingLoopOfScrollView: P0): R;
    _scrollView_snabRubberBandWithVelocity<R = void, P0 = unknown, P1 = CGSize>(__scrollView: P0, _snabRubberBandWithVelocity: P1): R;
    _endSnapBackAnimationIfNeededForScrollView<R = void, P0 = unknown>(__endSnapBackAnimationIfNeededForScrollView: P0): R;
    _scrollView_discreetScrollWithEvent<R = void, P0 = unknown, P1 = unknown>(__scrollView: P0, _discreetScrollWithEvent: P1): R;
    _scrollView_smoothScrollWithEvent<R = void, P0 = unknown, P1 = unknown>(__scrollView: P0, _smoothScrollWithEvent: P1): R;
    isInScrollGesture<R = boolean>(): R;
    dealloc<R = void>(): R;
    scrollViewRefForCarbonApps<R = NSScrollView>(): R;
    setScrollViewRefForCarbonApps<R = void, P0 = NSScrollView>(_v: P0): R;
    endGestureMonitor<R = unknown>(): R;
    setEndGestureMonitor<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace NSScrollingBehaviorLegacy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScrollingBehavior {
      alloc<R = NSScrollingBehaviorLegacy>(): R;
      new: <R = NSScrollingBehaviorLegacy>() => R;
    }
  }
}

declare const NSScrollingBehaviorLegacy: cocoa.NSScrollingBehaviorLegacy.CLASS;
