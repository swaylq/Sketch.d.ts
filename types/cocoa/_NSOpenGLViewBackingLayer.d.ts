/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSOpenGLViewBackingLayer<T0 = void, T1 = void, T2 = void> extends CALayer {
    display<R = void>(): R;
    _NS_invalidateSuggestedContentsScale<R = void>(): R;
    _appkitViewBackingLayerUniqueMethod<R = void>(): R;
  }
  namespace _NSOpenGLViewBackingLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends CALayer {}
  }
}
