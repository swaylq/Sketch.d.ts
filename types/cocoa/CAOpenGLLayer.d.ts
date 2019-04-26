/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CAOpenGLLayer<T0 = void, T1 = void, T2 = void> {
    // + CAOpenGLLayer(NSOpenGLInternal): 
    NS_managesOpenGLDrawable<R = boolean>(): R;
  }
  namespace CAOpenGLLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const CAOpenGLLayer: cocoa.CAOpenGLLayer.CLASS;
