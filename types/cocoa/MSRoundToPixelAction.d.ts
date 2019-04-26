/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRoundToPixelAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    roundCurvePointsAtIndexPaths_ofShapes<R = void, P0 = unknown, P1 = unknown>(_roundCurvePointsAtIndexPaths: P0, _ofShapes: P1): R;
    roundCurvePointsInPath<R = void, P0 = unknown>(_roundCurvePointsInPath: P0): R;
    roundLayerPoints<R = void, P0 = unknown>(_roundLayerPoints: P0): R;
    doRoundLayerFrame<R = void, P0 = unknown>(_doRoundLayerFrame: P0): R;
    roundLayerFrame<R = void, P0 = unknown>(_roundLayerFrame: P0): R;
    roundSelectedShapeHandlerPoints<R = void>(): R;
    pathPointsAreNotIntegral<R = boolean, P0 = unknown>(_pathPointsAreNotIntegral: P0): R;
    layerPointsAreNotIntegral<R = boolean, P0 = unknown>(_layerPointsAreNotIntegral: P0): R;
    layerFrameIsNotIntegral<R = boolean, P0 = unknown>(_layerFrameIsNotIntegral: P0): R;
    roundingModeForLayer<R = number, P0 = unknown>(_roundingModeForLayer: P0): R;
    roundModeForShapeHandler<R = number>(): R;
    roundingMode<R = number>(): R;
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
    recipeName<R = unknown>(): R;
    validate<R = boolean>(): R;
    roundToPixel<R = void, P0 = unknown>(_roundToPixel: P0): R;
  }
  namespace MSRoundToPixelAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSRoundToPixelAction>(): R;
      new: <R = MSRoundToPixelAction>() => R;
    }
  }
}

declare const MSRoundToPixelAction: cocoa.MSRoundToPixelAction.CLASS;
