/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDragRectEventHandler<T0 = void, T1 = void, T2 = void> extends MSEventHandler, MSAlignmentEngineDelegateProtocol {
    addTargetsToEngine_snappingDisabled<R = void, P0 = unknown, P1 = boolean>(_addTargetsToEngine: P0, _snappingDisabled: P1): R;
    snapAndAlignPoint_modifierFlags<R = unknown, P0 = CGPoint, P1 = number>(_snapAndAlignPoint: P0, _modifierFlags: P1): R;
    drawRectPreview<R = void>(): R;
    performActionWithRect_fromLayer_constrainProportions<R = unknown, P0 = CGRect, P1 = unknown, P2 = boolean>(_performActionWithRect: P0, _fromLayer: P1, _constrainProportions: P2): R;
    wantsLayerHighlight<R = boolean>(): R;
    handleDrag<R = void, P0 = unknown>(_handleDrag: P0): R;
    drawingRectForInsertionRect<R = CGRect, P0 = CGRect>(_drawingRectForInsertionRect: P0): R;
    makeDiagonalTranslation<R = CGVector, P0 = CGVector>(_makeDiagonalTranslation: P0): R;
    calculateInsertionRect<R = CGRect, P0 = unknown>(_calculateInsertionRect: P0): R;
    insertionCursor<R = NSCursor>(): R;
    setInsertionCursor<R = void, P0 = NSCursor>(_v: P0): R;
    snappingResult<R = MSAlignmentEngineResult>(): R;
    setSnappingResult<R = void, P0 = MSAlignmentEngineResult>(_v: P0): R;
    snapper<R = MSAlignmentEngine>(): R;
    dragGestureRecognizer<R = MSDragGestureRecognizer>(): R;
    insertionRect<R = CGRect>(): R;
    setInsertionRect<R = void, P0 = CGRect>(_v: P0): R;
    layerSelectionOptionsForInsertingFromExistingLayer<R = number>(): R;
    allowsInsertLayerFromExistingLayer<R = boolean>(): R;
    cursorForInsertingFromExisting<R = NSCursor>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSDragRectEventHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSEventHandler, MSAlignmentEngineDelegateProtocol {
      alloc<R = MSDragRectEventHandler>(): R;
      new: <R = MSDragRectEventHandler>() => R;
    }
  }
}

declare const MSDragRectEventHandler: cocoa.MSDragRectEventHandler.CLASS;
