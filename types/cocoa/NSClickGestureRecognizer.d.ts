/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSClickGestureRecognizer<T0 = void, T1 = void, T2 = void> extends NSGestureRecognizer, NSCodingProtocol {
    _failRecognition<R = void>(): R;
    _beginTouchInteraction<R = void>(): R;
    _beginMouseInteraction<R = void>(): R;
    tooSlow<R = void, P0 = unknown>(_tooSlow: P0): R;
    startClickTimer<R = void, P0 = number>(_startClickTimer: P0): R;
    clearClickTimer<R = void>(): R;
    _setHasCustomAllowableMovement<R = void, P0 = boolean>(__setHasCustomAllowableMovement: P0): R;
    _hasCustomAllowableMovement<R = boolean>(): R;
    numberOfClicksRequired<R = number>(): R;
    setNumberOfClicksRequired<R = void, P0 = number>(_v: P0): R;
    buttonMask<R = number>(): R;
    setButtonMask<R = void, P0 = number>(_v: P0): R;
    numberOfTouchesRequired<R = number>(): R;
    setNumberOfTouchesRequired<R = void, P0 = number>(_v: P0): R;
    stageTransition<R = number>(): R;
    pressure<R = number>(): R;
    stage<R = number>(): R;
    behavior<R = number>(): R;
    setBehavior<R = void, P0 = number>(_v: P0): R;
    allowableMovement<R = number>(): R;
    setAllowableMovement<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSClickGestureRecognizer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSGestureRecognizer, NSCodingProtocol {
      alloc<R = NSClickGestureRecognizer>(): R;
      new: <R = NSClickGestureRecognizer>() => R;
    }
  }
}

declare const NSClickGestureRecognizer: cocoa.NSClickGestureRecognizer.CLASS;
