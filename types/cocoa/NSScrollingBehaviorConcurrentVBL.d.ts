/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrollingBehaviorConcurrentVBL<T0 = void, T1 = void, T2 = void> extends NSScrollingBehavior, _NSScrollStateEventListenerProtocol {
    _animateFreeMomentum<R = void>(): R;
    _animateSwipePageAlignment<R = void>(): R;
    _asynchronouslyAllowDelegateToModifyProposedPageAlignedOrigin_onAxis_withInitialOrigin_velocity_synchronousTimeout_gestureToken<R = void, P0 = number, P1 = number, P2 = number, P3 = number, P4 = number, P5 = number>(__asynchronouslyAllowDelegateToModifyProposedPageAlignedOrigin: P0, _onAxis: P1, _withInitialOrigin: P2, _velocity: P3, _synchronousTimeout: P4, _gestureToken: P5): R;
    _asynchronouslyAllowDelegateToAdjustMomentum_withInitialOrigin_velocity_synchronousTimeout_gestureToken<R = void, P0 = unknown, P1 = CGPoint, P2 = CGPoint, P3 = number, P4 = number>(__asynchronouslyAllowDelegateToAdjustMomentum: P0, _withInitialOrigin: P1, _velocity: P2, _synchronousTimeout: P3, _gestureToken: P4): R;
    _updateAnimatedMomentumStateMachineWithScrollStateEvent_sender<R = void, P0 = number, P1 = unknown>(__updateAnimatedMomentumStateMachineWithScrollStateEvent: P0, _sender: P1): R;
    _updateMomentumEventsStateMachineWithScrollStateEvent_sender<R = void, P0 = number, P1 = unknown>(__updateMomentumEventsStateMachineWithScrollStateEvent: P0, _sender: P1): R;
    _stopGestureScrollTracking<R = void>(): R;
    waitForEvent<R = void>(): R;
    checkForGestureContinuance<R = void>(): R;
    _animateMomentum<R = void>(): R;
    _snapRubberbandIfRequired<R = boolean>(): R;
    _snapRubberband<R = void>(): R;
    _snapRubberbandWithInitialOrigin_velocity_stretch<R = void, P0 = CGPoint, P1 = CGPoint, P2 = CGSize>(__snapRubberbandWithInitialOrigin: P0, _velocity: P1, _stretch: P2): R;
    _beginMomentumScroll<R = void>(): R;
    _beginPhysicalScroll<R = void>(): R;
    _isStretched<R = boolean>(): R;
    _startGestureScrollWithVBLFilter<R = void, P0 = unknown>(__startGestureScrollWithVBLFilter: P0): R;
    _scrollView_trackGestureScrollWithEvent<R = void, P0 = unknown, P1 = unknown>(__scrollView: P0, _trackGestureScrollWithEvent: P1): R;
    _scrollView_discreetScrollWithEvent<R = void, P0 = unknown, P1 = unknown>(__scrollView: P0, _discreetScrollWithEvent: P1): R;
    _scrollView_smoothScrollWithEvent<R = void, P0 = unknown, P1 = unknown>(__scrollView: P0, _smoothScrollWithEvent: P1): R;
    _updatePageReferenceNumber<R = void>(): R;
    _scrollView_trackScrollMayBegin<R = void, P0 = unknown, P1 = unknown>(__scrollView: P0, _trackScrollMayBegin: P1): R;
    _automateLiveScrollOfScrollView<R = void, P0 = unknown>(__automateLiveScrollOfScrollView: P0): R;
    _legacyBehavior<R = unknown>(): R;
    dealloc<R = void>(): R;
    gestureToken<R = number>(): R;
    setGestureToken<R = void, P0 = number>(_v: P0): R;
    state<R = number>(): R;
    setState<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSScrollingBehaviorConcurrentVBL {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScrollingBehavior, _NSScrollStateEventListenerProtocol {
      alloc<R = NSScrollingBehaviorConcurrentVBL>(): R;
      new: <R = NSScrollingBehaviorConcurrentVBL>() => R;
    }
  }
}

declare const NSScrollingBehaviorConcurrentVBL: cocoa.NSScrollingBehaviorConcurrentVBL.CLASS;
