/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTransformEventHandler<T0 = void, T1 = void, T2 = void> extends MSPointsEventHandler {
    coordinateSpace<R = unknown>(): R;
    resetTransformsForLayer<R = void, P0 = unknown>(_resetTransformsForLayer: P0): R;
    transformLayers<R = void>(): R;
    cursorForCorner<R = unknown, P0 = number>(_cursorForCorner: P0): R;
    replacePointAtCorner_withPoint<R = void, P0 = number, P1 = CGPoint>(_replacePointAtCorner: P0, _withPoint: P1): R;
    pointAtCorner<R = CGPoint, P0 = number>(_pointAtCorner: P0): R;
    movePointsRelatedToCorner_newLocation_previous_modifierFlags<R = void, P0 = number, P1 = CGPoint, P2 = CGPoint, P3 = number>(_movePointsRelatedToCorner: P0, _newLocation: P1, _previous: P2, _modifierFlags: P3): R;
    recordOriginalShapes<R = void>(): R;
    firstSelectedLocation<R = CGPoint>(): R;
    setFirstSelectedLocation<R = void, P0 = CGPoint>(_v: P0): R;
    directionLock<R = number>(): R;
    setDirectionLock<R = void, P0 = number>(_v: P0): R;
    currentGroup<R = MSLayerGroup>(): R;
    setCurrentGroup<R = void, P0 = MSLayerGroup>(_v: P0): R;
    originalPoints<R = NSMutableArray>(): R;
    setOriginalPoints<R = void, P0 = NSMutableArray>(_v: P0): R;
    transform<R = DKDistortionTransform>(): R;
    setTransform<R = void, P0 = DKDistortionTransform>(_v: P0): R;
    shapeMapping<R = NSMapTable>(): R;
    setShapeMapping<R = void, P0 = NSMapTable>(_v: P0): R;
    mouseDownPoints<R = MSPointArray>(): R;
    setMouseDownPoints<R = void, P0 = MSPointArray>(_v: P0): R;
    transformPoints<R = MSPointArray>(): R;
    setTransformPoints<R = void, P0 = MSPointArray>(_v: P0): R;
    originalRect<R = CGRect>(): R;
    setOriginalRect<R = void, P0 = CGRect>(_v: P0): R;
  }
  namespace MSTransformEventHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSPointsEventHandler {
      alloc<R = MSTransformEventHandler>(): R;
      new: <R = MSTransformEventHandler>() => R;
    }
  }
}

declare const MSTransformEventHandler: cocoa.MSTransformEventHandler.CLASS;
