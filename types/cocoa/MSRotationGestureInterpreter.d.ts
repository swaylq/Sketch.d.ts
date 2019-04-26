/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRotationGestureInterpreter<T0 = void, T1 = void, T2 = void> extends NSObject {
    convertRotation_toLayer<R = number, P0 = number, P1 = unknown>(_convertRotation: P0, _toLayer: P1): R;
    angleOfPoint_inLayer<R = number, P0 = CGPoint, P1 = unknown>(_angleOfPoint: P0, _inLayer: P1): R;
    rotationInDegreesInLayer<R = number, P0 = unknown>(_rotationInDegreesInLayer: P0): R;
    rotationInLayer<R = number, P0 = unknown>(_rotationInLayer: P0): R;
    updateWithLocation<R = void, P0 = CGPoint>(_updateWithLocation: P0): R;
    updateWithDragRecognizer<R = void, P0 = unknown>(_updateWithDragRecognizer: P0): R;
    centerPoint<R = CGPoint>(): R;
    setCenterPoint<R = void, P0 = CGPoint>(_v: P0): R;
  }
  namespace MSRotationGestureInterpreter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSRotationGestureInterpreter>(): R;
      new: <R = MSRotationGestureInterpreter>() => R;
    }
  }
}

declare const MSRotationGestureInterpreter: cocoa.MSRotationGestureInterpreter.CLASS;
