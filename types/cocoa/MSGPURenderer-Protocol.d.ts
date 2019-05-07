/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGPURendererProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    unlockTextures<R = void>(): R;
    lockTextures<R = void>(): R;
    requiresSynchronousRendering<R = boolean>(): R;
    layer<R = CALayer>(): R;
    createTextureWithWidth_height<R = MSGPUTexture, P0 = number, P1 = number>(_createTextureWithWidth: P0, _height: P1): R;
    resetScissorRect<R = void>(): R;
    setScissorRectWithX_y_width_height<R = void, P0 = number, P1 = number, P2 = number, P3 = number>(_setScissorRectWithX: P0, _y: P1, _width: P2, _height: P3): R;
    drawShadowForArtboardInRect_selected_shadow<R = void, P0 = CGRect, P1 = boolean, P2 = MSGPUArtboardShadow>(_drawShadowForArtboardInRect: P0, _selected: P1, _shadow: P2): R;
    drawTexturedQuadInDestinationRect_sourceTexture_sourceRect_bilinearFilter<R = void, P0 = CGRect, P1 = MSGPUTexture, P2 = CGRect, P3 = boolean>(_drawTexturedQuadInDestinationRect: P0, _sourceTexture: P1, _sourceRect: P2, _bilinearFilter: P3): R;
    drawTexturedQuadInDestinationRect_sourceTexture_bilinearFilter<R = void, P0 = CGRect, P1 = MSGPUTexture, P2 = boolean>(_drawTexturedQuadInDestinationRect: P0, _sourceTexture: P1, _bilinearFilter: P2): R;
    drawTexturedTriangleMesh_sourceTexture<R = void, P0 = unknown, P1 = MSGPUTexture>(_drawTexturedTriangleMesh: P0, _sourceTexture: P1): R;
    drawColorTriangleMesh_disableOverlappingFragmentBlending<R = void, P0 = unknown, P1 = boolean>(_drawColorTriangleMesh: P0, _disableOverlappingFragmentBlending: P1): R;
    drawColorQuadInRect_color<R = void, P0 = CGRect, P1 = unknown>(_drawColorQuadInRect: P0, _color: P1): R;
    endFrameAndWaitForFrame<R = void, P0 = boolean>(_endFrameAndWaitForFrame: P0): R;
    beginFrameWithClearColor_drawableSize_backingScaleFactor_colorSpace<R = boolean, P0 = NSColor, P1 = CGSize, P2 = number, P3 = CGColorSpace>(_beginFrameWithClearColor: P0, _drawableSize: P1, _backingScaleFactor: P2, _colorSpace: P3): R;
    scheduleDrawBlock<R = void, P0 = CDUnknownBlockType>(_scheduleDrawBlock: P0): R;
    maximumTextureSize<R = unknown>(): R;
    drawTextureVertexBuffer_sourceTexture_modelViewTransform<R = void, P0 = MSTextureVertexBuffer, P1 = MSGPUTexture, P2 = CGAffineTransform>(_drawTextureVertexBuffer: P0, _sourceTexture: P1, _modelViewTransform: P2): R;
    drawArcVertexBuffer_color_modelViewTransform_backingScale<R = void, P0 = MSArcVertexBuffer, P1 = unknown, P2 = CGAffineTransform, P3 = number>(_drawArcVertexBuffer: P0, _color: P1, _modelViewTransform: P2, _backingScale: P3): R;
    drawColorTriangleMesh_modelViewTransform<R = void, P0 = unknown, P1 = CGAffineTransform>(_drawColorTriangleMesh: P0, _modelViewTransform: P1): R;
  }
  namespace MSGPURendererProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
      isCompatibleWithAvailableGPUs<R = boolean>(): R;
    }
  }
}
