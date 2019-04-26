/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface FBEdgeOverlapRun<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    debugQuickLookObject<R = unknown>(): R;
    edgeOverlapsWithBlock<R = void, P0 = CDUnknownBlockType>(_edgeOverlapsWithBlock: P0): R;
    description<R = unknown>(): R;
    middleIntersection<R = unknown>(): R;
    addStopCrossing<R = void>(): R;
    addStartCrossing<R = void>(): R;
    addMiddleCrossing<R = void>(): R;
    removeCrossings<R = void>(): R;
    isCrossingUsingNonZeroWindingRule<R = boolean>(): R;
    isCrossing<R = boolean>(): R;
    isCrossingWithOutsetLines<R = boolean>(): R;
    isCrossingWithTangentsOnly<R = boolean>(): R;
    doesContainParameter_onEdge<R = boolean, P0 = number, P1 = unknown>(_doesContainParameter: P0, _onEdge: P1): R;
    doesContainCrossing<R = boolean, P0 = unknown>(_doesContainCrossing: P0): R;
    isComplete<R = boolean>(): R;
    insertOverlap<R = boolean, P0 = unknown>(_insertOverlap: P0): R;
    calculateContour2StartStopInsides<R = void>(): R;
    calculateContour1StartStopInsides<R = void>(): R;
    contour2TestPoints<R = FBEdgeOverlapRunTestPoints>(): R;
    contour1TestPoints<R = FBEdgeOverlapRunTestPoints>(): R;
    overlaps<R = NSArray>(): R;
    contour2<R = FBBezierContour>(): R;
    contour1<R = FBBezierContour>(): R;
    crossingType<R = number>(): R;
    stopIsInsideContour2<R = boolean>(): R;
    stopIsInsideContour1<R = boolean>(): R;
    startIsInsideContour2<R = boolean>(): R;
    startIsInsideContour1<R = boolean>(): R;
  }
  namespace FBEdgeOverlapRun {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = FBEdgeOverlapRun>(): R;
      new: <R = FBEdgeOverlapRun>() => R;
      overlapRun<R = unknown>(): R;
    }
  }
}

declare const FBEdgeOverlapRun: cocoa.FBEdgeOverlapRun.CLASS;
