/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOpenGLRenderer<T0 = void, T1 = void, T2 = void> extends NSObject, MSGPURendererProtocol {
    cxx_destruct<R = void>(): R;
    _endDrawCall<R = void>(): R;
    _beginDrawCall<R = void>(): R;
    _renderingOffscreen<R = boolean>(): R;
    initWithCompletionHandler<R = unknown, P0 = CDUnknownBlockType>(_initWithCompletionHandler: P0): R;
    offscreenBuffer<R = MSOpenGLOffscreenBuffer>(): R;
    setOffscreenBuffer<R = void, P0 = MSOpenGLOffscreenBuffer>(_v: P0): R;
    drawableHeight<R = number>(): R;
    setDrawableHeight<R = void, P0 = number>(_v: P0): R;
    drawableWidth<R = number>(): R;
    setDrawableWidth<R = void, P0 = number>(_v: P0): R;
    hasScissorRect<R = boolean>(): R;
    setHasScissorRect<R = void, P0 = boolean>(_v: P0): R;
    scissorRect<R = unknown>(): R;
    setScissorRect<R = void, P0 = unknown>(_v: P0): R;
    openGLLayer<R = MSOpenGLLayer>(): R;
    setOpenGLLayer<R = void, P0 = MSOpenGLLayer>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSOpenGLRenderer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSGPURendererProtocol {
      alloc<R = MSOpenGLRenderer>(): R;
      new: <R = MSOpenGLRenderer>() => R;
      createWithCompletionHandler<R = unknown, P0 = CDUnknownBlockType>(_createWithCompletionHandler: P0): R;
    }
  }
}

declare const MSOpenGLRenderer: cocoa.MSOpenGLRenderer.CLASS;
