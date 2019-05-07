/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArc<T0 = void, T1 = void, T2 = void> extends NSObject {
    debugQuickLookObject<R = unknown>(): R;
    bezierPath<R = unknown>(): R;
    endpoint2Tangent<R = BCLine>(): R;
    endpoint1Tangent<R = BCLine>(): R;
    absoluteErrorWithSegment<R = number, P0 = unknown>(_absoluteErrorWithSegment: P0): R;
    initWithEndPoint1_endPoint2_center_clockwise<R = unknown, P0 = CGPoint, P1 = CGPoint, P2 = CGPoint, P3 = boolean>(_initWithEndPoint1: P0, _endPoint2: P1, _center: P2, _clockwise: P3): R;
    initLineWithEndPoint1_endPoint2<R = unknown, P0 = CGPoint, P1 = CGPoint>(_initLineWithEndPoint1: P0, _endPoint2: P1): R;
    isALine<R = boolean>(): R;
    clockwise<R = boolean>(): R;
    center<R = CGPoint>(): R;
    endPoint2<R = CGPoint>(): R;
    endPoint1<R = CGPoint>(): R;
    endTangent<R = BCLine>(): R;
    startTangent<R = BCLine>(): R;
    endNormal<R = CGVector>(): R;
    startNormal<R = CGVector>(): R;
    endAngle<R = number>(): R;
    startAngle<R = number>(): R;
    radius<R = number>(): R;
  }
  namespace MSArc {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSArc>(): R;
      new: <R = MSArc>() => R;
      lineWithEndPoint1_endPoint2<R = unknown, P0 = CGPoint, P1 = CGPoint>(_lineWithEndPoint1: P0, _endPoint2: P1): R;
      arcWithEndPoint1_endPoint2_center_clockwise<R = unknown, P0 = CGPoint, P1 = CGPoint, P2 = CGPoint, P3 = boolean>(_arcWithEndPoint1: P0, _endPoint2: P1, _center: P2, _clockwise: P3): R;
      biarcApproximationForSegment_absoluteError<R = unknown, P0 = unknown, P1 = number>(_biarcApproximationForSegment: P0, _absoluteError: P1): R;
      singleArcApproximationForSegment<R = unknown, P0 = unknown>(_singleArcApproximationForSegment: P0): R;
      arcWithPoints_endPoint2_onCurvePoint<R = unknown, P0 = CGPoint, P1 = CGPoint, P2 = CGPoint>(_arcWithPoints: P0, _endPoint2: P1, _onCurvePoint: P2): R;
      arcApproximationForSegment_absoluteError<R = unknown, P0 = unknown, P1 = number>(_arcApproximationForSegment: P0, _absoluteError: P1): R;
      arcApproximationForSegment_maximumError<R = unknown, P0 = unknown, P1 = number>(_arcApproximationForSegment: P0, _maximumError: P1): R;
    }
  }
}

declare const MSArc: cocoa.MSArc.CLASS;
