/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSVGBlendMode<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSSVGBlendMode {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSSVGBlendMode>(): R;
      new: <R = MSSVGBlendMode>() => R;
      svgFromSketchBlendMode<R = unknown, P0 = number>(_svgFromSketchBlendMode: P0): R;
      sketchBlendModeFromSVG<R = number, P0 = unknown>(_sketchBlendModeFromSVG: P0): R;
      initialize<R = void>(): R;
    }
  }
}

declare const MSSVGBlendMode: cocoa.MSSVGBlendMode.CLASS;
