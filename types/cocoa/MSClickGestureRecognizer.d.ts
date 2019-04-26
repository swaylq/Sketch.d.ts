/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSClickGestureRecognizer<T0 = void, T1 = void, T2 = void> extends MSGestureRecognizer {
    shouldRecognizeMouseUpEvent<R = boolean, P0 = unknown>(_shouldRecognizeMouseUpEvent: P0): R;
    setLocation<R = void, P0 = CGPoint>(_setLocation: P0): R;
    isDrag<R = boolean>(): R;
    setIsDrag<R = void, P0 = boolean>(_v: P0): R;
    numberOfClicksRequired<R = number>(): R;
    setNumberOfClicksRequired<R = void, P0 = number>(_v: P0): R;
    buttonMask<R = number>(): R;
    setButtonMask<R = void, P0 = number>(_v: P0): R;
  }
  namespace MSClickGestureRecognizer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSGestureRecognizer {
      alloc<R = MSClickGestureRecognizer>(): R;
      new: <R = MSClickGestureRecognizer>() => R;
    }
  }
}

declare const MSClickGestureRecognizer: cocoa.MSClickGestureRecognizer.CLASS;
