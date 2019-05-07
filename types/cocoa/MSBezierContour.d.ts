/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBezierContour<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    debugQuickLookObject<R = unknown>(): R;
    intersectionsWithSegment<R = unknown, P0 = unknown>(_intersectionsWithSegment: P0): R;
    contourWithInset_joinStrategy<R = unknown, P0 = number, P1 = number>(_contourWithInset: P0, _joinStrategy: P1): R;
    contourWithInset<R = unknown, P0 = number>(_contourWithInset: P0): R;
    rejoinSegments_joinStrategy_closed<R = unknown, P0 = unknown, P1 = number, P2 = boolean>(_rejoinSegments: P0, _joinStrategy: P1, _closed: P2): R;
    segmentsByDiscardingTinySegments_closed<R = unknown, P0 = unknown, P1 = boolean>(_segmentsByDiscardingTinySegments: P0, _closed: P1): R;
    segmentsByCheckingForPointsInJoin<R = unknown, P0 = unknown>(_segmentsByCheckingForPointsInJoin: P0): R;
    simplifiedSegments<R = unknown>(): R;
    segmentsWithFlatness<R = unknown, P0 = number>(_segmentsWithFlatness: P0): R;
    simplifySegment<R = unknown, P0 = unknown>(_simplifySegment: P0): R;
    simplifiedSegmentsBySplittingSegment_atOffset<R = unknown, P0 = unknown, P1 = number>(_simplifiedSegmentsBySplittingSegment: P0, _atOffset: P1): R;
    segmentBeforeSegment_inArray_closed<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean>(_segmentBeforeSegment: P0, _inArray: P1, _closed: P2): R;
    segmentAfterSegment_inArray_closed<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean>(_segmentAfterSegment: P0, _inArray: P1, _closed: P2): R;
    segmentAfter<R = unknown, P0 = unknown>(_segmentAfter: P0): R;
    segmentBefore<R = unknown, P0 = unknown>(_segmentBefore: P0): R;
    closedContour<R = unknown>(): R;
    reversedContour<R = unknown>(): R;
    calculateIsClockwise<R = boolean>(): R;
    createPath<R = unknown>(): R;
    doSegmentsFormARectangle_closed<R = boolean, P0 = unknown, P1 = boolean>(_doSegmentsFormARectangle: P0, _closed: P1): R;
    calculateBounds<R = CGRect>(): R;
    initWithSegments_closed<R = unknown, P0 = unknown, P1 = boolean>(_initWithSegments: P0, _closed: P1): R;
    segments<R = NSArray>(): R;
    closed<R = boolean>(): R;
    clockwise<R = boolean>(): R;
    path<R = MSPath>(): R;
    isRectangular<R = boolean>(): R;
    bounds<R = CGRect>(): R;
  }
  namespace MSBezierContour {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSBezierContour>(): R;
      new: <R = MSBezierContour>() => R;
      contourWithPolygonAtPoint_radius_sides<R = unknown, P0 = CGPoint, P1 = number, P2 = number>(_contourWithPolygonAtPoint: P0, _radius: P1, _sides: P2): R;
      contourWithRect<R = unknown, P0 = CGRect>(_contourWithRect: P0): R;
    }
  }
}

declare const MSBezierContour: cocoa.MSBezierContour.CLASS;
