/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportRenderingContext<T0 = void, T1 = void, T2 = void> extends MSRenderingContextCG {
    rendererShouldSkipDrawingLayer<R = boolean, P0 = unknown>(_rendererShouldSkipDrawingLayer: P0): R;
    exportRequest<R = MSExportRequest>(): R;
    setExportRequest<R = void, P0 = MSExportRequest>(_v: P0): R;
  }
  namespace MSExportRenderingContext {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSRenderingContextCG {
      alloc<R = MSExportRenderingContext>(): R;
      new: <R = MSExportRenderingContext>() => R;
    }
  }
}

declare const MSExportRenderingContext: cocoa.MSExportRenderingContext.CLASS;
