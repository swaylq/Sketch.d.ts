/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableCurvePoint<T0 = void, T1 = void, T2 = void> extends _MSImmutableCurvePoint, MSCurvePointProtocol {
    isEffectivelyStraight<R = boolean>(): R;
    isRounded<R = boolean>(): R;
    isStraight<R = boolean>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSImmutableCurvePoint {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableCurvePoint, MSCurvePointProtocol {
      alloc<R = MSImmutableCurvePoint>(): R;
      new: <R = MSImmutableCurvePoint>() => R;
    }
  }
}

declare const MSImmutableCurvePoint: cocoa.MSImmutableCurvePoint.CLASS;
