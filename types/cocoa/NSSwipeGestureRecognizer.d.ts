/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSwipeGestureRecognizer<T0 = void, T1 = void, T2 = void> extends NSGestureRecognizer, NSCodingProtocol {
    _checkForSwipeWithDelta_time<R = boolean, P0 = CGPoint, P1 = number>(__checkForSwipeWithDelta: P0, _time: P1): R;
    setRecognizesAfterEndPhase<R = void, P0 = boolean>(_setRecognizesAfterEndPhase: P0): R;
    recognizesAfterEndPhase<R = boolean>(): R;
    direction<R = number>(): R;
    setDirection<R = void, P0 = number>(_v: P0): R;
    allowedPrimaryMovementSlop<R = number>(): R;
    setAllowedPrimaryMovementSlop<R = void, P0 = number>(_v: P0): R;
    rateOfMaximumMovementDecay<R = number>(): R;
    setRateOfMaximumMovementDecay<R = void, P0 = number>(_v: P0): R;
    rateOfMinimumMovementDecay<R = number>(): R;
    setRateOfMinimumMovementDecay<R = void, P0 = number>(_v: P0): R;
    maximumSecondaryMovement<R = number>(): R;
    setMaximumSecondaryMovement<R = void, P0 = number>(_v: P0): R;
    minimumSecondaryMovement<R = number>(): R;
    setMinimumSecondaryMovement<R = void, P0 = number>(_v: P0): R;
    maximumPrimaryMovement<R = number>(): R;
    setMaximumPrimaryMovement<R = void, P0 = number>(_v: P0): R;
    minimumPrimaryMovement<R = number>(): R;
    setMinimumPrimaryMovement<R = void, P0 = number>(_v: P0): R;
    maximumDuration<R = number>(): R;
    setMaximumDuration<R = void, P0 = number>(_v: P0): R;
    startPoint<R = CGPoint>(): R;
    numberOfTouchesRequired<R = number>(): R;
    setNumberOfTouchesRequired<R = void, P0 = number>(_v: P0): R;
    buttonMask<R = number>(): R;
    setButtonMask<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSSwipeGestureRecognizer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSGestureRecognizer, NSCodingProtocol {
      alloc<R = NSSwipeGestureRecognizer>(): R;
      new: <R = NSSwipeGestureRecognizer>() => R;
      touchBarMiniSwipeRecognizerWithTarget_action<R = unknown, P0 = unknown, P1 = string>(_touchBarMiniSwipeRecognizerWithTarget: P0, _action: P1): R;
    }
  }
}

declare const NSSwipeGestureRecognizer: cocoa.NSSwipeGestureRecognizer.CLASS;
