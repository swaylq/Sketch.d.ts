/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerDraggingSnapTargetGenerator<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = CDUnknownBlockType>(): R;
    initWithTool<R = unknown, P0 = unknown>(_initWithTool: P0): R;
    visibleRect<R = CGRect>(): R;
    setVisibleRect<R = void, P0 = CGRect>(_v: P0): R;
    zoomScale<R = number>(): R;
    setZoomScale<R = void, P0 = number>(_v: P0): R;
    rulersAreVisible<R = boolean>(): R;
    setRulersAreVisible<R = void, P0 = boolean>(_v: P0): R;
    tool<R = _TtC17SketchControllers12MSLayerMover>(): R;
    // + MSLayerDraggingSnapTargetGenerator(SketchControllers): 
    provideTargetsToSnapper<R = void, P0 = unknown>(_provideTargetsToSnapper: P0): R;
    // + MSLayerDraggingSnapTargetGenerator(SketchControllers1): 
    debugQuickLookObject<R = unknown>(): R;
  }
  namespace MSLayerDraggingSnapTargetGenerator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSLayerDraggingSnapTargetGenerator>(): R;
      new: <R = MSLayerDraggingSnapTargetGenerator>() => R;
  
  }
  }
}

declare const MSLayerDraggingSnapTargetGenerator: cocoa.MSLayerDraggingSnapTargetGenerator.CLASS;
