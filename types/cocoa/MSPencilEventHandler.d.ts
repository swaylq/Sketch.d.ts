/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPencilEventHandler<T0 = void, T1 = void, T2 = void> extends MSEventHandler {
    addCurvePoint<R = void, P0 = unknown>(_addCurvePoint: P0): R;
    addPoint<R = void, P0 = CGPoint>(_addPoint: P0): R;
    pathShouldClose<R = boolean>(): R;
    removeRedundantPoints<R = void, P0 = unknown>(_removeRedundantPoints: P0): R;
    fittedBezierPathFromShapePath<R = unknown, P0 = unknown>(_fittedBezierPathFromShapePath: P0): R;
    unflattenResult<R = void>(): R;
    selectShape<R = void>(): R;
    removeShape<R = void>(): R;
    finishShapeOrRemoveIfEmpty<R = void>(): R;
    adjustStyleForGroup<R = void, P0 = unknown>(_adjustStyleForGroup: P0): R;
    insertNewShapeForEditingAtPoint<R = void, P0 = CGPoint>(_insertNewShapeForEditingAtPoint: P0): R;
    lastMouse<R = CGPoint>(): R;
    setLastMouse<R = void, P0 = CGPoint>(_v: P0): R;
    isDragging<R = boolean>(): R;
    setIsDragging<R = void, P0 = boolean>(_v: P0): R;
    currentGroup<R = MSLayerGroup>(): R;
    setCurrentGroup<R = void, P0 = MSLayerGroup>(_v: P0): R;
    shape<R = MSShapePathLayer>(): R;
    setShape<R = void, P0 = MSShapePathLayer>(_v: P0): R;
  }
  namespace MSPencilEventHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSEventHandler {
      alloc<R = MSPencilEventHandler>(): R;
      new: <R = MSPencilEventHandler>() => R;
    }
  }
}

declare const MSPencilEventHandler: cocoa.MSPencilEventHandler.CLASS;
