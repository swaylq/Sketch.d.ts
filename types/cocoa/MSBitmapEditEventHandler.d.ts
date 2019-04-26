/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBitmapEditEventHandler<T0 = void, T1 = void, T2 = void> extends MSEventHandler {
    updateMeasurementLabel<R = void>(): R;
    crossHairCursorRemove<R = unknown>(): R;
    crossHairCursorAdd<R = unknown>(): R;
    crossHairCursor<R = unknown>(): R;
    magicWandCursorRemove<R = unknown>(): R;
    magicWandCursorAdd<R = unknown>(): R;
    magicWandCursor<R = unknown>(): R;
    makeNewBackupImage<R = void>(): R;
    setImage_forBitmapLayer<R = void, P0 = unknown, P1 = unknown>(_setImage: P0, _forBitmapLayer: P1): R;
    bitmapEditableLayer<R = unknown>(): R;
    coordinateTransformMatrix<R = unknown>(): R;
    drawBorderAroundBounds<R = void>(): R;
    selectionBezierForFlippingCoordinates<R = unknown>(): R;
    imageBounds<R = CGRect>(): R;
    imageSize<R = CGSize>(): R;
    clearAreaUnderSelection<R = void>(): R;
    fillSelectionWithColor_blending<R = void, P0 = unknown, P1 = number>(_fillSelectionWithColor: P0, _blending: P1): R;
    fillSelectionWithColor<R = void, P0 = unknown>(_fillSelectionWithColor: P0): R;
    selectLayerBelowPoint<R = void, P0 = CGPoint>(_selectLayerBelowPoint: P0): R;
    rectIsCropOfImage_fromImage<R = boolean, P0 = CGRect, P1 = unknown>(_rectIsCropOfImage: P0, _fromImage: P1): R;
    cropLayerFrame<R = void>(): R;
    imageFromSelectedArea<R = unknown>(): R;
    bitmapLayerFromSelectedArea<R = unknown>(): R;
    cropAction<R = void, P0 = unknown>(_cropAction: P0): R;
    rectFromBitmapToBoundsCoordinates<R = CGRect, P0 = CGRect>(_rectFromBitmapToBoundsCoordinates: P0): R;
    selectionRectInLayerCoordinates<R = CGRect>(): R;
    selectionDidLiveUpdateTo<R = void, P0 = unknown>(_selectionDidLiveUpdateTo: P0): R;
    invertAction<R = void, P0 = unknown>(_invertAction: P0): R;
    cachedFirstBitmapImageRep<R = NSBitmapImageRep>(): R;
    setCachedFirstBitmapImageRep<R = void, P0 = NSBitmapImageRep>(_v: P0): R;
    backupImageRep<R = NSBitmapImageRep>(): R;
    setBackupImageRep<R = void, P0 = NSBitmapImageRep>(_v: P0): R;
    magicWandEditor<R = MSBitmapMagicWandEditor>(): R;
    setMagicWandEditor<R = void, P0 = MSBitmapMagicWandEditor>(_v: P0): R;
    rectangleEditor<R = MSBitmapRectangleEditor>(): R;
    setRectangleEditor<R = void, P0 = MSBitmapRectangleEditor>(_v: P0): R;
    accumulatedSelection<R = NSBezierPath>(): R;
    setAccumulatedSelection<R = void, P0 = NSBezierPath>(_v: P0): R;
    currentMode<R = number>(): R;
    setCurrentMode<R = void, P0 = number>(_v: P0): R;
    inspectorViewController<R = MSBitmapEditInspectorViewController>(): R;
  }
  namespace MSBitmapEditEventHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSEventHandler {
      alloc<R = MSBitmapEditEventHandler>(): R;
      new: <R = MSBitmapEditEventHandler>() => R;
    }
  }
}

declare const MSBitmapEditEventHandler: cocoa.MSBitmapEditEventHandler.CLASS;
