/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSmartRotateEventHandler<T = any> extends cocoa.MSEventHandler {
    unregisterObservers<R = void>(): R;
    registerObservers<R = void>(): R;
    rotationForRepetitionAtIndex<R = number, P0 = number>(_rotationForRepetitionAtIndex: P0): R;
    drawControlPoints<R = void>(): R;
    tryToSnapPoint_toMid<R = cocoa.CGPoint, P0 = cocoa.CGPoint, P1 = cocoa.CGPoint>(_tryToSnapPoint: P0, _toMid: P1): R;
    rotateCopies<R = void>(): R;
    adjustGroup<R = void>(): R;
    transformForRotatingShape_toIndex<R = unknown, P0 = unknown, P1 = number>(_transformForRotatingShape: P0, _toIndex: P1): R;
    adjustFrameForShapeCopy_shape_index<R = void, P0 = unknown, P1 = unknown, P2 = number>(_adjustFrameForShapeCopy: P0, _shape: P1, _index: P2): R;
    adjustBooleanOperationForShapeCopyIfNecessary<R = void, P0 = unknown>(_adjustBooleanOperationForShapeCopyIfNecessary: P0): R;
    adjustRotationForShapeCopy_atIndex_baseRotation<R = void, P0 = unknown, P1 = number, P2 = number>(_adjustRotationForShapeCopy: P0, _atIndex: P1, _baseRotation: P2): R;
    rotateCopy_ofShape_toIndex<R = void, P0 = unknown, P1 = unknown, P2 = number>(_rotateCopy: P0, _ofShape: P1, _toIndex: P2): R;
    rotateCopiesForShape_shapeIndex<R = void, P0 = unknown, P1 = number>(_rotateCopiesForShape: P0, _shapeIndex: P1): R;
    determineOriginalRotationCenter<R = void>(): R;
    createShapeCopies<R = void>(): R;
    findShapes<R = void>(): R;
    shapeLayersCopies<R = cocoa.NSArray>(): R;
    setShapeLayersCopies<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    shapeLayers<R = cocoa.NSArray>(): R;
    setShapeLayers<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    numberOfRepetitions<R = number>(): R;
    setNumberOfRepetitions<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface MSSmartRotateEventHandler<T = any> extends cocoa.classes.MSEventHandler {
      alloc<R = MSSmartRotateEventHandler>(): R;
      new: <R = MSSmartRotateEventHandler>() => R;
    }
  }
}

declare const MSSmartRotateEventHandler: cocoa.classes.MSSmartRotateEventHandler;
