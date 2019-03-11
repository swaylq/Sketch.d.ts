/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCCanvasGrabResult<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    initWithPreviousCanvasGrabResult_mouseIsOnCanvas<R = unknown, P0 = unknown, P1 = boolean>(_initWithPreviousCanvasGrabResult: P0, _mouseIsOnCanvas: P1): R;
    initWithCanvasGrab_windowNumber_mouseIsOnCanvas<R = unknown, P0 = unknown, P1 = number, P2 = boolean>(_initWithCanvasGrab: P0, _windowNumber: P1, _mouseIsOnCanvas: P2): R;
    windowNumber<R = number>(): R;
    setWindowNumber<R = void, P0 = number>(_v: P0): R;
    mouseIsOnCanvas<R = boolean>(): R;
    setMouseIsOnCanvas<R = void, P0 = boolean>(_v: P0): R;
    canvasGrab<R = cocoa.BCScreenGrab>(): R;
  }
  namespace classes {
    export interface BCCanvasGrabResult<T = any> extends cocoa.classes.NSObject {
      alloc<R = BCCanvasGrabResult>(): R;
      new: <R = BCCanvasGrabResult>() => R;
    }
  }
}

declare const BCCanvasGrabResult: cocoa.classes.BCCanvasGrabResult;
