/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCurvePointAsymmetricBehaviour<T0 = void, T1 = void, T2 = void> extends MSCurvePointBehaviour {}
  namespace MSCurvePointAsymmetricBehaviour {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSCurvePointBehaviour {
      alloc<R = MSCurvePointAsymmetricBehaviour>(): R;
      new: <R = MSCurvePointAsymmetricBehaviour>() => R;
    }
  }
}

declare const MSCurvePointAsymmetricBehaviour: cocoa.MSCurvePointAsymmetricBehaviour.CLASS;
