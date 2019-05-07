/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRenderInContextlessLayer<T0 = void, T1 = void, T2 = void> extends _NSBackingLayer {
    renderInContext<R = void, P0 = CGContext>(_renderInContext: P0): R;
  }
  namespace NSRenderInContextlessLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSBackingLayer {}
  }
}

declare const NSRenderInContextlessLayer: cocoa.NSRenderInContextlessLayer.CLASS;
