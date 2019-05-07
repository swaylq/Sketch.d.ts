/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface FBEdgeOverlap<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    debugQuickLookObject<R = unknown>(): R;
    description<R = unknown>(): R;
    doesContainParameter_onEdge_startExtends_endExtends<R = boolean, P0 = number, P1 = unknown, P2 = boolean, P3 = boolean>(_doesContainParameter: P0, _onEdge: P1, _startExtends: P2, _endExtends: P3): R;
    middleIntersection<R = unknown>(): R;
    addStopCrossing<R = void, P0 = unknown>(_addStopCrossing: P0): R;
    addMiddleCrossing<R = void, P0 = unknown>(_addMiddleCrossing: P0): R;
    addStartCrossing<R = void, P0 = unknown>(_addStartCrossing: P0): R;
    addIntersection_overlapRun<R = void, P0 = unknown, P1 = unknown>(_addIntersection: P0, _overlapRun: P1): R;
    fitsAfter<R = boolean, P0 = unknown>(_fitsAfter: P0): R;
    fitsBefore<R = boolean, P0 = unknown>(_fitsBefore: P0): R;
    initWithRange_edge1_edge2<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithRange: P0, _edge1: P1, _edge2: P2): R;
    edge2<R = FBBezierCurve>(): R;
    edge1<R = FBBezierCurve>(): R;
    range<R = FBBezierIntersectRange>(): R;
  }
  namespace FBEdgeOverlap {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = FBEdgeOverlap>(): R;
      new: <R = FBEdgeOverlap>() => R;
      overlapWithRange_edge1_edge2<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_overlapWithRange: P0, _edge1: P1, _edge2: P2): R;
    }
  }
}

declare const FBEdgeOverlap: cocoa.FBEdgeOverlap.CLASS;
