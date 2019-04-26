/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTileRenderOperation<T0 = void, T1 = void, T2 = void> extends NSOperation {
    cxx_destruct<R = void>(): R;
    renderComplete<R = void, P0 = unknown>(_renderComplete: P0): R;
    renderNextPass_image<R = void, P0 = unknown, P1 = CGImage>(_renderNextPass: P0, _image: P1): R;
    asynchronous<R = boolean>(): R;
    isFinished<R = boolean>(): R;
    setIsFinished<R = void, P0 = boolean>(_v: P0): R;
    isExecuting<R = boolean>(): R;
    setIsExecuting<R = void, P0 = boolean>(_v: P0): R;
    colorSettings<R = MSOverlayColorSettings>(): R;
    setColorSettings<R = void, P0 = MSOverlayColorSettings>(_v: P0): R;
    renderPassQueue<R = NSOperationQueue>(): R;
    setRenderPassQueue<R = void, P0 = NSOperationQueue>(_v: P0): R;
    renderer<R = MSTiledRenderer>(): R;
    setRenderer<R = void, P0 = MSTiledRenderer>(_v: P0): R;
    canvasColorSpace<R = NSColorSpace>(): R;
    setCanvasColorSpace<R = void, P0 = NSColorSpace>(_v: P0): R;
    cacheProvider<R = MSRenderingContextCacheProvider>(): R;
    setCacheProvider<R = void, P0 = MSRenderingContextCacheProvider>(_v: P0): R;
    pageOverlayRenderOptions<R = number>(): R;
    setPageOverlayRenderOptions<R = void, P0 = number>(_v: P0): R;
    pixelated<R = boolean>(): R;
    setPixelated<R = void, P0 = boolean>(_v: P0): R;
    pixelViewSize<R = CGSize>(): R;
    setPixelViewSize<R = void, P0 = CGSize>(_v: P0): R;
    backingScaleFactor<R = number>(): R;
    setBackingScaleFactor<R = void, P0 = number>(_v: P0): R;
    visibleContentRect<R = CGRect>(): R;
    setVisibleContentRect<R = void, P0 = CGRect>(_v: P0): R;
    renderPasses<R = NSArray>(): R;
    setRenderPasses<R = void, P0 = NSArray>(_v: P0): R;
    renderedImage<R = NSBitmapImageRep>(): R;
    setRenderedImage<R = void, P0 = NSBitmapImageRep>(_v: P0): R;
  }
  namespace MSTileRenderOperation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSOperation {
      alloc<R = MSTileRenderOperation>(): R;
      new: <R = MSTileRenderOperation>() => R;
      renderOperationWithPage_inDocument_visibleContentRect_backingScaleFactor_pixelViewSize_zoomValue_pixelated_pageOverlayRenderOptions_cacheProvider_canvasColorSpace_colorSettings<R = unknown, P0 = unknown, P1 = unknown, P2 = CGRect, P3 = number, P4 = CGSize, P5 = number, P6 = boolean, P7 = number, P8 = unknown, P9 = unknown, P10 = unknown>(_renderOperationWithPage: P0, _inDocument: P1, _visibleContentRect: P2, _backingScaleFactor: P3, _pixelViewSize: P4, _zoomValue: P5, _pixelated: P6, _pageOverlayRenderOptions: P7, _cacheProvider: P8, _canvasColorSpace: P9, _colorSettings: P10): R;
      renderOperationWithRenderPasses_visibleContentRect_backingScaleFactor_pixelViewSize_pixelated_pageOverlayRenderOptions_cacheProvider_canvasColorSpace_colorSettings<R = unknown, P0 = unknown, P1 = CGRect, P2 = number, P3 = CGSize, P4 = boolean, P5 = number, P6 = unknown, P7 = unknown, P8 = unknown>(_renderOperationWithRenderPasses: P0, _visibleContentRect: P1, _backingScaleFactor: P2, _pixelViewSize: P3, _pixelated: P4, _pageOverlayRenderOptions: P5, _cacheProvider: P6, _canvasColorSpace: P7, _colorSettings: P8): R;
      bitmapImageFromRenderPasses_visibleContentRect_backingScaleFactor_pixelViewSize_pixelated_pageOverlayRenderOptions_cacheProvider_canvasColorSpace_colorSettings<R = unknown, P0 = unknown, P1 = CGRect, P2 = number, P3 = CGSize, P4 = boolean, P5 = number, P6 = unknown, P7 = unknown, P8 = unknown>(_bitmapImageFromRenderPasses: P0, _visibleContentRect: P1, _backingScaleFactor: P2, _pixelViewSize: P3, _pixelated: P4, _pageOverlayRenderOptions: P5, _cacheProvider: P6, _canvasColorSpace: P7, _colorSettings: P8): R;
      bitmapImageRenderForPage_inDocument_visibleContentRect_backingScaleFactor_pixelViewSize_zoomValue_pixelated_pageOverlayRenderOptions_cacheProvider_canvasColorSpace_colorSettings<R = unknown, P0 = unknown, P1 = unknown, P2 = CGRect, P3 = number, P4 = CGSize, P5 = number, P6 = boolean, P7 = number, P8 = unknown, P9 = unknown, P10 = unknown>(_bitmapImageRenderForPage: P0, _inDocument: P1, _visibleContentRect: P2, _backingScaleFactor: P3, _pixelViewSize: P4, _zoomValue: P5, _pixelated: P6, _pageOverlayRenderOptions: P7, _cacheProvider: P8, _canvasColorSpace: P9, _colorSettings: P10): R;
    }
  }
}

declare const MSTileRenderOperation: cocoa.MSTileRenderOperation.CLASS;
