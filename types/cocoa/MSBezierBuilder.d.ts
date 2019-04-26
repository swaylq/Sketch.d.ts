/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBezierBuilder<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    addCurveFromPointAtIndex_toPointAtIndex_inArray_inRect_includingTrailingArc_toBezierPath_orCGPath<R = void, P0 = number, P1 = number, P2 = unknown, P3 = CGRect, P4 = boolean, P5 = unknown, P6 = CGPath>(_addCurveFromPointAtIndex: P0, _toPointAtIndex: P1, _inArray: P2, _inRect: P3, _includingTrailingArc: P4, _toBezierPath: P5, _orCGPath: P6): R;
    addLineToPointIfNecessary_toBezierPath_orCGPath<R = void, P0 = CGPoint, P1 = unknown, P2 = CGPath>(_addLineToPointIfNecessary: P0, _toBezierPath: P1, _orCGPath: P2): R;
    filletAtIndex_inPointArray_rect<R = unknown, P0 = number, P1 = unknown, P2 = CGRect>(_filletAtIndex: P0, _inPointArray: P1, _rect: P2): R;
    buildV1BezierPath_orCGPath<R = void, P0 = unknown, P1 = CGPath>(_buildV1BezierPath: P0, _orCGPath: P1): R;
    extendPath_orCGPath_toPoint_controlPoint1_controlPoint2<R = void, P0 = unknown, P1 = CGPath, P2 = CGPoint, P3 = CGPoint, P4 = CGPoint>(_extendPath: P0, _orCGPath: P1, _toPoint: P2, _controlPoint1: P3, _controlPoint2: P4): R;
    appendCurveFromPoint_toPoint_toBezierPath_orCGPath<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CGPath>(_appendCurveFromPoint: P0, _toPoint: P1, _toBezierPath: P2, _orCGPath: P3): R;
    bezierPathFromCurvePoint_toPoint<R = unknown, P0 = unknown, P1 = unknown>(_bezierPathFromCurvePoint: P0, _toPoint: P1): R;
    buildV0BezierPath_orCGPath<R = void, P0 = unknown, P1 = CGPath>(_buildV0BezierPath: P0, _orCGPath: P1): R;
    buildBezierPath_orCGPath<R = void, P0 = unknown, P1 = CGPath>(_buildBezierPath: P0, _orCGPath: P1): R;
    _bezierPath<R = unknown>(): R;
    _path<R = unknown>(): R;
    path<R = unknown>(): R;
    bezierPath<R = unknown>(): R;
    treatCurvePointAsRounded<R = boolean, P0 = unknown>(_treatCurvePointAsRounded: P0): R;
    isStraightLine<R = boolean>(): R;
    initWithPointRadiusBehavior<R = unknown, P0 = number>(_initWithPointRadiusBehavior: P0): R;
    filletCache<R = NSMutableDictionary>(): R;
    setFilletCache<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    pathShouldClose<R = boolean>(): R;
    setPathShouldClose<R = void, P0 = boolean>(_v: P0): R;
    points<R = NSArray>(): R;
    setPoints<R = void, P0 = NSArray>(_v: P0): R;
    rect<R = CGRect>(): R;
    setRect<R = void, P0 = CGRect>(_v: P0): R;
    pointRadiusBehaviour<R = number>(): R;
  }
  namespace MSBezierBuilder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSBezierBuilder>(): R;
      new: <R = MSBezierBuilder>() => R;
      bezierPathForSegmentAtIndex_inPath_inRect<R = unknown, P0 = number, P1 = unknown, P2 = CGRect>(_bezierPathForSegmentAtIndex: P0, _inPath: P1, _inRect: P2): R;
      pathWithPoints_inRect_shouldClose_pointRadiusBehaviour<R = unknown, P0 = unknown, P1 = CGRect, P2 = boolean, P3 = number>(_pathWithPoints: P0, _inRect: P1, _shouldClose: P2, _pointRadiusBehaviour: P3): R;
      bezierPathWithPoints_inRect_shouldClose_pointRadiusBehaviour<R = unknown, P0 = unknown, P1 = CGRect, P2 = boolean, P3 = number>(_bezierPathWithPoints: P0, _inRect: P1, _shouldClose: P2, _pointRadiusBehaviour: P3): R;
    }
  }
}

declare const MSBezierBuilder: cocoa.MSBezierBuilder.CLASS;
