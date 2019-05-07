/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface FBBezierContour<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    cxx_destruct<R = void>(): R;
    debugQuickLookObject<R = unknown>(): R;
    debugDrawColor_scale<R = void, P0 = unknown, P1 = number>(_debugDrawColor: P0, _scale: P1): R;
    contourByMergingLinearRuns<R = unknown>(): R;
    firstNonPoint<R = unknown>(): R;
    debugPathForWindingRuleContainmentAtEdge_parameter_point_withTransform_andSizeTransform<R = unknown, P0 = unknown, P1 = number, P2 = CGPoint, P3 = CGAffineTransform, P4 = CGAffineTransform>(_debugPathForWindingRuleContainmentAtEdge: P0, _parameter: P1, _point: P2, _withTransform: P3, _andSizeTransform: P4): R;
    debugPathForWindingRuleContainmentWithTransform_andSizeTransform<R = unknown, P0 = CGAffineTransform, P1 = CGAffineTransform>(_debugPathForWindingRuleContainmentWithTransform: P0, _andSizeTransform: P1): R;
    debugPathForJointsWithTransform_andSizeTransform<R = unknown, P0 = CGAffineTransform, P1 = CGAffineTransform>(_debugPathForJointsWithTransform: P0, _andSizeTransform: P1): R;
    debugPathForIntersectionType_withTransform_andSizeTransform<R = unknown, P0 = number, P1 = CGAffineTransform, P2 = CGAffineTransform>(_debugPathForIntersectionType: P0, _withTransform: P1, _andSizeTransform: P2): R;
    description<R = unknown>(): R;
    closestLocationToPoint<R = unknown, P0 = CGPoint>(_closestLocationToPoint: P0): R;
    clone<R = unknown>(): R;
    doesOverlapContainParameter_onEdge<R = boolean, P0 = number, P1 = unknown>(_doesOverlapContainParameter: P0, _onEdge: P1): R;
    doesOverlapContainCrossing<R = boolean, P0 = unknown>(_doesOverlapContainCrossing: P0): R;
    forEachEdgeOverlapDo<R = void, P0 = CDUnknownBlockType>(_forEachEdgeOverlapDo: P0): R;
    isEquivalent<R = boolean, P0 = unknown>(_isEquivalent: P0): R;
    removeAllOverlaps<R = void>(): R;
    addOverlap<R = void, P0 = unknown>(_addOverlap: P0): R;
    addSelfIntersectingContoursToArray_originalContour<R = void, P0 = unknown, P1 = unknown>(_addSelfIntersectingContoursToArray: P0, _originalContour: P1): R;
    debugPathForContainmentOfCrossing_transform<R = unknown, P0 = unknown, P1 = CGAffineTransform>(_debugPathForContainmentOfCrossing: P0, _transform: P1): R;
    containsCrossingUsingNonZeroWindingRule<R = boolean, P0 = unknown>(_containsCrossingUsingNonZeroWindingRule: P0): R;
    adjustWindingCount_forIntersection_testRay<R = number, P0 = number, P1 = unknown, P2 = unknown>(_adjustWindingCount: P0, _forIntersection: P1, _testRay: P2): R;
    crossingContainmentRay<R = unknown, P0 = CGPoint>(_crossingContainmentRay: P0): R;
    intersection_isReallyTheSameAs<R = boolean, P0 = unknown, P1 = unknown>(_intersection: P0, _isReallyTheSameAs: P1): R;
    containsPointUsingNonZeroWindingRule<R = boolean, P0 = CGPoint>(_containsPointUsingNonZeroWindingRule: P0): R;
    containsUsingNonZeroWindingRulePoint_onEdge_atParameter<R = boolean, P0 = CGPoint, P1 = unknown, P2 = number>(_containsUsingNonZeroWindingRulePoint: P0, _onEdge: P1, _atParameter: P2): R;
    intersection_isReallyTheSameAsCurve_atParameter<R = boolean, P0 = unknown, P1 = unknown, P2 = number>(_intersection: P0, _isReallyTheSameAsCurve: P1, _atParameter: P2): R;
    adjustWindingCount_onEdge_atParameter<R = number, P0 = number, P1 = unknown, P2 = number>(_adjustWindingCount: P0, _onEdge: P1, _atParameter: P2): R;
    isInflectionPointOnEdge_atParameter<R = boolean, P0 = unknown, P1 = number>(_isInflectionPointOnEdge: P0, _atParameter: P1): R;
    markSelfCrossingsOnEdge_startParameter_stopParameter_isEntry_withBlock<R = boolean, P0 = unknown, P1 = number, P2 = number, P3 = boolean, P4 = CDUnknownBlockType>(_markSelfCrossingsOnEdge: P0, _startParameter: P1, _stopParameter: P2, _isEntry: P3, _withBlock: P4): R;
    markSelfCrossingsAsEntryOrExit<R = void>(): R;
    sortCoincidentCrossings<R = void>(): R;
    allCrossingsWithGroupedCoincidentPairs<R = unknown>(): R;
    isCrossing_betweenStartEdge_parameter_andCrossing<R = boolean, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown>(_isCrossing: P0, _betweenStartEdge: P1, _parameter: P2, _andCrossing: P3): R;
    crossesOwnContour<R = boolean, P0 = unknown>(_crossesOwnContour: P0): R;
    contourMadeClockwiseIfNecessary<R = unknown>(): R;
    contourWithFlatness<R = unknown, P0 = number>(_contourWithFlatness: P0): R;
    contourWithTransform<R = unknown, P0 = CGAffineTransform>(_contourWithTransform: P0): R;
    reversedContour<R = unknown>(): R;
    close<R = void>(): R;
    bezierPathFromEdge_toEdge<R = unknown, P0 = unknown, P1 = unknown>(_bezierPathFromEdge: P0, _toEdge: P1): R;
    bezierPath<R = unknown>(): R;
    contourAndSelfIntersectingContoursContainPoint<R = boolean, P0 = CGPoint>(_contourAndSelfIntersectingContoursContainPoint: P0): R;
    markCrossingsOnEdge_startParameter_stopParameter_otherContours_isEntry<R = boolean, P0 = unknown, P1 = number, P2 = number, P3 = unknown, P4 = boolean>(_markCrossingsOnEdge: P0, _startParameter: P1, _stopParameter: P2, _otherContours: P3, _isEntry: P4): R;
    markCrossingsAsEntryOrExitWithContour_markInside<R = void, P0 = unknown, P1 = boolean>(_markCrossingsAsEntryOrExitWithContour: P0, _markInside: P1): R;
    startingEdge_parameter_point_skipHorizontals_skipInflectionPoints<R = void, P0 = unknown, P1 = number, P2 = CGPoint, P3 = boolean, P4 = boolean>(_startingEdge: P0, _parameter: P1, _point: P2, _skipHorizontals: P3, _skipInflectionPoints: P4): R;
    testRayForContainment<R = unknown, P0 = CGRect>(_testRayForContainment: P0): R;
    startEdgeSkipHorizontals_skipInflectionPoints<R = unknown, P0 = boolean, P1 = boolean>(_startEdgeSkipHorizontals: P0, _skipInflectionPoints: P1): R;
    startEdge<R = unknown>(): R;
    intersectionsWithRay_withBlock<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_intersectionsWithRay: P0, _withBlock: P1): R;
    numberOfIntersectionsWithRay<R = number, P0 = unknown>(_numberOfIntersectionsWithRay: P0): R;
    containsPoint<R = boolean, P0 = CGPoint>(_containsPoint: P0): R;
    addReverseCurveFrom_to<R = void, P0 = unknown, P1 = unknown>(_addReverseCurveFrom: P0, _to: P1): R;
    addReverseCurve<R = void, P0 = unknown>(_addReverseCurve: P0): R;
    addCurveFrom_to<R = void, P0 = unknown, P1 = unknown>(_addCurveFrom: P0, _to: P1): R;
    addCurve<R = void, P0 = unknown>(_addCurve: P0): R;
    dealloc<R = void>(): R;
    inside<R = number>(): R;
    setInside<R = void, P0 = number>(_v: P0): R;
    edges<R = NSArray>(): R;
    selfIntersectingContours<R = NSArray>(): R;
    intersectingContours<R = NSArray>(): R;
    direction<R = number>(): R;
    cachedDirection<R = NSNumber>(): R;
    setCachedDirection<R = void, P0 = NSNumber>(_v: P0): R;
    isClosed<R = boolean>(): R;
    CGPath<R = CGPath>(): R;
    isEmpty<R = boolean>(): R;
    firstPoint<R = CGPoint>(): R;
    boundingRect<R = CGRect>(): R;
    bounds<R = CGRect>(): R;
    nonPointEdges<R = NSArray>(): R;
    crossings<R = NSArray>(): R;
    overlaps_<R = NSMutableArray>(): R;
    overlaps<R = NSArray>(): R;
  }
  namespace FBBezierContour {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = FBBezierContour>(): R;
      new: <R = FBBezierContour>() => R;
      bezierContourWithCurve<R = unknown, P0 = unknown>(_bezierContourWithCurve: P0): R;
    }
  }
}

declare const FBBezierContour: cocoa.FBBezierContour.CLASS;
