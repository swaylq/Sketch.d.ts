/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDragEventTracker<T0 = void, T1 = void, T2 = void> extends NSEventTracker {
    locationInView<R = CGPoint, P0 = unknown>(_locationInView: P0): R;
    location<R = CGPoint>(): R;
    setLocation<R = void, P0 = CGPoint>(_v: P0): R;
    stage<R = number>(): R;
    setStage<R = void, P0 = number>(_v: P0): R;
    gestureAmount<R = number>(): R;
    setGestureAmount<R = void, P0 = number>(_v: P0): R;
    discardEventMask<R = number>(): R;
    setDiscardEventMask<R = void, P0 = number>(_v: P0): R;
    wantsRightMouseEvents<R = boolean>(): R;
    setWantsRightMouseEvents<R = void, P0 = boolean>(_v: P0): R;
    routesScrollWheelEventsToWindow<R = boolean>(): R;
    setRoutesScrollWheelEventsToWindow<R = void, P0 = boolean>(_v: P0): R;
    timeoutThreshold<R = number>(): R;
    setTimeoutThreshold<R = void, P0 = number>(_v: P0): R;
    movementThreshold<R = number>(): R;
    setMovementThreshold<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSDragEventTracker {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSEventTracker {
      alloc<R = NSDragEventTracker>(): R;
      new: <R = NSDragEventTracker>() => R;
    }
  }
}

declare const NSDragEventTracker: cocoa.NSDragEventTracker.CLASS;
