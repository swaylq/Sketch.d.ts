/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCMagnifier<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace BCMagnifier {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = BCMagnifier>(): R;
      new: <R = BCMagnifier>() => R;
      displayIDForScreenPoint<R = number, P0 = CGPoint>(_displayIDForScreenPoint: P0): R;
      grabVisibleCanvas<R = unknown, P0 = unknown>(_grabVisibleCanvas: P0): R;
      colorAtScreenPoint_inScreenGrab_colorSpace<R = unknown, P0 = CGPoint, P1 = unknown, P2 = unknown>(_colorAtScreenPoint: P0, _inScreenGrab: P1, _colorSpace: P2): R;
      grabCanvasAtScreenPoint_belowWindow_previousGrabResult<R = unknown, P0 = CGPoint, P1 = unknown, P2 = unknown>(_grabCanvasAtScreenPoint: P0, _belowWindow: P1, _previousGrabResult: P2): R;
      updateMagnifierWindow_mouseLocation_screenGrab_colorSpace<R = void, P0 = unknown, P1 = CGPoint, P2 = unknown, P3 = unknown>(_updateMagnifierWindow: P0, _mouseLocation: P1, _screenGrab: P2, _colorSpace: P3): R;
      pickColorInColorSpace_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_pickColorInColorSpace: P0, _completionHandler: P1): R;
      pointInFlippedCoordinates<R = CGPoint, P0 = CGPoint>(_pointInFlippedCoordinates: P0): R;
    }
  }
}

declare const BCMagnifier: cocoa.BCMagnifier.CLASS;
