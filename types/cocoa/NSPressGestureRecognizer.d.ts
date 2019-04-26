/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPressGestureRecognizer<T0 = void, T1 = void, T2 = void> extends NSGestureRecognizer, NSCodingProtocol {
    startTimer<R = void>(): R;
    clearTimer<R = void>(): R;
    enoughTimeElapsed<R = void, P0 = unknown>(_enoughTimeElapsed: P0): R;
    _setHasCustomAllowableMovement<R = void, P0 = boolean>(__setHasCustomAllowableMovement: P0): R;
    _hasCustomAllowableMovement<R = boolean>(): R;
    _setHasCustomMinimumPressDuration<R = void, P0 = boolean>(__setHasCustomMinimumPressDuration: P0): R;
    _hasCustomMinimumPressDuration<R = boolean>(): R;
    touches<R = NSArray>(): R;
    numberOfTouchesRequired<R = number>(): R;
    setNumberOfTouchesRequired<R = void, P0 = number>(_v: P0): R;
    cancelPastAllowableMovement<R = boolean>(): R;
    setCancelPastAllowableMovement<R = void, P0 = boolean>(_v: P0): R;
    allowableMovement<R = number>(): R;
    setAllowableMovement<R = void, P0 = number>(_v: P0): R;
    minimumPressDuration<R = number>(): R;
    setMinimumPressDuration<R = void, P0 = number>(_v: P0): R;
    buttonMask<R = number>(): R;
    setButtonMask<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSPressGestureRecognizer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSGestureRecognizer, NSCodingProtocol {
      alloc<R = NSPressGestureRecognizer>(): R;
      new: <R = NSPressGestureRecognizer>() => R;
    }
  }
}

declare const NSPressGestureRecognizer: cocoa.NSPressGestureRecognizer.CLASS;
