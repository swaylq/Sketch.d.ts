/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCCanvasGrabResult<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    initWithPreviousCanvasGrabResult_mouseIsOnCanvas<R = unknown, P0 = unknown, P1 = boolean>(_initWithPreviousCanvasGrabResult: P0, _mouseIsOnCanvas: P1): R;
    initWithCanvasGrab_windowNumber_mouseIsOnCanvas<R = unknown, P0 = unknown, P1 = number, P2 = boolean>(_initWithCanvasGrab: P0, _windowNumber: P1, _mouseIsOnCanvas: P2): R;
    windowNumber<R = number>(): R;
    setWindowNumber<R = void, P0 = number>(_v: P0): R;
    mouseIsOnCanvas<R = boolean>(): R;
    setMouseIsOnCanvas<R = void, P0 = boolean>(_v: P0): R;
    canvasGrab<R = BCScreenGrab>(): R;
  }
  namespace BCCanvasGrabResult {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = BCCanvasGrabResult>(): R;
      new: <R = BCCanvasGrabResult>() => R;
    }
  }
}

declare const BCCanvasGrabResult: cocoa.BCCanvasGrabResult.CLASS;
