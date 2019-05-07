/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerMeasurementTarget<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    initWithLayer_guides<R = unknown, P0 = unknown, P1 = unknown>(_initWithLayer: P0, _guides: P1): R;
    guideLines<R = NSArray>(): R;
    layer<R = MSLayer>(): R;
  }
  namespace MSLayerMeasurementTarget {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSLayerMeasurementTarget>(): R;
      new: <R = MSLayerMeasurementTarget>() => R;
    }
  }
}

declare const MSLayerMeasurementTarget: cocoa.MSLayerMeasurementTarget.CLASS;
