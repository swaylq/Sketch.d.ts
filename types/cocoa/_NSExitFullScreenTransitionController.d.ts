/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSExitFullScreenTransitionController<T0 = void, T1 = void, T2 = void> extends _NSFullScreenTransitionController {
    configureBeforeStarting<R = void>(): R;
    _gatherAfterTransitionWindowNumbers<R = unknown>(): R;
    _swapOriginalWindowWithOverlayWindow<R = void>(): R;
    _captureAfterSnapshot<R = void>(): R;
    _captureBeforeSnapshot<R = void>(): R;
    _updateShadowDeltaRect_forFrame_basedOnImage<R = CGRect, P0 = CGRect, P1 = CGRect, P2 = CGImage>(__updateShadowDeltaRect: P0, _forFrame: P1, _basedOnImage: P2): R;
    captureAfterSnapshot<R = CGImage>(): R;
    captureBeforeSnapshot<R = CGImage>(): R;
    _desktopPictureSpaceID<R = number>(): R;
    destinationSpaceID<R = number>(): R;
    transitionedWindowShadowOffset<R = CGSize>(): R;
    _windowIDsForBeforeSnapshot<R = unknown>(): R;
    windowIDsForSnapshot<R = unknown>(): R;
    _performExitFullScreen<R = void>(): R;
    _doFailedToExitFullScreen<R = void>(): R;
    _doSucceededToExitFullScreen<R = void>(): R;
    _rebindAndReleaseDockAppointedAllSpaceWindows<R = void>(): R;
    _startFullScreenTransition<R = void>(): R;
    participatingWindowNumbers<R = unknown>(): R;
    orderTransitionedWindowFront<R = void>(): R;
    fullScreenStorage<R = unknown>(): R;
    failedToExitFullScreen<R = void>(): R;
    startCustomTransition<R = boolean>(): R;
    transitionedWindowFrame<R = CGRect>(): R;
    doAfterExitFullScreen<R = void>(): R;
    _doAfterExitFullScreen<R = void>(): R;
    _clearFullScreenBits<R = void>(): R;
    doBeforeExitFullScreen<R = void>(): R;
    maybeFilterParticipatingWindowNumbers_byScreen<R = unknown, P0 = unknown, P1 = unknown>(_maybeFilterParticipatingWindowNumbers: P0, _byScreen: P1): R;
    gatherParticipatingWindowNumbers<R = unknown>(): R;
    setupWindowForAfterFullScreenExit<R = void>(): R;
    prepareToExitFullScreenMode<R = void>(): R;
    usingAppKitTransition<R = boolean>(): R;
    shouldContentWindowBeVisible<R = boolean>(): R;
    interrupted<R = boolean>(): R;
    lastTabShouldCleanUpSpace<R = boolean>(): R;
    setLastTabShouldCleanUpSpace<R = void, P0 = boolean>(_v: P0): R;
    exitForTabMove<R = boolean>(): R;
    setExitForTabMove<R = void, P0 = boolean>(_v: P0): R;
    skipCleaningUpSpaceOnClose<R = boolean>(): R;
    setSkipCleaningUpSpaceOnClose<R = void, P0 = boolean>(_v: P0): R;
    exitForClose<R = boolean>(): R;
    setExitForClose<R = void, P0 = boolean>(_v: P0): R;
    dockInitiated<R = boolean>(): R;
    setDockInitiated<R = void, P0 = boolean>(_v: P0): R;
    duration<R = number>(): R;
    setDuration<R = void, P0 = number>(_v: P0): R;
    doInProcessAnimation<R = boolean>(): R;
    setDoInProcessAnimation<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace _NSExitFullScreenTransitionController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSFullScreenTransitionController {
      alloc<R = _NSExitFullScreenTransitionController>(): R;
      new: <R = _NSExitFullScreenTransitionController>() => R;
      exitTransitionForWindow<R = unknown, P0 = unknown>(_exitTransitionForWindow: P0): R;
      exitTransitionForSpace<R = unknown, P0 = unknown>(_exitTransitionForSpace: P0): R;
    }
  }
}
