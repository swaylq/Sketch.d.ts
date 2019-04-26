/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRulerSnapTargetGenerator<T0 = void, T1 = void, T2 = void> extends NSObject {
    zoomScale<R = number>(): R;
    setZoomScale<R = void, P0 = number>(_v: P0): R;
    // + MSRulerSnapTargetGenerator(SketchControllers): 
    generateTargetsForPage_output<R = void, P0 = unknown, P1 = unknown>(_generateTargetsForPage: P0, _output: P1): R;
    // + MSRulerSnapTargetGenerator(SketchControllers):
    mask<R = number>(): R;
    setMask<R = void, P0 = number>(_v: P0): R;
  }
  namespace MSRulerSnapTargetGenerator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSRulerSnapTargetGenerator>(): R;
      new: <R = MSRulerSnapTargetGenerator>() => R;
  
  }
  }
}

declare const MSRulerSnapTargetGenerator: cocoa.MSRulerSnapTargetGenerator.CLASS;
