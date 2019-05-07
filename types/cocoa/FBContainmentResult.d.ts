/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface FBContainmentResult<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    debugQuickLookObject<R = unknown>(): R;
    initWithTestContour_inGraph_evenOddInside_nonZeroInside_testEdge_intersections<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = number, P4 = unknown, P5 = unknown>(_initWithTestContour: P0, _inGraph: P1, _evenOddInside: P2, _nonZeroInside: P3, _testEdge: P4, _intersections: P5): R;
    container<R = FBBezierContour>(): R;
    setContainer<R = void, P0 = FBBezierContour>(_v: P0): R;
    containerDetermined<R = boolean>(): R;
    setContainerDetermined<R = void, P0 = boolean>(_v: P0): R;
    graph<R = FBBezierGraph>(): R;
    testContour<R = FBBezierContour>(): R;
    intersections<R = NSArray>(): R;
    testEdge<R = FBBezierCurve>(): R;
    nonZero<R = number>(): R;
    evenOdd<R = number>(): R;
  }
  namespace FBContainmentResult {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = FBContainmentResult>(): R;
      new: <R = FBContainmentResult>() => R;
    }
  }
}

declare const FBContainmentResult: cocoa.FBContainmentResult.CLASS;
