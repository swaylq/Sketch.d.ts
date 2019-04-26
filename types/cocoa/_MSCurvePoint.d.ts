/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSCurvePoint<T0 = void, T1 = void, T2 = void> extends MSModelObject {
    hasDefaultValues<R = boolean>(): R;
    point<R = CGPoint>(): R;
    setPoint<R = void, P0 = CGPoint>(_v: P0): R;
    hasCurveTo<R = boolean>(): R;
    setHasCurveTo<R = void, P0 = boolean>(_v: P0): R;
    hasCurveFrom<R = boolean>(): R;
    setHasCurveFrom<R = void, P0 = boolean>(_v: P0): R;
    curveTo<R = CGPoint>(): R;
    setCurveTo<R = void, P0 = CGPoint>(_v: P0): R;
    curveMode<R = number>(): R;
    setCurveMode<R = void, P0 = number>(_v: P0): R;
    curveFrom<R = CGPoint>(): R;
    setCurveFrom<R = void, P0 = CGPoint>(_v: P0): R;
    cornerRadius<R = number>(): R;
    setCornerRadius<R = void, P0 = number>(_v: P0): R;
  }
  namespace _MSCurvePoint {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSModelObject {
      alloc<R = _MSCurvePoint>(): R;
      new: <R = _MSCurvePoint>() => R;
    }
  }
}
