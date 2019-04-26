/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNormalResizeLineEventHandler<T0 = void, T1 = void, T2 = void> extends MSNormalBaseEventHandler, MSAlignmentEngineDelegateProtocol {
    cursorForRadians<R = unknown, P0 = number>(_cursorForRadians: P0): R;
    displayResizeCursor<R = void>(): R;
    addSnapTargetsToEngine<R = void, P0 = unknown>(_addSnapTargetsToEngine: P0): R;
    prepareForSnapping<R = unknown>(): R;
    snapGuides<R = MSAlignmentEngineResult>(): R;
    setSnapGuides<R = void, P0 = MSAlignmentEngineResult>(_v: P0): R;
    eventData<R = MSNormalEventData>(): R;
    setEventData<R = void, P0 = MSNormalEventData>(_v: P0): R;
    layerSnapper<R = MSSnapper>(): R;
    setLayerSnapper<R = void, P0 = MSSnapper>(_v: P0): R;
    pointIndex<R = number>(): R;
    setPointIndex<R = void, P0 = number>(_v: P0): R;
    layer<R = MSShapePathLayer>(): R;
    setLayer<R = void, P0 = MSShapePathLayer>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSNormalResizeLineEventHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSNormalBaseEventHandler, MSAlignmentEngineDelegateProtocol {
      alloc<R = MSNormalResizeLineEventHandler>(): R;
      new: <R = MSNormalResizeLineEventHandler>() => R;
    }
  }
}

declare const MSNormalResizeLineEventHandler: cocoa.MSNormalResizeLineEventHandler.CLASS;
