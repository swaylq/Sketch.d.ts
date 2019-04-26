/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerDragController<T0 = void, T1 = void, T2 = void> extends MSToolController {
    cxx_destruct<R = void>(): R;
    layerMover_provideTargetsToSnapper<R = void, P0 = unknown, P1 = unknown>(_layerMover: P0, _provideTargetsToSnapper: P1): R;
    endDuplicating<R = void, P0 = boolean>(_endDuplicating: P0): R;
    beginDuplicating<R = void>(): R;
    updateWithState_location_duplicate<R = void, P0 = number, P1 = CGPoint, P2 = boolean>(_updateWithState: P0, _location: P1, _duplicate: P2): R;
    beginWithLayers_location<R = void, P0 = unknown, P1 = CGPoint>(_beginWithLayers: P0, _location: P1): R;
    userInterface<R = MSDragLayerToolUserInterface>(): R;
    setUserInterface<R = void, P0 = MSDragLayerToolUserInterface>(_v: P0): R;
    snapperData<R = MSSnapperData>(): R;
    setSnapperData<R = void, P0 = MSSnapperData>(_v: P0): R;
    alignmentAxis<R = NSNumber>(): R;
    setAlignmentAxis<R = void, P0 = NSNumber>(_v: P0): R;
    rulersAreVisible<R = boolean>(): R;
    setRulersAreVisible<R = void, P0 = boolean>(_v: P0): R;
    visibleRect<R = CGRect>(): R;
    setVisibleRect<R = void, P0 = CGRect>(_v: P0): R;
    zoomScale<R = number>(): R;
    setZoomScale<R = void, P0 = number>(_v: P0): R;
    snappingEnabled<R = boolean>(): R;
    setSnappingEnabled<R = void, P0 = boolean>(_v: P0): R;
    originalLayers<R = NSArray>(): R;
    duplicating<R = boolean>(): R;
    layerMover<R = _TtC17SketchControllers12MSLayerMover>(): R;
    cursor<R = NSCursor>(): R;
    layers<R = NSArray>(): R;
  }
  namespace MSLayerDragController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSToolController {
      alloc<R = MSLayerDragController>(): R;
      new: <R = MSLayerDragController>() => R;
    }
  }
}

declare const MSLayerDragController: cocoa.MSLayerDragController.CLASS;
