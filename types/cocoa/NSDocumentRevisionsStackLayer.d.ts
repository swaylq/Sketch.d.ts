/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentRevisionsStackLayer<T0 = void, T1 = void, T2 = void> extends CALayer {
    anchorPoint<R = CGPoint>(): R;
    setAnchorPoint<R = void, P0 = CGPoint>(_setAnchorPoint: P0): R;
    dealloc<R = void>(): R;
    backdropLayer<R = CABackdropLayer>(): R;
    setBackdropLayer<R = void, P0 = CABackdropLayer>(_v: P0): R;
  }
  namespace NSDocumentRevisionsStackLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends CALayer {}
  }
}

declare const NSDocumentRevisionsStackLayer: cocoa.NSDocumentRevisionsStackLayer.CLASS;
