/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMetalRenderer<T0 = void, T1 = void, T2 = void> extends NSObject, MSGPURendererProtocol {
    cxx_destruct<R = void>(): R;
    ms_createStencilTextureForColorAttachment<R = unknown, P0 = unknown>(_ms_createStencilTextureForColorAttachment: P0): R;
    drawColorTriangleMesh_modelViewTransform_disableOverlappingFragmentBlending<R = void, P0 = unknown, P1 = CGAffineTransform, P2 = boolean>(_drawColorTriangleMesh: P0, _modelViewTransform: P1, _disableOverlappingFragmentBlending: P2): R;
    _setupScissorRect_forTargetTexture<R = void, P0 = unknown, P1 = unknown>(__setupScissorRect: P0, _forTargetTexture: P1): R;
    dealloc<R = void>(): R;
    initWithCompletionHandler_device<R = unknown, P0 = CDUnknownBlockType, P1 = unknown>(_initWithCompletionHandler: P0, _device: P1): R;
    textureLock<R = _opaque_pthread_mutex_t>(): R;
    drawCompletionHandler<R = CDUnknownBlockType>(): R;
    setDrawCompletionHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    textureIndexesBuffer<R = MTLBuffer>(): R;
    setTextureIndexesBuffer<R = void, P0 = MTLBuffer>(_v: P0): R;
    textureVerticesBuffer<R = MTLBuffer>(): R;
    setTextureVerticesBuffer<R = void, P0 = MTLBuffer>(_v: P0): R;
    arcIndexesBuffer<R = MTLBuffer>(): R;
    setArcIndexesBuffer<R = void, P0 = MTLBuffer>(_v: P0): R;
    arcVerticesBuffer<R = MTLBuffer>(): R;
    setArcVerticesBuffer<R = void, P0 = MTLBuffer>(_v: P0): R;
    textureVertexBuffer<R = MSTextureVertexBuffer>(): R;
    setTextureVertexBuffer<R = void, P0 = MSTextureVertexBuffer>(_v: P0): R;
    arcVertexBuffer<R = MSArcVertexBuffer>(): R;
    setArcVertexBuffer<R = void, P0 = MSArcVertexBuffer>(_v: P0): R;
    scissorRect<R = unknown>(): R;
    setScissorRect<R = void, P0 = unknown>(_v: P0): R;
    hasScissor<R = boolean>(): R;
    setHasScissor<R = void, P0 = boolean>(_v: P0): R;
    stencilTexture<R = MTLTexture>(): R;
    setStencilTexture<R = void, P0 = MTLTexture>(_v: P0): R;
    disableOverlappingTriangleBlendingState<R = MTLDepthStencilState>(): R;
    setDisableOverlappingTriangleBlendingState<R = void, P0 = MTLDepthStencilState>(_v: P0): R;
    drawColorQuadWithStencilState<R = MTLRenderPipelineState>(): R;
    setDrawColorQuadWithStencilState<R = void, P0 = MTLRenderPipelineState>(_v: P0): R;
    drawTextureVertexBufferState<R = MTLRenderPipelineState>(): R;
    setDrawTextureVertexBufferState<R = void, P0 = MTLRenderPipelineState>(_v: P0): R;
    drawArcVertexBufferState<R = MTLRenderPipelineState>(): R;
    setDrawArcVertexBufferState<R = void, P0 = MTLRenderPipelineState>(_v: P0): R;
    drawColorQuadState<R = MTLRenderPipelineState>(): R;
    setDrawColorQuadState<R = void, P0 = MTLRenderPipelineState>(_v: P0): R;
    drawTextureNearestState<R = MTLRenderPipelineState>(): R;
    setDrawTextureNearestState<R = void, P0 = MTLRenderPipelineState>(_v: P0): R;
    drawTextureState<R = MTLRenderPipelineState>(): R;
    setDrawTextureState<R = void, P0 = MTLRenderPipelineState>(_v: P0): R;
    metalCommandQueue<R = MTLCommandQueue>(): R;
    setMetalCommandQueue<R = void, P0 = MTLCommandQueue>(_v: P0): R;
    metalLibrary<R = MTLLibrary>(): R;
    setMetalLibrary<R = void, P0 = MTLLibrary>(_v: P0): R;
    currentDrawable<R = CAMetalDrawable>(): R;
    setCurrentDrawable<R = void, P0 = CAMetalDrawable>(_v: P0): R;
    currentCommands<R = MTLCommandBuffer>(): R;
    setCurrentCommands<R = void, P0 = MTLCommandBuffer>(_v: P0): R;
    metalLayer<R = CAMetalLayer>(): R;
    setMetalLayer<R = void, P0 = CAMetalLayer>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSMetalRenderer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSGPURendererProtocol {
      alloc<R = MSMetalRenderer>(): R;
      new: <R = MSMetalRenderer>() => R;
      createWithCompletionHandler<R = unknown, P0 = CDUnknownBlockType>(_createWithCompletionHandler: P0): R;
    }
  }
}

declare const MSMetalRenderer: cocoa.MSMetalRenderer.CLASS;
