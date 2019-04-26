/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNormalMultipleResizeEventHandler<T0 = void, T1 = void, T2 = void> extends MSNormalBaseEventHandler {
    oppositeCorner<R = number>(): R;
    placeRectInOppositeCorner<R = CGRect, P0 = CGRect>(_placeRectInOppositeCorner: P0): R;
    makeRectConform_toProportions<R = CGRect, P0 = CGRect, P1 = boolean>(_makeRectConform: P0, _toProportions: P1): R;
    validSnapEdgesForResizingCorner<R = number>(): R;
    snapRect<R = CGRect, P0 = CGRect>(_snapRect: P0): R;
    calculateOppositePoint<R = void>(): R;
    calculateMidPoint<R = void>(): R;
    displayResizeCursor<R = void>(): R;
    storeCurrentLayerFrame<R = void>(): R;
    flattenPathLayerIfNecessary<R = void, P0 = unknown>(_flattenPathLayerIfNecessary: P0): R;
    flattenShapeGroupIfNecessary<R = void, P0 = unknown>(_flattenShapeGroupIfNecessary: P0): R;
    flattenRotatedShapes<R = void>(): R;
    oppositePoint<R = CGPoint>(): R;
    setOppositePoint<R = void, P0 = CGPoint>(_v: P0): R;
    midPoint<R = CGPoint>(): R;
    setMidPoint<R = void, P0 = CGPoint>(_v: P0): R;
    absoluteLayerFramesBeforeResize<R = NSDictionary>(): R;
    setAbsoluteLayerFramesBeforeResize<R = void, P0 = NSDictionary>(_v: P0): R;
    layerFramesBeforeResize<R = NSDictionary>(): R;
    setLayerFramesBeforeResize<R = void, P0 = NSDictionary>(_v: P0): R;
    originalProportions<R = number>(): R;
    setOriginalProportions<R = void, P0 = number>(_v: P0): R;
    originalRect<R = CGRect>(): R;
    setOriginalRect<R = void, P0 = CGRect>(_v: P0): R;
    eventData<R = MSNormalEventData>(): R;
    setEventData<R = void, P0 = MSNormalEventData>(_v: P0): R;
    layerSnapper<R = MSSnapper>(): R;
    setLayerSnapper<R = void, P0 = MSSnapper>(_v: P0): R;
    resizingCorner<R = number>(): R;
    setResizingCorner<R = void, P0 = number>(_v: P0): R;
    layers<R = NSArray>(): R;
    setLayers<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace MSNormalMultipleResizeEventHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSNormalBaseEventHandler {
      alloc<R = MSNormalMultipleResizeEventHandler>(): R;
      new: <R = MSNormalMultipleResizeEventHandler>() => R;
    }
  }
}

declare const MSNormalMultipleResizeEventHandler: cocoa.MSNormalMultipleResizeEventHandler.CLASS;
