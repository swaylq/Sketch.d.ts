/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSVectorAdjustmentHandle<T0 = void, T1 = void, T2 = void> extends MSVectorHandle {
    locationOfMainPoint<R = CGPoint>(): R;
    setLocationOfMainPoint<R = void, P0 = CGPoint>(_v: P0): R;
  }
  namespace MSVectorAdjustmentHandle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSVectorHandle {
      alloc<R = MSVectorAdjustmentHandle>(): R;
      new: <R = MSVectorAdjustmentHandle>() => R;
    }
  }
}

declare const MSVectorAdjustmentHandle: cocoa.MSVectorAdjustmentHandle.CLASS;
