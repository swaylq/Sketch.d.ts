/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlowSegment<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    segmentsByClippingToRect<R = unknown, P0 = CGRect>(_segmentsByClippingToRect: P0): R;
    initWithBezierSegment_startType_endType<R = unknown, P0 = unknown, P1 = number, P2 = number>(_initWithBezierSegment: P0, _startType: P1, _endType: P2): R;
    bezierSegment<R = MSBezierSegment>(): R;
    endType<R = number>(): R;
    startType<R = number>(): R;
  }
  namespace MSFlowSegment {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSFlowSegment>(): R;
      new: <R = MSFlowSegment>() => R;
      segmentWithBezierSegment_startType_endType<R = unknown, P0 = unknown, P1 = number, P2 = number>(_segmentWithBezierSegment: P0, _startType: P1, _endType: P2): R;
      segmentWithBezierSegment<R = unknown, P0 = unknown>(_segmentWithBezierSegment: P0): R;
    }
  }
}

declare const MSFlowSegment: cocoa.MSFlowSegment.CLASS;
