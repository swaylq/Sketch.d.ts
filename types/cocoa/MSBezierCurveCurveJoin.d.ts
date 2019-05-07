/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBezierCurveCurveJoin<T0 = void, T1 = void, T2 = void> extends MSBezierLineCurveJoin {}
  namespace MSBezierCurveCurveJoin {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBezierLineCurveJoin {
      alloc<R = MSBezierCurveCurveJoin>(): R;
      new: <R = MSBezierCurveCurveJoin>() => R;
      segmentsWithIntersectionOfExtendTangentFromCurve_withExtendedTangentFromCurve<R = unknown, P0 = unknown, P1 = unknown>(_segmentsWithIntersectionOfExtendTangentFromCurve: P0, _withExtendedTangentFromCurve: P1): R;
      segmentsWithIntersectionOfMirrorOfCurve1_withMirrorOfCurve2<R = unknown, P0 = unknown, P1 = unknown>(_segmentsWithIntersectionOfMirrorOfCurve1: P0, _withMirrorOfCurve2: P1): R;
      segmentsWithIntersectionOfCurve1_withCurve2<R = unknown, P0 = unknown, P1 = unknown>(_segmentsWithIntersectionOfCurve1: P0, _withCurve2: P1): R;
      firstIntersectionOnSegment1InSet<R = unknown, P0 = unknown>(_firstIntersectionOnSegment1InSet: P0): R;
      checkLineLengthIsSaneForEndPoint_endPoint2_line1_line2<R = boolean, P0 = CGPoint, P1 = CGPoint, P2 = unknown, P3 = unknown>(_checkLineLengthIsSaneForEndPoint: P0, _endPoint2: P1, _line1: P2, _line2: P3): R;
    }
  }
}

declare const MSBezierCurveCurveJoin: cocoa.MSBezierCurveCurveJoin.CLASS;
