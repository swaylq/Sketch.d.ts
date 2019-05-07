/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImageLayerImporter<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSImageLayerImporter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSImageLayerImporter>(): R;
      new: <R = MSImageLayerImporter>() => R;
      fileIsVectorFormat<R = boolean, P0 = unknown>(_fileIsVectorFormat: P0): R;
      importerForPath<R = unknown, P0 = unknown>(_importerForPath: P0): R;
      importLayerFromPath<R = unknown, P0 = unknown>(_importLayerFromPath: P0): R;
      layerWithContentsOfPath_mode<R = unknown, P0 = unknown, P1 = number>(_layerWithContentsOfPath: P0, _mode: P1): R;
    }
  }
}

declare const MSImageLayerImporter: cocoa.MSImageLayerImporter.CLASS;
