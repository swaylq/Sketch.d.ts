/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOpenGLLayer<T0 = void, T1 = void, T2 = void> extends NSOpenGLLayer {
    cxx_destruct<R = void>(): R;
    shareContext<R = NSOpenGLContext>(): R;
    setShareContext<R = void, P0 = NSOpenGLContext>(_v: P0): R;
    renderBlock<R = CDUnknownBlockType>(): R;
    setRenderBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
  }
  namespace MSOpenGLLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSOpenGLLayer {}
  }
}

declare const MSOpenGLLayer: cocoa.MSOpenGLLayer.CLASS;
