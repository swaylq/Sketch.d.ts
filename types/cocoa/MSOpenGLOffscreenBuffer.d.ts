/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOpenGLOffscreenBuffer<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    endRendering<R = void>(): R;
    beginRendering_height<R = void, P0 = number, P1 = number>(_beginRendering: P0, _height: P1): R;
    _destroyObjects<R = void>(): R;
    dealloc<R = void>(): R;
    FBO<R = number>(): R;
    setFBO<R = void, P0 = number>(_v: P0): R;
    texture<R = number>(): R;
    setTexture<R = void, P0 = number>(_v: P0): R;
    height<R = number>(): R;
    setHeight<R = void, P0 = number>(_v: P0): R;
    width<R = number>(): R;
    setWidth<R = void, P0 = number>(_v: P0): R;
    colorspace<R = CGColorSpace>(): R;
    setColorspace<R = void, P0 = CGColorSpace>(_v: P0): R;
    completionHandler<R = CDUnknownBlockType>(): R;
    setCompletionHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    context<R = NSOpenGLContext>(): R;
    setContext<R = void, P0 = NSOpenGLContext>(_v: P0): R;
  }
  namespace MSOpenGLOffscreenBuffer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSOpenGLOffscreenBuffer>(): R;
      new: <R = MSOpenGLOffscreenBuffer>() => R;
    }
  }
}

declare const MSOpenGLOffscreenBuffer: cocoa.MSOpenGLOffscreenBuffer.CLASS;
