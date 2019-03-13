/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNormalEventHandler<T = any> extends MSNormalBaseEventHandler, MSGestureRecognizerDelegateProtocol {
    layerCanBeSelected<R = boolean, P0 = unknown>(_layerCanBeSelected: P0): R;
    numberOfSelectableLayers<R = number, P0 = unknown>(_numberOfSelectableLayers: P0): R;
    tabInForwardDirection<R = void, P0 = boolean>(_tabInForwardDirection: P0): R;
    deleteNormalLayers<R = void, P0 = unknown>(_deleteNormalLayers: P0): R;
    menu<R = unknown>(): R;
    dragToSelect<R = void, P0 = unknown>(_dragToSelect: P0): R;
    ignoreNextKeyDownEventUntilModifiersChange<R = void>(): R;
    moveLayer_toOffset_fromPointInAbsoluteCoordinates<R = void, P0 = unknown, P1 = CGPoint, P2 = CGPoint>(_moveLayer: P0, _toOffset: P1, _fromPointInAbsoluteCoordinates: P2): R;
    endDuplicateDragging<R = void, P0 = boolean>(_endDuplicateDragging: P0): R;
    beginDuplicateDragging<R = void>(): R;
    moveDraggedLayersToOffset<R = void, P0 = CGPoint>(_moveDraggedLayersToOffset: P0): R;
    layerDragged<R = void, P0 = unknown>(_layerDragged: P0): R;
    drawOutlineForShapeChild<R = void, P0 = unknown>(_drawOutlineForShapeChild: P0): R;
    drawSelectedShapePathLayers<R = void>(): R;
    drawMultipleSelection<R = void>(): R;
    shouldDrawSelectionForLayer<R = boolean, P0 = unknown>(_shouldDrawSelectionForLayer: P0): R;
    drawLayerHighlight<R = void, P0 = unknown>(_drawLayerHighlight: P0): R;
    drawLayerSelection<R = void>(): R;
    keyDownMoveCanvasIncremental_flags<R = void, P0 = number, P1 = number>(_keyDownMoveCanvasIncremental: P0, _flags: P1): R;
    keyDownMoveToEndOfCanvas<R = void, P0 = number>(_keyDownMoveToEndOfCanvas: P0): R;
    keyDownMoveCanvas_flags<R = void, P0 = number, P1 = number>(_keyDownMoveCanvas: P0, _flags: P1): R;
    flashSnapsForLayer<R = void, P0 = unknown>(_flashSnapsForLayer: P0): R;
    opacityShortcutRecognized<R = void, P0 = unknown>(_opacityShortcutRecognized: P0): R;
    keyDownResizeLayers_flags<R = void, P0 = number, P1 = number>(_keyDownResizeLayers: P0, _flags: P1): R;
    layersAreNotIntersectingTheirArtboards<R = boolean, P0 = unknown>(_layersAreNotIntersectingTheirArtboards: P0): R;
    moveLayersFromArtboardToParentPage<R = void, P0 = unknown>(_moveLayersFromArtboardToParentPage: P0): R;
    moveLayers_toArtboard<R = void, P0 = unknown, P1 = unknown>(_moveLayers: P0, _toArtboard: P1): R;
    parentArtboardWeCanMoveLayersTo<R = unknown, P0 = unknown>(_parentArtboardWeCanMoveLayersTo: P0): R;
    moveLayersOnOrOffArtboard<R = void, P0 = unknown>(_moveLayersOnOrOffArtboard: P0): R;
    keyDownMoveLayers_flags<R = void, P0 = number, P1 = number>(_keyDownMoveLayers: P0, _flags: P1): R;
    artboardsInReadingOrder<R = unknown>(): R;
    currentFocussedArtboard<R = unknown>(): R;
    artboardRectInViewCoordinates_withScrollOrigin<R = CGRect, P0 = unknown, P1 = CGPoint>(_artboardRectInViewCoordinates: P0, _withScrollOrigin: P1): R;
    artboardRectInViewCoordinates<R = CGRect, P0 = unknown>(_artboardRectInViewCoordinates: P0): R;
    focusOnArtboard<R = void, P0 = unknown>(_focusOnArtboard: P0): R;
    moveToNextArtboard<R = void>(): R;
    moveToPreviousArtboard<R = void>(): R;
    isMouseHoveringMultipleSelectedLayerCorner<R = boolean, P0 = CGPoint>(_isMouseHoveringMultipleSelectedLayerCorner: P0): R;
    multipleSelectedLayerCornerAtPoint<R = number, P0 = CGPoint>(_multipleSelectedLayerCornerAtPoint: P0): R;
    isMouse_hoveringCornerOfLayer_modiferFlags<R = boolean, P0 = CGPoint, P1 = unknown, P2 = number>(_isMouse: P0, _hoveringCornerOfLayer: P1, _modiferFlags: P2): R;
    isMouseHoveringLayerCorner<R = boolean, P0 = CGPoint>(_isMouseHoveringLayerCorner: P0): R;
    shouldNotChangeSelectionForFlags<R = boolean, P0 = number>(_shouldNotChangeSelectionForFlags: P0): R;
    selectLayer<R = void, P0 = unknown>(_selectLayer: P0): R;
    layerDoubleClicked<R = void, P0 = unknown>(_layerDoubleClicked: P0): R;
    enterMultipleResizeModeWithMouse_clickCount_flags_handle_manager<R = void, P0 = CGPoint, P1 = number, P2 = number, P3 = number, P4 = unknown>(_enterMultipleResizeModeWithMouse: P0, _clickCount: P1, _flags: P2, _handle: P3, _manager: P4): R;
    enterLineResizeModeWithMouse_clickCount_flags_manager<R = void, P0 = CGPoint, P1 = number, P2 = number, P3 = unknown>(_enterLineResizeModeWithMouse: P0, _clickCount: P1, _flags: P2, _manager: P3): R;
    enterRotateModeWithMouse_clickCount_flags_manager<R = void, P0 = CGPoint, P1 = number, P2 = number, P3 = unknown>(_enterRotateModeWithMouse: P0, _clickCount: P1, _flags: P2, _manager: P3): R;
    enterResizeModeWithMouse_clickCount_flags_manager<R = void, P0 = CGPoint, P1 = number, P2 = number, P3 = unknown>(_enterResizeModeWithMouse: P0, _clickCount: P1, _flags: P2, _manager: P3): R;
    activeLayer<R = MSLayer>(): R;
    setActiveLayer<R = void, P0 = MSLayer>(_v: P0): R;
    dragGestureRecognizer<R = MSDragToMoveOrCopyGestureRecognizer>(): R;
    selectionGestureRecognizer<R = MSDragToSelectGestureRecognizer>(): R;
    duplicatedObjectIDs<R = NSSet>(): R;
    setDuplicatedObjectIDs<R = void, P0 = NSSet>(_v: P0): R;
    duplicateOffset<R = CGVector>(): R;
    setDuplicateOffset<R = void, P0 = CGVector>(_v: P0): R;
    opacityShortcutRecognizer<R = MSOpacityKeyboardShortcutRecognizer>(): R;
    eventData<R = MSNormalEventData>(): R;
    setEventData<R = void, P0 = MSNormalEventData>(_v: P0): R;
    menuBuilder<R = MSNormalEventContextualMenuBuilder>(): R;
    setMenuBuilder<R = void, P0 = MSNormalEventContextualMenuBuilder>(_v: P0): R;
    highlightedItem<R = MSHoverableItem>(): R;
    setHighlightedItem<R = void, P0 = MSHoverableItem>(_v: P0): R;
    measurementRenderer<R = MSLayerMeasurementRenderer>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSNormalEventHandler<T = any> extends MSNormalBaseEventHandler, MSGestureRecognizerDelegateProtocol {
      alloc<R = MSNormalEventHandler>(): R;
      new: <R = MSNormalEventHandler>() => R;
    }
  }
}

declare const MSNormalEventHandler: cocoa.classes.MSNormalEventHandler;
