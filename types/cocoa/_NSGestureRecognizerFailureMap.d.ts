/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSGestureRecognizerFailureMap<T0 = void, T1 = void, T2 = void> extends NSObject {
    isGestureRecognizerWaitingForGestureRecognizersToFail<R = boolean, P0 = unknown>(_isGestureRecognizerWaitingForGestureRecognizersToFail: P0): R;
    gestureRecognizerFinished_withEvent<R = void, P0 = unknown, P1 = unknown>(_gestureRecognizerFinished: P0, _withEvent: P1): R;
    _queueRecognizersForResetIfFinished<R = void>(): R;
    _gestureRecognizerFinished_withEvent<R = void, P0 = unknown, P1 = unknown>(__gestureRecognizerFinished: P0, _withEvent: P1): R;
    gestureRecognizerBecameDirty<R = void, P0 = unknown>(_gestureRecognizerBecameDirty: P0): R;
    gestureRecognizerDeallocated<R = void, P0 = unknown>(_gestureRecognizerDeallocated: P0): R;
    description<R = unknown>(): R;
    rebuildFailureMap<R = void>(): R;
    reloadFailureMap<R = void>(): R;
    dealloc<R = void>(): R;
    initWithRelatedGestures<R = unknown, P0 = unknown>(_initWithRelatedGestures: P0): R;
    hasUnmetFailureRequirementsOrDependents<R = boolean>(): R;
  }
  namespace _NSGestureRecognizerFailureMap {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSGestureRecognizerFailureMap>(): R;
      new: <R = _NSGestureRecognizerFailureMap>() => R;
      buildFailureMapForGestureRecognizer<R = void, P0 = unknown>(_buildFailureMapForGestureRecognizer: P0): R;
      buildFailureMapForGestureRecognizers<R = void, P0 = unknown>(_buildFailureMapForGestureRecognizers: P0): R;
    }
  }
}
