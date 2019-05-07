/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExporter<T0 = void, T1 = void, T2 = void> extends NSObject, MSRenderingContextCacheProviderProtocol {
    cxx_destruct<R = void>(): R;
    exportToFileURL<R = boolean, P0 = unknown>(_exportToFileURL: P0): R;
    drawRect_context<R = void, P0 = CGRect, P1 = CGContext>(_drawRect: P0, _context: P1): R;
    drawSliceBackgroundIfNecessary<R = void, P0 = CGContext>(_drawSliceBackgroundIfNecessary: P0): R;
    previewImage<R = unknown>(): R;
    bitmapImageRep<R = unknown>(): R;
    basicBitmapImageRep<R = unknown>(): R;
    draw<R = void, P0 = CGContext>(_draw: P0): R;
    image<R = unknown>(): R;
    data<R = unknown>(): R;
    boundsForVectorRender<R = CGRect>(): R;
    initWithRequest_colorSpace_driver<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithRequest: P0, _colorSpace: P1, _driver: P2): R;
    allowSubpixelAntialiasing<R = boolean>(): R;
    setAllowSubpixelAntialiasing<R = void, P0 = boolean>(_v: P0): R;
    bounds<R = CGRect>(): R;
    setBounds<R = void, P0 = CGRect>(_v: P0): R;
    cache<R = BCCache>(): R;
    setCache<R = void, P0 = BCCache>(_v: P0): R;
    colorSpace<R = NSColorSpace>(): R;
    setColorSpace<R = void, P0 = NSColorSpace>(_v: P0): R;
    driver<R = MSRenderingDriver>(): R;
    setDriver<R = void, P0 = MSRenderingDriver>(_v: P0): R;
    isPrinting<R = boolean>(): R;
    setIsPrinting<R = void, P0 = boolean>(_v: P0): R;
    request<R = MSExportRequest>(): R;
    setRequest<R = void, P0 = MSExportRequest>(_v: P0): R;
    zoomIndependentCache<R = BCCache>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSExporter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSRenderingContextCacheProviderProtocol {
      alloc<R = MSExporter>(): R;
      new: <R = MSExporter>() => R;
      exporterForRequest_colorSpace_driver<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_exporterForRequest: P0, _colorSpace: P1, _driver: P2): R;
      exporterForRequest_colorSpace<R = unknown, P0 = unknown, P1 = unknown>(_exporterForRequest: P0, _colorSpace: P1): R;
      registerExporterClass_forFormat<R = void, P0 = unknown, P1 = unknown>(_registerExporterClass: P0, _forFormat: P1): R;
      initialize<R = void>(): R;
    }
  }
}

declare const MSExporter: cocoa.MSExporter.CLASS;
