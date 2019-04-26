/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBezierIntersection<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    debugQuickLookObject<R = unknown>(): R;
    initWithSegment1_segment2_segment1Offset_segment2Offset<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = number>(_initWithSegment1: P0, _segment2: P1, _segment1Offset: P2, _segment2Offset: P3): R;
    segment2Offset<R = number>(): R;
    segment1Offset<R = number>(): R;
    segment2<R = MSBezierSegment>(): R;
    segment1<R = MSBezierSegment>(): R;
  }
  namespace MSBezierIntersection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSBezierIntersection>(): R;
      new: <R = MSBezierIntersection>() => R;
      intersectionWithSegment1_segment2_segment1Offset_segment2Offset<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = number>(_intersectionWithSegment1: P0, _segment2: P1, _segment1Offset: P2, _segment2Offset: P3): R;
    }
  }
}

declare const MSBezierIntersection: cocoa.MSBezierIntersection.CLASS;
