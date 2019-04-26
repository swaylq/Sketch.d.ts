/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSHighLevelExporter<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    export<R = boolean, P0 = unknown>(_export: P0): R;
    prepareExportRequest_layer<R = void, P0 = unknown, P1 = unknown>(_prepareExportRequest: P0, _layer: P1): R;
    exportRequestsForLayer_inRect_exportFormats<R = unknown, P0 = unknown, P1 = CGRect, P2 = unknown>(_exportRequestsForLayer: P0, _inRect: P1, _exportFormats: P2): R;
    exportLayers<R = boolean, P0 = unknown>(_exportLayers: P0): R;
    exportPage<R = boolean, P0 = unknown>(_exportPage: P0): R;
    formatsToExport<R = unknown>(): R;
    suffixForScale<R = unknown, P0 = number>(_suffixForScale: P0): R;
    rectToExportForPage<R = CGRect, P0 = unknown>(_rectToExportForPage: P0): R;
    outputFileWithName_URL_existing<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_outputFileWithName: P0, _URL: P1, _existing: P2): R;
    initWithDelegate_driver<R = unknown, P0 = unknown, P1 = unknown>(_initWithDelegate: P0, _driver: P1): R;
    initWithDelegate<R = unknown, P0 = unknown>(_initWithDelegate: P0): R;
    driver<R = MSRenderingDriver>(): R;
    delegate<R = MSHighLevelExportDelegate>(): R;
    setDelegate<R = void, P0 = MSHighLevelExportDelegate>(_v: P0): R;
  }
  namespace MSHighLevelExporter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSHighLevelExporter>(): R;
      new: <R = MSHighLevelExporter>() => R;
      exporterWithDelegate<R = unknown, P0 = unknown>(_exporterWithDelegate: P0): R;
    }
  }
}

declare const MSHighLevelExporter: cocoa.MSHighLevelExporter.CLASS;
