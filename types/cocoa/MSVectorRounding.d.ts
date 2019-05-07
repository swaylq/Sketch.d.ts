/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSVectorRounding<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSVectorRounding {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSVectorRounding>(): R;
      new: <R = MSVectorRounding>() => R;
      roundPoint<R = CGPoint, P0 = CGPoint>(_roundPoint: P0): R;
      roundPoint_layer<R = CGPoint, P0 = CGPoint, P1 = unknown>(_roundPoint: P0, _layer: P1): R;
      precision<R = number>(): R;
    }
  }
}

declare const MSVectorRounding: cocoa.MSVectorRounding.CLASS;
