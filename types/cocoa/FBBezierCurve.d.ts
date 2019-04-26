/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface FBBezierCurve<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    debugQuickLookObject<R = unknown>(): R;
    debugDrawColor_controlPointColor_scale<R = void, P0 = unknown, P1 = unknown, P2 = number>(_debugDrawColor: P0, _controlPointColor: P1, _scale: P2): R;
    sortCrossings<R = void>(): R;
    isNext<R = boolean, P0 = unknown>(_isNext: P0): R;
    crossesEdge_atIntersectRange<R = boolean, P0 = unknown, P1 = unknown>(_crossesEdge: P0, _atIntersectRange: P1): R;
    crossesEdge_atIntersection<R = boolean, P0 = unknown, P1 = unknown>(_crossesEdge: P0, _atIntersection: P1): R;
    hasCrossingsUsingNonself<R = boolean, P0 = boolean>(_hasCrossingsUsingNonself: P0): R;
    lastCrossingUsingNonself<R = unknown, P0 = boolean>(_lastCrossingUsingNonself: P0): R;
    firstCrossingUsingNonself<R = unknown, P0 = boolean>(_firstCrossingUsingNonself: P0): R;
    selfIntersectingEdgesWithBlock<R = void, P0 = CDUnknownBlockType>(_selfIntersectingEdgesWithBlock: P0): R;
    intersectingEdgesWithBlock<R = void, P0 = CDUnknownBlockType>(_intersectingEdgesWithBlock: P0): R;
    previousCrossing<R = unknown, P0 = unknown>(_previousCrossing: P0): R;
    nextCrossing<R = unknown, P0 = unknown>(_nextCrossing: P0): R;
    crossingsCopyWithBlock<R = void, P0 = CDUnknownBlockType>(_crossingsCopyWithBlock: P0): R;
    crossingsWithBlock<R = void, P0 = CDUnknownBlockType>(_crossingsWithBlock: P0): R;
    removeCrossingsInNonCrossingOverlapRuns<R = void>(): R;
    reorderCoincidentCrossingA_crossingB<R = void, P0 = unknown, P1 = unknown>(_reorderCoincidentCrossingA: P0, _crossingB: P1): R;
    removeDuplicateCrossings<R = void>(): R;
    removeAllCrossings<R = void>(): R;
    removeCrossing<R = void, P0 = unknown>(_removeCrossing: P0): R;
    addCrossing<R = void, P0 = unknown>(_addCrossing: P0): R;
    description<R = unknown>(): R;
    edgesWithFlatness<R = unknown, P0 = number>(_edgesWithFlatness: P0): R;
    clone<R = unknown>(): R;
    bezierPath<R = unknown>(): R;
    tangentAtParameter<R = CGPoint, P0 = number>(_tangentAtParameter: P0): R;
    tangentFromLeftOffset<R = CGPoint, P0 = number>(_tangentFromLeftOffset: P0): R;
    tangentFromRightOffset<R = CGPoint, P0 = number>(_tangentFromRightOffset: P0): R;
    pointFromLeftOffset<R = CGPoint, P0 = number>(_pointFromLeftOffset: P0): R;
    pointFromRightOffset<R = CGPoint, P0 = number>(_pointFromRightOffset: P0): R;
    closestLocationToPoint<R = FBBezierCurveLocation, P0 = CGPoint>(_closestLocationToPoint: P0): R;
    lengthAtParameter<R = number, P0 = number>(_lengthAtParameter: P0): R;
    length<R = number>(): R;
    refineParameter_forPoint<R = number, P0 = number, P1 = CGPoint>(_refineParameter: P0, _forPoint: P1): R;
    pointAtParameter_leftBezierCurve_rightBezierCurve<R = CGPoint, P0 = number, P1 = unknown, P2 = unknown>(_pointAtParameter: P0, _leftBezierCurve: P1, _rightBezierCurve: P2): R;
    pointAtParameter<R = CGPoint, P0 = number>(_pointAtParameter: P0): R;
    curveWithTransform<R = unknown, P0 = CGAffineTransform>(_curveWithTransform: P0): R;
    reversedCurve<R = unknown>(): R;
    splitSubcurvesWithRange_left_middle_right<R = void, P0 = FBRange, P1 = unknown, P2 = unknown, P3 = unknown>(_splitSubcurvesWithRange: P0, _left: P1, _middle: P2, _right: P3): R;
    subcurveWithRange<R = unknown, P0 = FBRange>(_subcurveWithRange: P0): R;
    intersectionsWithBezierCurve_overlapRange_withBlock<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_intersectionsWithBezierCurve: P0, _overlapRange: P1, _withBlock: P2): R;
    doesHaveIntersectionsWithBezierCurve<R = boolean, P0 = unknown>(_doesHaveIntersectionsWithBezierCurve: P0): R;
    mightIntersectWith<R = boolean, P0 = unknown>(_mightIntersectWith: P0): R;
    checkForLine<R = void>(): R;
    initWithLineStartPoint_endPoint_contour<R = unknown, P0 = CGPoint, P1 = CGPoint, P2 = unknown>(_initWithLineStartPoint: P0, _endPoint: P1, _contour: P2): R;
    initWithEndPoint1_controlPoint1_controlPoint2_endPoint2_contour<R = unknown, P0 = CGPoint, P1 = CGPoint, P2 = CGPoint, P3 = CGPoint, P4 = unknown>(_initWithEndPoint1: P0, _controlPoint1: P1, _controlPoint2: P2, _endPoint2: P3, _contour: P4): R;
    initWithBezierCurveData<R = unknown, P0 = FBBezierCurveData>(_initWithBezierCurveData: P0): R;
    data<R = FBBezierCurveData>(): R;
    startShared<R = boolean>(): R;
    setStartShared<R = void, P0 = boolean>(_v: P0): R;
    index<R = number>(): R;
    setIndex<R = void, P0 = number>(_v: P0): R;
    contour<R = FBBezierContour>(): R;
    setContour<R = void, P0 = FBBezierContour>(_v: P0): R;
    lastCrossing<R = FBEdgeCrossing>(): R;
    firstCrossing<R = FBEdgeCrossing>(): R;
    crossings<R = NSArray>(): R;
    hasCrossings<R = boolean>(): R;
    previousNonpointNonHorizontalLine<R = FBBezierCurve>(): R;
    nextNonpointNonHorizontalLine<R = FBBezierCurve>(): R;
    previousNonpoint<R = FBBezierCurve>(): R;
    nextNonpoint<R = FBBezierCurve>(): R;
    previous<R = FBBezierCurve>(): R;
    next<R = FBBezierCurve>(): R;
    crossings_<R = NSMutableArray>(): R;
    flatness<R = number>(): R;
    boundingRect<R = CGRect>(): R;
    bounds<R = CGRect>(): R;
    isPointOrHorizontalLine<R = boolean>(): R;
    isHorizontalLine<R = boolean>(): R;
    looksLikeLine<R = boolean>(): R;
    isEndHorizontal<R = boolean>(): R;
    isStartHorizontal<R = boolean>(): R;
    point<R = boolean>(): R;
    isStraightLine<R = boolean>(): R;
    endPoint2<R = CGPoint>(): R;
    controlPoint2<R = CGPoint>(): R;
    controlPoint1<R = CGPoint>(): R;
    endPoint1<R = CGPoint>(): R;
  }
  namespace FBBezierCurve {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = FBBezierCurve>(): R;
      new: <R = FBBezierCurve>() => R;
      bezierCurveWithBezierCurveData<R = unknown, P0 = FBBezierCurveData>(_bezierCurveWithBezierCurveData: P0): R;
      bezierCurveWithEndPoint1_controlPoint1_controlPoint2_endPoint2<R = unknown, P0 = CGPoint, P1 = CGPoint, P2 = CGPoint, P3 = CGPoint>(_bezierCurveWithEndPoint1: P0, _controlPoint1: P1, _controlPoint2: P2, _endPoint2: P3): R;
      bezierCurveWithLineStartPoint_endPoint<R = unknown, P0 = CGPoint, P1 = CGPoint>(_bezierCurveWithLineStartPoint: P0, _endPoint: P1): R;
      bezierCurvesFromBezierPath<R = unknown, P0 = unknown>(_bezierCurvesFromBezierPath: P0): R;
    }
  }
}

declare const FBBezierCurve: cocoa.FBBezierCurve.CLASS;
