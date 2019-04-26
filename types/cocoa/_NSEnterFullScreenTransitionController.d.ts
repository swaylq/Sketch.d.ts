/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSEnterFullScreenTransitionController<T0 = void, T1 = void, T2 = void> extends _NSFullScreenTransitionController {
    _determineStartingSpaceID<R = number>(): R;
    _gatherAfterTransitionWindowNumbers<R = unknown>(): R;
    _captureAfterSnapshot<R = void>(): R;
    _swapOriginalWindowWithOverlayWindow<R = void>(): R;
    _captureBeforeSnapshot<R = void>(): R;
    _performEnterFullScreen<R = void>(): R;
    _doFailedToEnterFullScreen<R = void>(): R;
    _doSucceededToEnterFullScreen<R = void>(): R;
    _moveWindowsToDestinationSpaceForNoAnimationCase<R = void>(): R;
    _performFinalTransitionCleanup<R = void>(): R;
    _startFullScreenTransition<R = void>(): R;
    startWatchingForWindowsNotInCustomWindows<R = void, P0 = unknown>(_startWatchingForWindowsNotInCustomWindows: P0): R;
    _setFloatingWindowTag_forWindowNumbers<R = void, P0 = boolean, P1 = unknown>(__setFloatingWindowTag: P0, _forWindowNumbers: P1): R;
    _rebindAndReleaseDockAppointedAllSpaceWindows<R = void>(): R;
    _setOrClearAllSpaceBindings<R = void, P0 = boolean>(__setOrClearAllSpaceBindings: P0): R;
    _createDockAppointedAllSpaceWindowNumsFromParticipatingWindowNumbers<R = unknown, P0 = unknown>(__createDockAppointedAllSpaceWindowNumsFromParticipatingWindowNumbers: P0): R;
    participatingWindowNumbers<R = unknown>(): R;
    _updateShadowDeltaRect_forFrame_basedOnImage<R = CGRect, P0 = CGRect, P1 = CGRect, P2 = CGImage>(__updateShadowDeltaRect: P0, _forFrame: P1, _basedOnImage: P2): R;
    windowIDsForSnapshot<R = unknown>(): R;
    transitionedWindowShadowOffset<R = CGSize>(): R;
    startCustomTransition<R = boolean>(): R;
    failedToEnterFullScreen<R = void>(): R;
    doAfterEnterFullScreen<R = void>(): R;
    _doFinishedTransition<R = void>(): R;
    doBeforeEnterFullScreen<R = void>(): R;
    transitionedWindowAnimationTargetFrame<R = CGRect>(): R;
    transitionedWindowFrame<R = CGRect>(): R;
    associateWindowWithSpace<R = void>(): R;
    maybeFilterParticipatingWindowNumbers_byScreen<R = unknown, P0 = unknown, P1 = unknown>(_maybeFilterParticipatingWindowNumbers: P0, _byScreen: P1): R;
    gatherParticipatingWindowNumbers<R = unknown>(): R;
    setupWindowForAfterFullScreenEnter<R = void>(): R;
    orderTransitionedWindowFront<R = void>(): R;
    fullScreenTitle<R = unknown>(): R;
    customWindowNumbers<R = unknown>(): R;
    usingAppKitTransition<R = boolean>(): R;
    shouldContentWindowBeVisible<R = boolean>(): R;
    interrupted<R = boolean>(): R;
    nonAnimatingSlideAnimation<R = boolean>(): R;
    setNonAnimatingSlideAnimation<R = void, P0 = boolean>(_v: P0): R;
    activate<R = boolean>(): R;
    setActivate<R = void, P0 = boolean>(_v: P0): R;
    doInProcessAnimation<R = boolean>(): R;
    setDoInProcessAnimation<R = void, P0 = boolean>(_v: P0): R;
    activeOverride<R = boolean>(): R;
    setActiveOverride<R = void, P0 = boolean>(_v: P0): R;
    toSpid<R = number>(): R;
    setToSpid<R = void, P0 = number>(_v: P0): R;
  }
  namespace _NSEnterFullScreenTransitionController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSFullScreenTransitionController {
      alloc<R = _NSEnterFullScreenTransitionController>(): R;
      new: <R = _NSEnterFullScreenTransitionController>() => R;
      enterTransitionForWindow<R = unknown, P0 = unknown>(_enterTransitionForWindow: P0): R;
      enterTransitionForWindowID<R = unknown, P0 = number>(_enterTransitionForWindowID: P0): R;
    }
  }
}
