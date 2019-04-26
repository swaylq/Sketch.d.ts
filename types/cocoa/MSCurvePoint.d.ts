/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCurvePoint<T0 = void, T1 = void, T2 = void> extends _MSCurvePoint, MSCurvePointProtocol, NSCopyingProtocol {
    multiplyBy<R = void, P0 = number>(_multiplyBy: P0): R;
    moveCurveFromTo<R = void, P0 = CGPoint>(_moveCurveFromTo: P0): R;
    moveCurveToTo<R = void, P0 = CGPoint>(_moveCurveToTo: P0): R;
    movePointTo<R = void, P0 = CGPoint>(_movePointTo: P0): R;
    locationOfPoint<R = CGPoint, P0 = number>(_locationOfPoint: P0): R;
    inferCurveMode<R = void>(): R;
    isRounded<R = boolean>(): R;
    changeCurveModeTo_usingPoint<R = void, P0 = number, P1 = number>(_changeCurveModeTo: P0, _usingPoint: P1): R;
    currentBehaviour<R = unknown>(): R;
    initWithPoint_curveTo_curveFrom<R = unknown, P0 = CGPoint, P1 = CGPoint, P2 = CGPoint>(_initWithPoint: P0, _curveTo: P1, _curveFrom: P2): R;
    initWithPoint<R = unknown, P0 = CGPoint>(_initWithPoint: P0): R;
    description<R = NSString>(): R;
    isEffectivelyStraight<R = boolean>(): R;
    isStraight<R = boolean>(): R;
    debugDescription<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSCurvePoint {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSCurvePoint, MSCurvePointProtocol, NSCopyingProtocol {
      alloc<R = MSCurvePoint>(): R;
      new: <R = MSCurvePoint>() => R;
      pointWithPoint_curveTo_curveFrom<R = unknown, P0 = CGPoint, P1 = CGPoint, P2 = CGPoint>(_pointWithPoint: P0, _curveTo: P1, _curveFrom: P2): R;
      pointWithPoint<R = unknown, P0 = CGPoint>(_pointWithPoint: P0): R;
      point<R = unknown>(): R;
    }
  }
}

declare const MSCurvePoint: cocoa.MSCurvePoint.CLASS;
