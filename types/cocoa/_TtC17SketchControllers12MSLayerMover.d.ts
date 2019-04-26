/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _TtC17SketchControllers12MSLayerMover<T0 = void, T1 = void, T2 = void> extends _TtC17SketchControllers6MSTool {
    reset<R = void>(): R;
    cancel<R = void>(): R;
    performMoveToLocation<R = unknown, P0 = CGPoint>(_performMoveToLocation: P0): R;
    beginWithItems<R = void, P0 = unknown>(_beginWithItems: P0): R;
    beginWithLayers_location<R = void, P0 = unknown, P1 = CGPoint>(_beginWithLayers: P0, _location: P1): R;
    alignmentRectInCoordinateSpace_options<R = CGRect, P0 = unknown, P1 = number>(_alignmentRectInCoordinateSpace: P0, _options: P1): R;
    hasChangedArtboard<R = boolean>(): R;
    setHasChangedArtboard<R = void, P0 = boolean>(_v: P0): R;
    alignmentConstraint<R = MSAlignmentEngineConstraint>(): R;
    setAlignmentConstraint<R = void, P0 = MSAlignmentEngineConstraint>(_v: P0): R;
    snapTargetProvider<R = _TtP17SketchControllers30MSLayerMoverSnapTargetProvider_>(): R;
    setSnapTargetProvider<R = void, P0 = _TtP17SketchControllers30MSLayerMoverSnapTargetProvider_>(_v: P0): R;
    zoomScale<R = number>(): R;
    setZoomScale<R = void, P0 = number>(_v: P0): R;
    originalLocation<R = CGPoint>(): R;
    setOriginalLocation<R = void, P0 = CGPoint>(_v: P0): R;
    bounds<R = CGRect>(): R;
    position<R = CGPoint>(): R;
    items<R = NSArray>(): R;
    setItems<R = void, P0 = NSArray>(_v: P0): R;
    // + _TtC17SketchControllers12MSLayerMover(SketchControllers):
    layers<R = NSArray>(): R;
  }
  namespace _TtC17SketchControllers12MSLayerMover {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _TtC17SketchControllers6MSTool {
      alloc<R = _TtC17SketchControllers12MSLayerMover>(): R;
      new: <R = _TtC17SketchControllers12MSLayerMover>() => R;
  
  }
  }
}
