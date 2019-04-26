/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTiledRenderer<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    beginFastZooming<R = void>(): R;
    _scheduleRedraw<R = void>(): R;
    _fastZoomExit<R = void>(): R;
    _drawOverlayInVisibleRect_backingScaleFactor_pixelViewSize_zoomValue_page_pageOverlayRenderOptions_overlayColors<R = void, P0 = CGRect, P1 = number, P2 = CGSize, P3 = number, P4 = unknown, P5 = number, P6 = unknown>(__drawOverlayInVisibleRect: P0, _backingScaleFactor: P1, _pixelViewSize: P2, _zoomValue: P3, _page: P4, _pageOverlayRenderOptions: P5, _overlayColors: P6): R;
    _renderPageOverlayElementsForPage_options_zoomLevel_backingScaleFactor_baseOrigin_rect_visibleRect_overlayColors<R = void, P0 = unknown, P1 = number, P2 = number, P3 = number, P4 = CGPoint, P5 = CGRect, P6 = CGRect, P7 = unknown>(__renderPageOverlayElementsForPage: P0, _options: P1, _zoomLevel: P2, _backingScaleFactor: P3, _baseOrigin: P4, _rect: P5, _visibleRect: P6, _overlayColors: P7): R;
    _drawGridForGroup_rect_zoom_backingScaleFactor_baseOrigin<R = void, P0 = unknown, P1 = CGRect, P2 = number, P3 = number, P4 = CGPoint>(__drawGridForGroup: P0, _rect: P1, _zoom: P2, _backingScaleFactor: P3, _baseOrigin: P4): R;
    updateContentInRect_forPage_document_visibleImageRect_backingScaleFactor_pixelViewSize_zoomValue_pixelated_pageOverlayRenderOptions_cacheProvider_canvasColorSpace_renderContentSynchronously_overlayColors<R = void, P0 = CGRect, P1 = unknown, P2 = unknown, P3 = CGRect, P4 = number, P5 = CGSize, P6 = number, P7 = boolean, P8 = number, P9 = unknown, P10 = unknown, P11 = boolean, P12 = unknown>(_updateContentInRect: P0, _forPage: P1, _document: P2, _visibleImageRect: P3, _backingScaleFactor: P4, _pixelViewSize: P5, _zoomValue: P6, _pixelated: P7, _pageOverlayRenderOptions: P8, _cacheProvider: P9, _canvasColorSpace: P10, _renderContentSynchronously: P11, _overlayColors: P12): R;
    _doUpdateContentInRect_forPage_document_visibleImageRect_backingScaleFactor_pixelViewSize_zoomValue_pixelated_pageOverlayRenderOptions_cacheProvider_canvasColorSpace_renderContentSynchronously_overlayColors<R = void, P0 = CGRect, P1 = unknown, P2 = unknown, P3 = CGRect, P4 = number, P5 = CGSize, P6 = number, P7 = boolean, P8 = number, P9 = unknown, P10 = unknown, P11 = boolean, P12 = unknown>(__doUpdateContentInRect: P0, _forPage: P1, _document: P2, _visibleImageRect: P3, _backingScaleFactor: P4, _pixelViewSize: P5, _zoomValue: P6, _pixelated: P7, _pageOverlayRenderOptions: P8, _cacheProvider: P9, _canvasColorSpace: P10, _renderContentSynchronously: P11, _overlayColors: P12): R;
    _uniteDirtyRect<R = void, P0 = CGRect>(__uniteDirtyRect: P0): R;
    _createDocumentColorSpaceWithCanvasColorSpace_document<R = unknown, P0 = unknown, P1 = unknown>(__createDocumentColorSpaceWithCanvasColorSpace: P0, _document: P1): R;
    _findTileLevelForContentWithZoom<R = unknown, P0 = number>(__findTileLevelForContentWithZoom: P0): R;
    _updatePageObjectID_document_dirtyRect<R = unknown, P0 = unknown, P1 = unknown, P2 = CGRect>(__updatePageObjectID: P0, _document: P1, _dirtyRect: P2): R;
    _removeAllTilesAndClearDirtyRegions<R = void>(): R;
    _visibleDirtyRects_totalZoom_previousContentScale_level<R = unknown, P0 = CGRect, P1 = number, P2 = number, P3 = unknown>(__visibleDirtyRects: P0, _totalZoom: P1, _previousContentScale: P2, _level: P3): R;
    _flattenTilesInRects_forPage_document_backingScaleFactor_zoomValue_cacheProvider_tiles_documentColorSpace_renderContentSynchronously<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number, P4 = number, P5 = unknown, P6 = unknown, P7 = CGColorSpace, P8 = boolean>(__flattenTilesInRects: P0, _forPage: P1, _document: P2, _backingScaleFactor: P3, _zoomValue: P4, _cacheProvider: P5, _tiles: P6, _documentColorSpace: P7, _renderContentSynchronously: P8): R;
    _rasterisationFinishedForTileLevel_page_document<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(__rasterisationFinishedForTileLevel: P0, _page: P1, _document: P2): R;
    _tileFlatteningWorker_zoomValue_backingScaleFactor_forPage_document_cacheProvider_tiles_contentsScale_documentColorSpace<R = void, P0 = unknown, P1 = number, P2 = number, P3 = unknown, P4 = unknown, P5 = unknown, P6 = unknown, P7 = number, P8 = CGColorSpace>(__tileFlatteningWorker: P0, _zoomValue: P1, _backingScaleFactor: P2, _forPage: P3, _document: P4, _cacheProvider: P5, _tiles: P6, _contentsScale: P7, _documentColorSpace: P8): R;
    _drawArtboardShadowsForPage_visibleRect_zoom<R = void, P0 = unknown, P1 = CGRect, P2 = number>(__drawArtboardShadowsForPage: P0, _visibleRect: P1, _zoom: P2): R;
    _drawPageBackgroundElementsForPage_visibleRect_zoom<R = void, P0 = unknown, P1 = CGRect, P2 = number>(__drawPageBackgroundElementsForPage: P0, _visibleRect: P1, _zoom: P2): R;
    _doDrawTilesInVisibleRect_hasArtboards_backingScaleFactor_pixelViewSize_zoomValue_displayPixels_page_pageOverlayRenderOptions_tiles_overlayColors_canvasColorSpace<R = void, P0 = CGRect, P1 = boolean, P2 = number, P3 = CGSize, P4 = number, P5 = boolean, P6 = unknown, P7 = number, P8 = unknown, P9 = unknown, P10 = unknown>(__doDrawTilesInVisibleRect: P0, _hasArtboards: P1, _backingScaleFactor: P2, _pixelViewSize: P3, _zoomValue: P4, _displayPixels: P5, _page: P6, _pageOverlayRenderOptions: P7, _tiles: P8, _overlayColors: P9, _canvasColorSpace: P10): R;
    _drawTilesInVisibleRect_hasArtboards_backingScaleFactor_pixelViewSize_zoomValue_displayPixels_page_pageOverlayRenderOptions_tiles_overlayColors_canvasColorSpace<R = void, P0 = CGRect, P1 = boolean, P2 = number, P3 = CGSize, P4 = number, P5 = boolean, P6 = unknown, P7 = number, P8 = unknown, P9 = unknown, P10 = unknown>(__drawTilesInVisibleRect: P0, _hasArtboards: P1, _backingScaleFactor: P2, _pixelViewSize: P3, _zoomValue: P4, _displayPixels: P5, _page: P6, _pageOverlayRenderOptions: P7, _tiles: P8, _overlayColors: P9, _canvasColorSpace: P10): R;
    _renderTilesWithTotalZoom_displayPixels_visibleRect_pixelViewSize_tiles<R = void, P0 = number, P1 = boolean, P2 = CGRect, P3 = CGSize, P4 = unknown>(__renderTilesWithTotalZoom: P0, _displayPixels: P1, _visibleRect: P2, _pixelViewSize: P3, _tiles: P4): R;
    _renderTileLevelWithTotalZoom_displayPixels_visibleRect_tiles_inRegion<R = unknown, P0 = number, P1 = boolean, P2 = CGRect, P3 = unknown, P4 = unknown>(__renderTileLevelWithTotalZoom: P0, _displayPixels: P1, _visibleRect: P2, _tiles: P3, _inRegion: P4): R;
    initWithCompletionHandler<R = unknown, P0 = CDUnknownBlockType>(_initWithCompletionHandler: P0): R;
    artboardTitleRenderer<R = MSArtboardTitleRenderer>(): R;
    artboardShadow<R = MSGPUArtboardShadow>(): R;
    layerCount<R = number>(): R;
    setLayerCount<R = void, P0 = number>(_v: P0): R;
    previousPageObjectID<R = NSString>(): R;
    setPreviousPageObjectID<R = void, P0 = NSString>(_v: P0): R;
    contextPool<R = MSCGContextPool>(): R;
    setContextPool<R = void, P0 = MSCGContextPool>(_v: P0): R;
    clearOtherLevels<R = boolean>(): R;
    setClearOtherLevels<R = void, P0 = boolean>(_v: P0): R;
    rasterisationInProgress<R = boolean>(): R;
    setRasterisationInProgress<R = void, P0 = boolean>(_v: P0): R;
    flowRenderer<R = MSFlowRenderer>(): R;
    setFlowRenderer<R = void, P0 = MSFlowRenderer>(_v: P0): R;
    overlayTexture<R = MSGPUTexture>(): R;
    overlayMemory<R = MSMemoryBuffer>(): R;
    setOverlayMemory<R = void, P0 = MSMemoryBuffer>(_v: P0): R;
    contextMemory<R = MSMemoryBuffer>(): R;
    setContextMemory<R = void, P0 = MSMemoryBuffer>(_v: P0): R;
    inFastZoom<R = boolean>(): R;
    setInFastZoom<R = void, P0 = boolean>(_v: P0): R;
    previousLevel<R = MSTileMipLevel>(): R;
    setPreviousLevel<R = void, P0 = MSTileMipLevel>(_v: P0): R;
    tileLevels<R = NSArray>(): R;
    renderer<R = MSGPURenderer>(): R;
    hideOverlay<R = boolean>(): R;
    setHideOverlay<R = void, P0 = boolean>(_v: P0): R;
    hostView<R = MSTiledRendererHostView>(): R;
    setHostView<R = void, P0 = MSTiledRendererHostView>(_v: P0): R;
    overlayRenderingDelegate<R = MSOverlayRenderingDelegate>(): R;
    setOverlayRenderingDelegate<R = void, P0 = MSOverlayRenderingDelegate>(_v: P0): R;
    renderingCacheProvider<R = MSRenderingContextCacheProvider>(): R;
    setRenderingCacheProvider<R = void, P0 = MSRenderingContextCacheProvider>(_v: P0): R;
    layer<R = CALayer>(): R;
    driver<R = MSRenderingDriver>(): R;
  }
  namespace MSTiledRenderer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSTiledRenderer>(): R;
      new: <R = MSTiledRenderer>() => R;
      preferredAcceleratorClassName<R = unknown>(): R;
    }
  }
}

declare const MSTiledRenderer: cocoa.MSTiledRenderer.CLASS;
