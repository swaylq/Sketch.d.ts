/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCurvePointDisconnectedBehaviour<T0 = void, T1 = void, T2 = void> extends MSCurvePointBehaviour {}
  namespace MSCurvePointDisconnectedBehaviour {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSCurvePointBehaviour {
      alloc<R = MSCurvePointDisconnectedBehaviour>(): R;
      new: <R = MSCurvePointDisconnectedBehaviour>() => R;
    }
  }
}

declare const MSCurvePointDisconnectedBehaviour: cocoa.MSCurvePointDisconnectedBehaviour.CLASS;
