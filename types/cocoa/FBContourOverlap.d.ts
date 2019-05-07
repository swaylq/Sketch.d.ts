/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface FBContourOverlap<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    debugQuickLookObject<R = unknown>(): R;
    description<R = unknown>(): R;
    isBetweenContour_andContour<R = boolean, P0 = unknown, P1 = unknown>(_isBetweenContour: P0, _andContour: P1): R;
    isEmpty<R = boolean>(): R;
    isComplete<R = boolean>(): R;
    reset<R = void>(): R;
    runsWithBlock<R = void, P0 = CDUnknownBlockType>(_runsWithBlock: P0): R;
    doesContainParameter_onEdge<R = boolean, P0 = number, P1 = unknown>(_doesContainParameter: P0, _onEdge: P1): R;
    doesContainCrossing<R = boolean, P0 = unknown>(_doesContainCrossing: P0): R;
    addOverlap_forEdge1_edge2<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_addOverlap: P0, _forEdge1: P1, _edge2: P2): R;
    contour2<R = FBBezierContour>(): R;
    contour1<R = FBBezierContour>(): R;
    overlapRuns<R = NSArray>(): R;
    runs_<R = NSMutableArray>(): R;
  }
  namespace FBContourOverlap {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = FBContourOverlap>(): R;
      new: <R = FBContourOverlap>() => R;
      contourOverlap<R = unknown>(): R;
    }
  }
}

declare const FBContourOverlap: cocoa.FBContourOverlap.CLASS;
