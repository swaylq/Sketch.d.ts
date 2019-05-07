/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRenderingRequest<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    requestWithOptions<R = unknown, P0 = number>(_requestWithOptions: P0): R;
    initWithDocument_colorSpace_pointScale_zoomLevel_cacheProvider_options<R = unknown, P0 = unknown, P1 = CGColorSpace, P2 = number, P3 = number, P4 = unknown, P5 = number>(_initWithDocument: P0, _colorSpace: P1, _pointScale: P2, _zoomLevel: P3, _cacheProvider: P4, _options: P5): R;
    initWithDocument_colorSpace_pointScale_zoomLevel_cacheProvider_backgroundBlurLayer_options<R = unknown, P0 = unknown, P1 = CGColorSpace, P2 = number, P3 = number, P4 = unknown, P5 = unknown, P6 = number>(_initWithDocument: P0, _colorSpace: P1, _pointScale: P2, _zoomLevel: P3, _cacheProvider: P4, _backgroundBlurLayer: P5, _options: P6): R;
    options<R = number>(): R;
    backgroundBlurLayer<R = MSImmutableLayer>(): R;
    zoomLevel<R = number>(): R;
    pointScale<R = number>(): R;
    document<R = MSImmutableDocumentData>(): R;
    colorSpace<R = CGColorSpace>(): R;
    cacheProvider<R = MSRenderingContextCacheProvider>(): R;
    setCacheProvider<R = void, P0 = MSRenderingContextCacheProvider>(_v: P0): R;
    skipLayerInclusionTests<R = boolean>(): R;
    shouldFlipShadows<R = boolean>(): R;
    printing<R = boolean>(): R;
    includeArtboardBackground<R = boolean>(): R;
    willDrawPixelated<R = boolean>(): R;
    drawingPixelated<R = boolean>(): R;
    drawingMask<R = boolean>(): R;
    exporting<R = boolean>(): R;
  }
  namespace MSRenderingRequest {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSRenderingRequest>(): R;
      new: <R = MSRenderingRequest>() => R;
    }
  }
}

declare const MSRenderingRequest: cocoa.MSRenderingRequest.CLASS;
