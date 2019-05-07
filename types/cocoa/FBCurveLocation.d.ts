/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface FBCurveLocation<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    initWithEdge_parameter_distance<R = unknown, P0 = unknown, P1 = number, P2 = number>(_initWithEdge: P0, _parameter: P1, _distance: P2): R;
    distance<R = number>(): R;
    parameter<R = number>(): R;
    edge<R = FBBezierCurve>(): R;
    contour<R = FBBezierContour>(): R;
    setContour<R = void, P0 = FBBezierContour>(_v: P0): R;
    graph<R = FBBezierGraph>(): R;
    setGraph<R = void, P0 = FBBezierGraph>(_v: P0): R;
  }
  namespace FBCurveLocation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = FBCurveLocation>(): R;
      new: <R = FBCurveLocation>() => R;
      curveLocationWithEdge_parameter_distance<R = unknown, P0 = unknown, P1 = number, P2 = number>(_curveLocationWithEdge: P0, _parameter: P1, _distance: P2): R;
    }
  }
}

declare const FBCurveLocation: cocoa.FBCurveLocation.CLASS;
