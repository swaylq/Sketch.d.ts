/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRenderingContextCG<T0 = void, T1 = void, T2 = void> extends MSRenderingContext {
    shouldDrawFills<R = boolean>(): R;
    ifCondition_skipDrawingFillsInBlock<R = void, P0 = boolean, P1 = CDUnknownBlockType>(_ifCondition: P0, _skipDrawingFillsInBlock: P1): R;
    shouldClipFills<R = boolean>(): R;
    doNotClipFillsInBlock<R = void, P0 = CDUnknownBlockType>(_doNotClipFillsInBlock: P0): R;
    applyShadow_withXOffset_respectFlipped<R = void, P0 = unknown, P1 = number, P2 = boolean>(_applyShadow: P0, _withXOffset: P1, _respectFlipped: P2): R;
    applyShadow_withXOffset<R = void, P0 = unknown, P1 = number>(_applyShadow: P0, _withXOffset: P1): R;
    applyShadow_respectFlipped<R = void, P0 = unknown, P1 = boolean>(_applyShadow: P0, _respectFlipped: P1): R;
    shouldDisableSubpixelQuantization<R = boolean>(): R;
    setupCGContext_withRenderingRequest<R = void, P0 = CGContext, P1 = unknown>(_setupCGContext: P0, _withRenderingRequest: P1): R;
    hasGraphicsContext<R = boolean>(): R;
    zoomLevelForShadows<R = number>(): R;
    endBitmapTransparencyLayer<R = void, P0 = number>(_endBitmapTransparencyLayer: P0): R;
    endQuartzTransparencyLayer<R = void, P0 = number>(_endQuartzTransparencyLayer: P0): R;
    beginQuartzTransparencyLayerInRect<R = number, P0 = CGRect>(_beginQuartzTransparencyLayerInRect: P0): R;
    beginBitmapTransparencyLayerInRect_inheritClip<R = number, P0 = CGRect, P1 = boolean>(_beginBitmapTransparencyLayerInRect: P0, _inheritClip: P1): R;
    newTransparencyLayerContextForContext_size<R = CGContext, P0 = CGContext, P1 = CGSize>(_newTransparencyLayerContextForContext: P0, _size: P1): R;
    setContextRef<R = void, P0 = CGContext>(_setContextRef: P0): R;
    subContextForBackgroundBlurWithCGContext_backgroundBlurLayer_pointScale_rect<R = unknown, P0 = CGContext, P1 = unknown, P2 = number, P3 = CGRect>(_subContextForBackgroundBlurWithCGContext: P0, _backgroundBlurLayer: P1, _pointScale: P2, _rect: P3): R;
    subContextWithCGContext_contextIsVectorBacked_pointScale_zoomLevel_options<R = unknown, P0 = CGContext, P1 = boolean, P2 = number, P3 = number, P4 = number>(_subContextWithCGContext: P0, _contextIsVectorBacked: P1, _pointScale: P2, _zoomLevel: P3, _options: P4): R;
    subContextWithCGContext_contextIsVectorBacked_renderingRequest<R = unknown, P0 = CGContext, P1 = boolean, P2 = unknown>(_subContextWithCGContext: P0, _contextIsVectorBacked: P1, _renderingRequest: P2): R;
    dealloc<R = void>(): R;
    initWithName_driver_cgContext_contextIsVectorBacked_renderingRequest<R = unknown, P0 = unknown, P1 = unknown, P2 = CGContext, P3 = boolean, P4 = unknown>(_initWithName: P0, _driver: P1, _cgContext: P2, _contextIsVectorBacked: P3, _renderingRequest: P4): R;
    initWithName_driver_context_renderingRequest<R = unknown, P0 = unknown, P1 = unknown, P2 = CGContext, P3 = unknown>(_initWithName: P0, _driver: P1, _context: P2, _renderingRequest: P3): R;
    disableDrawingFillsCounter<R = number>(): R;
    setDisableDrawingFillsCounter<R = void, P0 = number>(_v: P0): R;
    disableClippingFillsCounter<R = number>(): R;
    setDisableClippingFillsCounter<R = void, P0 = number>(_v: P0): R;
    bitmapTransparencyLayerSavedStates<R = NSMutableArray>(): R;
    setBitmapTransparencyLayerSavedStates<R = void, P0 = NSMutableArray>(_v: P0): R;
    savedContextRef<R = CGContext>(): R;
    setSavedContextRef<R = void, P0 = CGContext>(_v: P0): R;
    graphicsContext<R = NSGraphicsContext>(): R;
    setGraphicsContext<R = void, P0 = NSGraphicsContext>(_v: P0): R;
    contextPool<R = MSCGContextPool>(): R;
    setContextPool<R = void, P0 = MSCGContextPool>(_v: P0): R;
    contextRef<R = CGContext>(): R;
    contextIsVectorBacked<R = boolean>(): R;
  }
  namespace MSRenderingContextCG {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSRenderingContext {
      alloc<R = MSRenderingContextCG>(): R;
      new: <R = MSRenderingContextCG>() => R;
    }
  }
}

declare const MSRenderingContextCG: cocoa.MSRenderingContextCG.CLASS;
