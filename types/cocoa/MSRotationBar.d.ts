/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRotationBar<T0 = void, T1 = void, T2 = void> extends NSControl {
    cxx_destruct<R = void>(): R;
    isFlipped<R = boolean>(): R;
    endInertialScrolling<R = void>(): R;
    inertialScrollingTimerDidFire<R = void, P0 = unknown>(_inertialScrollingTimerDidFire: P0): R;
    startInertialScrollingAtSpeed<R = void, P0 = number>(_startInertialScrollingAtSpeed: P0): R;
    liveUpdateRotation<R = void>(): R;
    panGestureAction<R = void, P0 = unknown>(_panGestureAction: P0): R;
    resetTouchToX<R = void, P0 = number>(_resetTouchToX: P0): R;
    stopTrackingTouch<R = void>(): R;
    failTouchTracking<R = void>(): R;
    updateTouchTracking<R = void, P0 = unknown>(_updateTouchTracking: P0): R;
    startTrackingTouch<R = void, P0 = unknown>(_startTrackingTouch: P0): R;
    setUpGestureRecognizer<R = void>(): R;
    inertialSpeed<R = number>(): R;
    setInertialSpeed<R = void, P0 = number>(_v: P0): R;
    inertialTimer<R = NSTimer>(): R;
    setInertialTimer<R = void, P0 = NSTimer>(_v: P0): R;
    startingX<R = number>(): R;
    setStartingX<R = void, P0 = number>(_v: P0): R;
    startingRotation<R = number>(): R;
    setStartingRotation<R = void, P0 = number>(_v: P0): R;
    lastTouchTime<R = number>(): R;
    setLastTouchTime<R = void, P0 = number>(_v: P0): R;
    didSnapRotation<R = boolean>(): R;
    setDidSnapRotation<R = void, P0 = boolean>(_v: P0): R;
    currentX<R = number>(): R;
    setCurrentX<R = void, P0 = number>(_v: P0): R;
    currentlyTrackingTouch<R = boolean>(): R;
    setCurrentlyTrackingTouch<R = void, P0 = boolean>(_v: P0): R;
    userVisibleRotation<R = number>(): R;
    setUserVisibleRotation<R = void, P0 = number>(_v: P0): R;
  }
  namespace MSRotationBar {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSControl {
      alloc<R = MSRotationBar>(): R;
      new: <R = MSRotationBar>() => R;
      shouldContinueInertialScrollingAtSpeed<R = boolean, P0 = number>(_shouldContinueInertialScrollingAtSpeed: P0): R;
    }
  }
}

declare const MSRotationBar: cocoa.MSRotationBar.CLASS;
