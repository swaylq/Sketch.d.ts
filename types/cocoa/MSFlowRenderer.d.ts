/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlowRenderer<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    drawDotInForItem_context_zoomLevel_settings<R = void, P0 = unknown, P1 = CGContext, P2 = number, P3 = unknown>(_drawDotInForItem: P0, _context: P1, _zoomLevel: P2, _settings: P3): R;
    drawTipInForItem_segment_context_zoomLevel_settings<R = void, P0 = unknown, P1 = unknown, P2 = CGContext, P3 = number, P4 = unknown>(_drawTipInForItem: P0, _segment: P1, _context: P2, _zoomLevel: P3, _settings: P4): R;
    drawLineAndTipForItem_context_clipToArtboards_zoomLevel_settings<R = void, P0 = unknown, P1 = CGContext, P2 = boolean, P3 = number, P4 = unknown>(_drawLineAndTipForItem: P0, _context: P1, _clipToArtboards: P2, _zoomLevel: P3, _settings: P4): R;
    renderFlowItem_context_clipToArtboards_zoomLevel_settings<R = void, P0 = unknown, P1 = CGContext, P2 = boolean, P3 = number, P4 = unknown>(_renderFlowItem: P0, _context: P1, _clipToArtboards: P2, _zoomLevel: P3, _settings: P4): R;
    renderFlowsItems_selectedLayerIDs_context_zoomLevel_settings<R = void, P0 = unknown, P1 = unknown, P2 = CGContext, P3 = number, P4 = unknown>(_renderFlowsItems: P0, _selectedLayerIDs: P1, _context: P2, _zoomLevel: P3, _settings: P4): R;
    renderFlowItems_selectedLayerIDs_backingScaleFactor_translation_zoomLevel_renderer_settings<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = CGPoint, P4 = number, P5 = unknown, P6 = unknown>(_renderFlowItems: P0, _selectedLayerIDs: P1, _backingScaleFactor: P2, _translation: P3, _zoomLevel: P4, _renderer: P5, _settings: P6): R;
    flowAnnotationsTexture_renderer_settings<R = unknown, P0 = number, P1 = unknown, P2 = unknown>(_flowAnnotationsTexture: P0, _renderer: P1, _settings: P2): R;
    textureVertexBufferForItems_zoomLevel_backingScaleFactor<R = unknown, P0 = unknown, P1 = number, P2 = number>(_textureVertexBufferForItems: P0, _zoomLevel: P1, _backingScaleFactor: P2): R;
    textureVertexQuadWithName_scaledToWidth_size_backingScaleFactor<R = MSTextureVertexQuad, P0 = unknown, P1 = number, P2 = CGSize, P3 = number>(_textureVertexQuadWithName: P0, _scaledToWidth: P1, _size: P2, _backingScaleFactor: P3): R;
    arcVertexBufferForItems_selectedLayerIDs_zoomLevel<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_arcVertexBufferForItems: P0, _selectedLayerIDs: P1, _zoomLevel: P2): R;
    relativeTextureRects<R = NSDictionary>(): R;
    setRelativeTextureRects<R = void, P0 = NSDictionary>(_v: P0): R;
    absoluteRects<R = NSDictionary>(): R;
    setAbsoluteRects<R = void, P0 = NSDictionary>(_v: P0): R;
    cachedItemBuffers<R = NSDictionary>(): R;
    setCachedItemBuffers<R = void, P0 = NSDictionary>(_v: P0): R;
    selectedLayerIDs<R = NSSet>(): R;
    setSelectedLayerIDs<R = void, P0 = NSSet>(_v: P0): R;
    flowItemZoomLevel<R = number>(): R;
    setFlowItemZoomLevel<R = void, P0 = number>(_v: P0): R;
    flowItems<R = NSSet>(): R;
    setFlowItems<R = void, P0 = NSSet>(_v: P0): R;
    arcVertexBuffer<R = MSArcVertexBuffer>(): R;
    setArcVertexBuffer<R = void, P0 = MSArcVertexBuffer>(_v: P0): R;
    textureVertexBuffer<R = MSTextureVertexBuffer>(): R;
    setTextureVertexBuffer<R = void, P0 = MSTextureVertexBuffer>(_v: P0): R;
    flowHotspotTexturePaddings<R = BCEdgePaddings>(): R;
    setFlowHotspotTexturePaddings<R = void, P0 = BCEdgePaddings>(_v: P0): R;
    flowHotspotTextureCenterRect<R = CGRect>(): R;
    setFlowHotspotTextureCenterRect<R = void, P0 = CGRect>(_v: P0): R;
    flowAnnotationsTexture<R = MSGPUTexture>(): R;
    setFlowAnnotationsTexture<R = void, P0 = MSGPUTexture>(_v: P0): R;
    lastSettings<R = MSRenderingDriverSettings>(): R;
    setLastSettings<R = void, P0 = MSRenderingDriverSettings>(_v: P0): R;
    lastRenderer<R = MSGPURenderer>(): R;
    setLastRenderer<R = void, P0 = MSGPURenderer>(_v: P0): R;
  }
  namespace MSFlowRenderer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSFlowRenderer>(): R;
      new: <R = MSFlowRenderer>() => R;
    }
  }
}

declare const MSFlowRenderer: cocoa.MSFlowRenderer.CLASS;
