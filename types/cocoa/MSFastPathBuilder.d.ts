/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFastPathBuilder<T0 = void, T1 = void, T2 = void> extends NSObject {
    flushPath_cachedPoint2<R = void, P0 = unknown, P1 = CGPoint>(_flushPath: P0, _cachedPoint2: P1): R;
    addPoint_toPath_cachedPoint1_cachedPoint2<R = void, P0 = CGPoint, P1 = unknown, P2 = CGPoint, P3 = CGPoint>(_addPoint: P0, _toPath: P1, _cachedPoint1: P2, _cachedPoint2: P3): R;
    removeSegment_fromSegmentPath<R = void, P0 = unknown, P1 = unknown>(_removeSegment: P0, _fromSegmentPath: P1): R;
    unwindOneSegmentPath_intoPath<R = void, P0 = unknown, P1 = unknown>(_unwindOneSegmentPath: P0, _intoPath: P1): R;
    convertSegmentsIntoPath<R = unknown, P0 = unknown>(_convertSegmentsIntoPath: P0): R;
    pointFromValue<R = CGPoint, P0 = unknown>(_pointFromValue: P0): R;
    valueFromPoint<R = unknown, P0 = CGPoint>(_valueFromPoint: P0): R;
    insertLineStart_end_intoDictionary<R = void, P0 = CGPoint, P1 = CGPoint, P2 = unknown>(_insertLineStart: P0, _end: P1, _intoDictionary: P2): R;
    buildLineSegments<R = unknown>(): R;
    path<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithMask<R = unknown, P0 = CGImage>(_initWithMask: P0): R;
  }
  namespace MSFastPathBuilder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSFastPathBuilder>(): R;
      new: <R = MSFastPathBuilder>() => R;
      pathForMaskImage<R = unknown, P0 = unknown>(_pathForMaskImage: P0): R;
    }
  }
}

declare const MSFastPathBuilder: cocoa.MSFastPathBuilder.CLASS;
