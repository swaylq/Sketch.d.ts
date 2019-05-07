/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBezierLineCurveJoin<T0 = void, T1 = void, T2 = void> extends MSBezierJoin {}
  namespace MSBezierLineCurveJoin {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBezierJoin {
      alloc<R = MSBezierLineCurveJoin>(): R;
      new: <R = MSBezierLineCurveJoin>() => R;
      segmentsWithIntersectionOfLine_withExtendedTangentFromCurve<R = unknown, P0 = unknown, P1 = unknown>(_segmentsWithIntersectionOfLine: P0, _withExtendedTangentFromCurve: P1): R;
      segmentsWithIntersectionOfLine_withMirroredCurve<R = unknown, P0 = unknown, P1 = unknown>(_segmentsWithIntersectionOfLine: P0, _withMirroredCurve: P1): R;
      segmentsWithIntersectionOfLine_withExtendedCurve_intersectionOffsets<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_segmentsWithIntersectionOfLine: P0, _withExtendedCurve: P1, _intersectionOffsets: P2): R;
      segmentsWithIntersectionOfLine_withCurve_intersectionOffsets<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_segmentsWithIntersectionOfLine: P0, _withCurve: P1, _intersectionOffsets: P2): R;
      checkCurviness_curve2<R = boolean, P0 = unknown, P1 = unknown>(_checkCurviness: P0, _curve2: P1): R;
      checkLineLengthIsSane_oldCurve<R = boolean, P0 = unknown, P1 = unknown>(_checkLineLengthIsSane: P0, _oldCurve: P1): R;
      closestOffsetGreaterThan_inSet<R = unknown, P0 = number, P1 = unknown>(_closestOffsetGreaterThan: P0, _inSet: P1): R;
      closestOffsetLessThan_inSet<R = unknown, P0 = number, P1 = unknown>(_closestOffsetLessThan: P0, _inSet: P1): R;
    }
  }
}

declare const MSBezierLineCurveJoin: cocoa.MSBezierLineCurveJoin.CLASS;
