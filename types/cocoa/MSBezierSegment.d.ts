/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBezierSegment<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    debugQuickLookObject<R = unknown>(): R;
    description<R = unknown>(): R;
    repr<R = unknown>(): R;
    bezierPath<R = unknown>(): R;
    isEqualToBezierSegment<R = boolean, P0 = unknown>(_isEqualToBezierSegment: P0): R;
    bounds<R = CGRect>(): R;
    normalizedSegment<R = unknown>(): R;
    reversedSegment<R = unknown>(): R;
    representationUsingType<R = unknown, P0 = number>(_representationUsingType: P0): R;
    cubicRepresentation<R = unknown>(): R;
    quadraticRepresentation<R = unknown>(): R;
    lineRepresentation<R = unknown>(): R;
    segmentWithInset<R = unknown, P0 = number>(_segmentWithInset: P0): R;
    segmentsWithFlatness<R = unknown, P0 = number>(_segmentsWithFlatness: P0): R;
    segmentWithTransform<R = unknown, P0 = CGAffineTransform>(_segmentWithTransform: P0): R;
    segmentByMovingPointAtOffset_toLocation<R = unknown, P0 = number, P1 = CGPoint>(_segmentByMovingPointAtOffset: P0, _toLocation: P1): R;
    segmentFromOffset<R = unknown, P0 = number>(_segmentFromOffset: P0): R;
    segmentToOffset<R = unknown, P0 = number>(_segmentToOffset: P0): R;
    intersectionsWithSegment<R = unknown, P0 = unknown>(_intersectionsWithSegment: P0): R;
    offsetsOfIntersectionsWithTangent<R = unknown, P0 = MSLine>(_offsetsOfIntersectionsWithTangent: P0): R;
    offsetForNormalToPoint<R = number, P0 = CGPoint>(_offsetForNormalToPoint: P0): R;
    curvatureAtOffset<R = number, P0 = number>(_curvatureAtOffset: P0): R;
    curvatureAtEndPoint2<R = number>(): R;
    curvatureAtEndPoint1<R = number>(): R;
    curvatureFromPoint1_point2_point3<R = number, P0 = CGPoint, P1 = CGPoint, P2 = CGPoint>(_curvatureFromPoint1: P0, _point2: P1, _point3: P2): R;
    pointAtOffset<R = CGPoint, P0 = number>(_pointAtOffset: P0): R;
    tangentAtOffset<R = MSLine, P0 = number>(_tangentAtOffset: P0): R;
    tanget_andPoint_atOffset<R = void, P0 = MSLine, P1 = CGPoint, P2 = number>(_tanget: P0, _andPoint: P1, _atOffset: P2): R;
    quadraticDeCasteljauAt_points<R = void, P0 = number, P1 = CGPoint>(_quadraticDeCasteljauAt: P0, _points: P1): R;
    cubicDeCasteljauAt_points<R = void, P0 = number, P1 = CGPoint>(_cubicDeCasteljauAt: P0, _points: P1): R;
    arcLengthWithSegments<R = number, P0 = number>(_arcLengthWithSegments: P0): R;
    segmentMirroredAtOffset<R = unknown, P0 = number>(_segmentMirroredAtOffset: P0): R;
    segmentWithEndPoint2<R = unknown, P0 = CGPoint>(_segmentWithEndPoint2: P0): R;
    segmentWithEndPoint1<R = unknown, P0 = CGPoint>(_segmentWithEndPoint1: P0): R;
    initWithEndPoint1_endPoint2_controlPoint1_controlPoint2<R = unknown, P0 = CGPoint, P1 = CGPoint, P2 = CGPoint, P3 = CGPoint>(_initWithEndPoint1: P0, _endPoint2: P1, _controlPoint1: P2, _controlPoint2: P3): R;
    initWithEndPoint1_endPoint2_controlPoint<R = unknown, P0 = CGPoint, P1 = CGPoint, P2 = CGPoint>(_initWithEndPoint1: P0, _endPoint2: P1, _controlPoint: P2): R;
    initWithEndPoint1_endPoint2<R = unknown, P0 = CGPoint, P1 = CGPoint>(_initWithEndPoint1: P0, _endPoint2: P1): R;
    segmentBySmoothingEndPoints_decay<R = unknown, P0 = number, P1 = number>(_segmentBySmoothingEndPoints: P0, _decay: P1): R;
    derivative<R = MSBezierSegment>(): R;
    setDerivative<R = void, P0 = MSBezierSegment>(_v: P0): R;
    inflectionOffsets<R = NSSet>(): R;
    setInflectionOffsets<R = void, P0 = NSSet>(_v: P0): R;
    yAxisRoots<R = NSSet>(): R;
    setYAxisRoots<R = void, P0 = NSSet>(_v: P0): R;
    xAxisRoots<R = NSSet>(): R;
    setXAxisRoots<R = void, P0 = NSSet>(_v: P0): R;
    controlPoint2<R = CGPoint>(): R;
    controlPoint1<R = CGPoint>(): R;
    endPoint2<R = CGPoint>(): R;
    endPoint1<R = CGPoint>(): R;
    segmentType<R = number>(): R;
    flatness<R = number>(): R;
    curviness<R = number>(): R;
    transformForXAxisAlignment<R = CGAffineTransform>(): R;
    lineSegment<R = MSLineSegment>(): R;
    isAPoint<R = boolean>(): R;
    looksLikeALine<R = boolean>(): R;
    arcLength<R = number>(): R;
    lineLength<R = number>(): R;
  }
  namespace MSBezierSegment {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSBezierSegment>(): R;
      new: <R = MSBezierSegment>() => R;
      cubicSegmentWithEndPoint1_endPoint2_controlPoint1_controlPoint2<R = unknown, P0 = CGPoint, P1 = CGPoint, P2 = CGPoint, P3 = CGPoint>(_cubicSegmentWithEndPoint1: P0, _endPoint2: P1, _controlPoint1: P2, _controlPoint2: P3): R;
      quadraticSegmentWithEndPoint1_endPoint2_controlPoint<R = unknown, P0 = CGPoint, P1 = CGPoint, P2 = CGPoint>(_quadraticSegmentWithEndPoint1: P0, _endPoint2: P1, _controlPoint: P2): R;
      lineSegmentWithEndPoint1_endPoint2<R = unknown, P0 = CGPoint, P1 = CGPoint>(_lineSegmentWithEndPoint1: P0, _endPoint2: P1): R;
    }
  }
}

declare const MSBezierSegment: cocoa.MSBezierSegment.CLASS;
