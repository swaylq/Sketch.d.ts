/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrollingBehavior<T0 = void, T1 = void, T2 = void> extends NSObject {
    automateLiveScrollOfScrollView<R = void, P0 = unknown>(_automateLiveScrollOfScrollView: P0): R;
    scrollView_boundsChangedForClipView<R = void, P0 = unknown, P1 = unknown>(_scrollView: P0, _boundsChangedForClipView: P1): R;
    snapRubberBandOfScrollView<R = void, P0 = unknown>(_snapRubberBandOfScrollView: P0): R;
    scrollView_panGestureRecognizerFailed<R = void, P0 = unknown, P1 = unknown>(_scrollView: P0, _panGestureRecognizerFailed: P1): R;
    scrollView_panGestureRecognizer_shouldReceiveTouch<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_scrollView: P0, _panGestureRecognizer: P1, _shouldReceiveTouch: P2): R;
    scrollView_panWithGestureRecognizer<R = void, P0 = unknown, P1 = unknown>(_scrollView: P0, _panWithGestureRecognizer: P1): R;
    scrollView_scrollWheelWithEvent<R = void, P0 = unknown, P1 = unknown>(_scrollView: P0, _scrollWheelWithEvent: P1): R;
    axisForSwipeTrackingGivenScrollWheelEvent<R = number, P0 = unknown>(_axisForSwipeTrackingGivenScrollWheelEvent: P0): R;
    scrollView_endScrollGestureDueToReason<R = void, P0 = unknown, P1 = unknown>(_scrollView: P0, _endScrollGestureDueToReason: P1): R;
    scrollView_responderToForwardScrollEvents<R = unknown, P0 = unknown, P1 = unknown>(_scrollView: P0, _responderToForwardScrollEvents: P1): R;
    scrollView_responderToForwardMayBeginScrollEvent<R = unknown, P0 = unknown, P1 = unknown>(_scrollView: P0, _responderToForwardMayBeginScrollEvent: P1): R;
    supportsConcurrentScrolling<R = boolean>(): R;
  }
  namespace NSScrollingBehavior {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSScrollingBehavior>(): R;
      new: <R = NSScrollingBehavior>() => R;
    }
  }
}

declare const NSScrollingBehavior: cocoa.NSScrollingBehavior.CLASS;
