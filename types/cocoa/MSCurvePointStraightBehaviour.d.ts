/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCurvePointStraightBehaviour<T0 = void, T1 = void, T2 = void> extends MSCurvePointBehaviour {}
  namespace MSCurvePointStraightBehaviour {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSCurvePointBehaviour {
      alloc<R = MSCurvePointStraightBehaviour>(): R;
      new: <R = MSCurvePointStraightBehaviour>() => R;
    }
  }
}

declare const MSCurvePointStraightBehaviour: cocoa.MSCurvePointStraightBehaviour.CLASS;
