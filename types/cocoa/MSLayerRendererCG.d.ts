/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerRendererCG<T0 = void, T1 = void, T2 = void> extends NSObject, MSLayerRendererProtocol {
    drawCachedImage_layer_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_drawCachedImage: P0, _layer: P1, _context: P2): R;
    cachedImageForLayer_inContext<R = unknown, P0 = unknown, P1 = unknown>(_cachedImageForLayer: P0, _inContext: P1): R;
    shouldDrawLayer_context<R = boolean, P0 = unknown, P1 = unknown>(_shouldDrawLayer: P0, _context: P1): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSLayerRendererCG {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSLayerRendererProtocol {
      alloc<R = MSLayerRendererCG>(): R;
      new: <R = MSLayerRendererCG>() => R;
    }
  }
}

declare const MSLayerRendererCG: cocoa.MSLayerRendererCG.CLASS;
