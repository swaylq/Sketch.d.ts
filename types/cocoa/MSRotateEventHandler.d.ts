/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRotateEventHandler<T0 = void, T1 = void, T2 = void> extends MSNormalBaseEventHandler, MSAlignmentEngineDelegateProtocol, NSTouchBarDelegateProtocol {
    rotationBarAction<R = void, P0 = unknown>(_rotationBarAction: P0): R;
    drawRotationCenterAtZoomScale<R = void, P0 = number>(_drawRotationCenterAtZoomScale: P0): R;
    alignDegreesTo15Angles<R = number, P0 = number>(_alignDegreesTo15Angles: P0): R;
    dragLayer<R = void, P0 = unknown>(_dragLayer: P0): R;
    dragCenterPoint<R = void, P0 = unknown>(_dragCenterPoint: P0): R;
    handleDrag<R = void, P0 = unknown>(_handleDrag: P0): R;
    handleRotation<R = void, P0 = unknown>(_handleRotation: P0): R;
    componentAtPoint<R = number, P0 = CGPoint>(_componentAtPoint: P0): R;
    rotationCenterPointForAnchorPoint_layer<R = CGPoint, P0 = CGPoint, P1 = unknown>(_rotationCenterPointForAnchorPoint: P0, _layer: P1): R;
    setRotationCenterPoint_updateAnchorPoints<R = void, P0 = CGPoint, P1 = boolean>(_setRotationCenterPoint: P0, _updateAnchorPoints: P1): R;
    resetWithSelection<R = void, P0 = unknown>(_resetWithSelection: P0): R;
    centerPointSnaps<R = MSAlignmentEngineResult>(): R;
    setCenterPointSnaps<R = void, P0 = MSAlignmentEngineResult>(_v: P0): R;
    draggedComponent<R = number>(): R;
    setDraggedComponent<R = void, P0 = number>(_v: P0): R;
    dragRotationInterpreter<R = MSRotationGestureInterpreter>(): R;
    cursorRotationInterpreter<R = MSRotationGestureInterpreter>(): R;
    dragGestureRecognizer<R = MSDragToMoveOrCopyGestureRecognizer>(): R;
    rotationItems<R = NSArray>(): R;
    rotationCenterPoint<R = CGPoint>(): R;
    setRotationCenterPoint<R = void, P0 = CGPoint>(_v: P0): R;
    eventData<R = MSNormalEventData>(): R;
    setEventData<R = void, P0 = MSNormalEventData>(_v: P0): R;
    disableMoving<R = boolean>(): R;
    setDisableMoving<R = void, P0 = boolean>(_v: P0): R;
    exitOnMouseUp<R = boolean>(): R;
    setExitOnMouseUp<R = void, P0 = boolean>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSRotateEventHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSNormalBaseEventHandler, MSAlignmentEngineDelegateProtocol, NSTouchBarDelegateProtocol {
      alloc<R = MSRotateEventHandler>(): R;
      new: <R = MSRotateEventHandler>() => R;
      cursorForDegrees<R = unknown, P0 = number>(_cursorForDegrees: P0): R;
    }
  }
}

declare const MSRotateEventHandler: cocoa.MSRotateEventHandler.CLASS;
