/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCurvePointMirroredBehaviour<T0 = void, T1 = void, T2 = void> extends MSCurvePointBehaviour {}
  namespace MSCurvePointMirroredBehaviour {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSCurvePointBehaviour {
      alloc<R = MSCurvePointMirroredBehaviour>(): R;
      new: <R = MSCurvePointMirroredBehaviour>() => R;
    }
  }
}

declare const MSCurvePointMirroredBehaviour: cocoa.MSCurvePointMirroredBehaviour.CLASS;
