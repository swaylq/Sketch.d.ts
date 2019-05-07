/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGestureRecognizer<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    locationInLayer<R = CGPoint, P0 = unknown>(_locationInLayer: P0): R;
    initWithTarget_action<R = unknown, P0 = unknown, P1 = string>(_initWithTarget: P0, _action: P1): R;
    flagsChanged<R = void, P0 = unknown>(_flagsChanged: P0): R;
    keyUp_flags<R = void, P0 = number, P1 = number>(_keyUp: P0, _flags: P1): R;
    keyDown<R = void, P0 = unknown>(_keyDown: P0): R;
    mouseUp_location<R = void, P0 = unknown, P1 = CGPoint>(_mouseUp: P0, _location: P1): R;
    mouseDragged_modifierFlags<R = void, P0 = CGPoint, P1 = number>(_mouseDragged: P0, _modifierFlags: P1): R;
    mouseDown_clickCount_modifierFlags<R = void, P0 = CGPoint, P1 = number, P2 = number>(_mouseDown: P0, _clickCount: P1, _modifierFlags: P2): R;
    reset<R = void>(): R;
    preflightTransitionFromState_toState<R = void, P0 = number, P1 = number>(_preflightTransitionFromState: P0, _toState: P1): R;
    delegate<R = MSGestureRecognizerDelegate>(): R;
    setDelegate<R = void, P0 = MSGestureRecognizerDelegate>(_v: P0): R;
    state<R = number>(): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace MSGestureRecognizer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSGestureRecognizer>(): R;
      new: <R = MSGestureRecognizer>() => R;
    }
  }
}

declare const MSGestureRecognizer: cocoa.MSGestureRecognizer.CLASS;
