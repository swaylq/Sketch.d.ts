/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface FBBezierGraph<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    debugQuickLookObject<R = unknown>(): R;
    bezierGraphBySplittingSelfCrossingContours<R = unknown, P0 = unknown>(_bezierGraphBySplittingSelfCrossingContours: P0): R;
    bezierGraphByTrimmingSelfCrossingContours<R = unknown>(): R;
    bezierGraphByMergingLinearRunsInContours<R = unknown>(): R;
    contoursWithoutCrossings<R = unknown>(): R;
    contourHasCrossings<R = boolean, P0 = unknown>(_contourHasCrossings: P0): R;
    contourFromCurves<R = unknown, P0 = unknown>(_contourFromCurves: P0): R;
    nextCrossingFromCrossing_curves<R = unknown, P0 = unknown, P1 = unknown>(_nextCrossingFromCrossing: P0, _curves: P1): R;
    curveFromCrossing_to<R = unknown, P0 = unknown, P1 = unknown>(_curveFromCrossing: P0, _to: P1): R;
    bezierGraphWithTransform<R = unknown, P0 = CGAffineTransform>(_bezierGraphWithTransform: P0): R;
    description<R = unknown>(): R;
    debugFindCurvesThatShouldIntersectWith_withBlock<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_debugFindCurvesThatShouldIntersectWith: P0, _withBlock: P1): R;
    debuggingInsertIntersectionsWithBezierGraph<R = void, P0 = unknown>(_debuggingInsertIntersectionsWithBezierGraph: P0): R;
    debuggingInsertCrossingsForFillConversion<R = void>(): R;
    debuggingInsertCrossingsWithBezierGraph_markInside_markOtherInside<R = void, P0 = unknown, P1 = boolean, P2 = boolean>(_debuggingInsertCrossingsWithBezierGraph: P0, _markInside: P1, _markOtherInside: P2): R;
    debuggingInsertCrossingsForDifferenceWithBezierGraph<R = void, P0 = unknown>(_debuggingInsertCrossingsForDifferenceWithBezierGraph: P0): R;
    debuggingInsertCrossingsForIntersectWithBezierGraph<R = void, P0 = unknown>(_debuggingInsertCrossingsForIntersectWithBezierGraph: P0): R;
    debuggingInsertCrossingsForUnionWithBezierGraph<R = void, P0 = unknown>(_debuggingInsertCrossingsForUnionWithBezierGraph: P0): R;
    nonselfIntersectingContours<R = unknown>(): R;
    nonintersectingContours<R = unknown>(): R;
    disjointContours<R = unknown>(): R;
    addContour<R = void, P0 = unknown>(_addContour: P0): R;
    removeOverlaps<R = void>(): R;
    removeCrossings<R = void>(): R;
    bezierGraphFromNonselfIntersections<R = unknown, P0 = boolean>(_bezierGraphFromNonselfIntersections: P0): R;
    addReverseCurvesFromCrossing_useNonself_toContour<R = unknown, P0 = unknown, P1 = boolean, P2 = unknown>(_addReverseCurvesFromCrossing: P0, _useNonself: P1, _toContour: P2): R;
    addCurvesFromCrossing_useNonself_toContour<R = unknown, P0 = unknown, P1 = boolean, P2 = unknown>(_addCurvesFromCrossing: P0, _useNonself: P1, _toContour: P2): R;
    firstUnprocessedCrossing<R = unknown, P0 = boolean>(_firstUnprocessedCrossing: P0): R;
    markAllCrossingsAsUnprocessed<R = void>(): R;
    removeCrossings_forContours<R = void, P0 = unknown, P1 = unknown>(_removeCrossings: P0, _forContours: P1): R;
    removeContoursThatDontContain<R = void, P0 = unknown>(_removeContoursThatDontContain: P0): R;
    removeContourCrossings_thatDontAppearIn<R = void, P0 = unknown, P1 = unknown>(_removeContourCrossings: P0, _thatDontAppearIn: P1): R;
    contoursFromCrossings<R = unknown, P0 = unknown>(_contoursFromCrossings: P0): R;
    eliminateContainers_thatDontContainContour_usingRay<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_eliminateContainers: P0, _thatDontContainContour: P1, _usingRay: P2): R;
    numberOfTimesContour_appearsInCrossings<R = number, P0 = unknown, P1 = unknown>(_numberOfTimesContour: P0, _appearsInCrossings: P1): R;
    findCrossingsOnContainers_onRay_beforeMinimum_afterMaximum_crossingsBefore_crossingsAfter<R = boolean, P0 = unknown, P1 = unknown, P2 = CGPoint, P3 = CGPoint, P4 = unknown, P5 = unknown>(_findCrossingsOnContainers: P0, _onRay: P1, _beforeMinimum: P2, _afterMaximum: P3, _crossingsBefore: P4, _crossingsAfter: P5): R;
    findBoundsOfContour_onRay_minimum_maximum<R = boolean, P0 = unknown, P1 = unknown, P2 = CGPoint, P3 = CGPoint>(_findBoundsOfContour: P0, _onRay: P1, _minimum: P2, _maximum: P3): R;
    containsContour<R = boolean, P0 = unknown>(_containsContour: P0): R;
    debugPathForJointsOfContour<R = unknown, P0 = unknown>(_debugPathForJointsOfContour: P0): R;
    debugPathForContainmentOfContour_transform<R = unknown, P0 = unknown, P1 = CGAffineTransform>(_debugPathForContainmentOfContour: P0, _transform: P1): R;
    debugPathForContainmentOfContour<R = unknown, P0 = unknown>(_debugPathForContainmentOfContour: P0): R;
    closestCrossingToPoint<R = unknown, P0 = CGPoint>(_closestCrossingToPoint: P0): R;
    closestLocationToPoint<R = unknown, P0 = CGPoint>(_closestLocationToPoint: P0): R;
    contourInsides<R = number, P0 = unknown>(_contourInsides: P0): R;
    containmentResultForContour<R = unknown, P0 = unknown>(_containmentResultForContour: P0): R;
    insertSelfCrossings<R = void>(): R;
    insertContourSelfCrossings<R = void>(): R;
    isIntersection_atJoinOfEdge_andEdge<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_isIntersection: P0, _atJoinOfEdge: P1, _andEdge: P2): R;
    sortCoincidentCrossings<R = void>(): R;
    removeDuplicateCrossings<R = void>(): R;
    insertCrossingsAtOverlapMiddle<R = void>(): R;
    removeCrossingsInOverlapsWithTypes<R = void, P0 = number>(_removeCrossingsInOverlapsWithTypes: P0): R;
    removeCrossingsInNonCrossingOverlapRuns<R = void>(): R;
    cleanupCrossingsWithBezierGraph<R = void, P0 = unknown>(_cleanupCrossingsWithBezierGraph: P0): R;
    insertCrossingsWithBezierGraph_overlapRunCrossingTypes_crossingPosition<R = number, P0 = unknown, P1 = number, P2 = number>(_insertCrossingsWithBezierGraph: P0, _overlapRunCrossingTypes: P1, _crossingPosition: P2): R;
    insertCrossingsWithBezierGraph<R = number, P0 = unknown>(_insertCrossingsWithBezierGraph: P0): R;
    bezierPathWithClass<R = unknown, P0 = unknown>(_bezierPathWithClass: P0): R;
    bezierPath<R = unknown>(): R;
    bezierGraphWithClockwiseFillsAnticlockwiseHoles<R = unknown>(): R;
    noneWithBezierGraph<R = unknown, P0 = unknown>(_noneWithBezierGraph: P0): R;
    xorWithBezierGraph<R = unknown, P0 = unknown>(_xorWithBezierGraph: P0): R;
    markSelfCrossingsAsEntryOrExit<R = void>(): R;
    markCrossingsAsEntryOrExitWithBezierGraph_markInside<R = void, P0 = unknown, P1 = boolean>(_markCrossingsAsEntryOrExitWithBezierGraph: P0, _markInside: P1): R;
    differenceEquivalentNonintersectingContours_withContours_results<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_differenceEquivalentNonintersectingContours: P0, _withContours: P1, _results: P2): R;
    differenceWithBezierGraph<R = unknown, P0 = unknown>(_differenceWithBezierGraph: P0): R;
    intersectEquivalentNonintersectingContours_withContours_results<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_intersectEquivalentNonintersectingContours: P0, _withContours: P1, _results: P2): R;
    intersectNonintersectingPartsIntoGraph_withGraph<R = void, P0 = unknown, P1 = unknown>(_intersectNonintersectingPartsIntoGraph: P0, _withGraph: P1): R;
    intersectWithBezierGraph<R = unknown, P0 = unknown>(_intersectWithBezierGraph: P0): R;
    unionEquivalentNonintersectingContours_withContours_results<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_unionEquivalentNonintersectingContours: P0, _withContours: P1, _results: P2): R;
    unionNonintersectingPartsIntoGraph_withGraph<R = void, P0 = unknown, P1 = unknown>(_unionNonintersectingPartsIntoGraph: P0, _withGraph: P1): R;
    unionWithBezierGraph<R = unknown, P0 = unknown>(_unionWithBezierGraph: P0): R;
    performOperationWithGraph_inBlock<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_performOperationWithGraph: P0, _inBlock: P1): R;
    convertToEvenOddWindingRule<R = unknown>(): R;
    convertToNoneZeroWindingRule<R = unknown>(): R;
    contourByFollowingCrossingsFromEdge_atOffset<R = unknown, P0 = unknown, P1 = number>(_contourByFollowingCrossingsFromEdge: P0, _atOffset: P1): R;
    contourByFollowingUnprocessedCrossingsFromCrossing<R = unknown, P0 = unknown>(_contourByFollowingUnprocessedCrossingsFromCrossing: P0): R;
    dealloc<R = void>(): R;
    initWithBezierPath_orCGPath<R = unknown, P0 = unknown, P1 = CGPath>(_initWithBezierPath: P0, _orCGPath: P1): R;
    initWithBezierPath<R = unknown, P0 = unknown>(_initWithBezierPath: P0): R;
    initWithCGPath<R = unknown, P0 = CGPath>(_initWithCGPath: P0): R;
    insertedSelfCrossings<R = boolean>(): R;
    setInsertedSelfCrossings<R = void, P0 = boolean>(_v: P0): R;
    CGPath<R = CGPath>(): R;
    setCGPath<R = void, P0 = CGPath>(_v: P0): R;
    contours<R = NSArray>(): R;
    nonEmptyContours<R = NSArray>(): R;
    bounds<R = CGRect>(): R;
  }
  namespace FBBezierGraph {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = FBBezierGraph>(): R;
      new: <R = FBBezierGraph>() => R;
      bezierGraph<R = unknown>(): R;
      bezierGraphWithContours<R = unknown, P0 = unknown>(_bezierGraphWithContours: P0): R;
      bezierGraphWithBezierPath<R = unknown, P0 = unknown>(_bezierGraphWithBezierPath: P0): R;
      bezierGraphWithCGPath<R = unknown, P0 = CGPath>(_bezierGraphWithCGPath: P0): R;
    }
  }
}

declare const FBBezierGraph: cocoa.FBBezierGraph.CLASS;
