/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOpenGLView<T = any> extends cocoa.NSView {
    setLayer<R = void, P0 = unknown>(_setLayer: P0): R;
    _surfaceNeedsUpdate<R = void, P0 = unknown>(__surfaceNeedsUpdate: P0): R;
    update<R = void>(): R;
    reshape<R = void>(): R;
    prepareOpenGL<R = void>(): R;
    isOpaque<R = boolean>(): R;
    clearGLContext<R = void>(): R;
    wantsLayer<R = boolean>(): R;
    initWithFrame_pixelFormat<R = unknown, P0 = cocoa.CGRect, P1 = unknown>(_initWithFrame: P0, _pixelFormat: P1): R;
    layerContentsRedrawPolicy<R = number>(): R;
    pixelFormat<R = cocoa.NSOpenGLPixelFormat>(): R;
    setPixelFormat<R = void, P0 = cocoa.NSOpenGLPixelFormat>(_v: P0): R;
    openGLContext<R = cocoa.NSOpenGLContext>(): R;
    setOpenGLContext<R = void, P0 = cocoa.NSOpenGLContext>(_v: P0): R;
    canAnimateOnBackgroundThread<R = boolean>(): R;
    setCanAnimateOnBackgroundThread<R = void, P0 = boolean>(_v: P0): R;
    animates<R = boolean>(): R;
    setAnimates<R = void, P0 = boolean>(_v: P0): R;
    openGLSurfaceSize<R = cocoa.CGSize>(): R;
  }
  namespace classes {
    export interface NSOpenGLView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSOpenGLView>(): R;
      new: <R = NSOpenGLView>() => R;
      defaultPixelFormat<R = unknown>(): R;
    }
  }
}

declare const NSOpenGLView: cocoa.classes.NSOpenGLView;
