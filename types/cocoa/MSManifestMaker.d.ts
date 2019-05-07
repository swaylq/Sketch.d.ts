/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSManifestMaker<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    metadataForFlow<R = unknown, P0 = unknown>(_metadataForFlow: P0): R;
    dictForRect_inRootLayer<R = unknown, P0 = CGRect, P1 = unknown>(_dictForRect: P0, _inRootLayer: P1): R;
    metadataForLayer_fixedByLayer<R = unknown, P0 = unknown, P1 = unknown>(_metadataForLayer: P0, _fixedByLayer: P1): R;
    specialiseObjectMetadata_forSymbolInstance<R = unknown, P0 = unknown, P1 = unknown>(_specialiseObjectMetadata: P0, _forSymbolInstance: P1): R;
    metadataForChildLayersInSymbolInstance_inRootLayer_positionTransform_withAncestors_earlierSymbols_fixedByLayer<R = unknown, P0 = unknown, P1 = unknown, P2 = CGAffineTransform, P3 = unknown, P4 = unknown, P5 = unknown>(_metadataForChildLayersInSymbolInstance: P0, _inRootLayer: P1, _positionTransform: P2, _withAncestors: P3, _earlierSymbols: P4, _fixedByLayer: P5): R;
    metadataForChildLayersInLayer_inRootLayer_positionTransform_withAncestors_earlierSymbols_fixedByLayer<R = unknown, P0 = unknown, P1 = unknown, P2 = CGAffineTransform, P3 = unknown, P4 = unknown, P5 = unknown>(_metadataForChildLayersInLayer: P0, _inRootLayer: P1, _positionTransform: P2, _withAncestors: P3, _earlierSymbols: P4, _fixedByLayer: P5): R;
    metadataForLayer_inRootLayer_positionTransform_withAncestors_earlierSymbols_fixedByLayer<R = unknown, P0 = unknown, P1 = unknown, P2 = CGAffineTransform, P3 = unknown, P4 = unknown, P5 = unknown>(_metadataForLayer: P0, _inRootLayer: P1, _positionTransform: P2, _withAncestors: P3, _earlierSymbols: P4, _fixedByLayer: P5): R;
    metadataForLayersInRootLayer_ancestors<R = unknown, P0 = unknown, P1 = unknown>(_metadataForLayersInRootLayer: P0, _ancestors: P1): R;
    filesMetadataForRootLayer_onPage_id<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_filesMetadataForRootLayer: P0, _onPage: P1, _id: P2): R;
    metadataForRootLayer_onPage_earlierSlugs<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_metadataForRootLayer: P0, _onPage: P1, _earlierSlugs: P2): R;
    shouldExportLayerGroup<R = boolean, P0 = unknown>(_shouldExportLayerGroup: P0): R;
    metadataAndExportForArtboardsOnPage<R = unknown, P0 = unknown>(_metadataAndExportForArtboardsOnPage: P0): R;
    metadataAndExportForPage_earlierSlugs<R = unknown, P0 = unknown, P1 = unknown>(_metadataAndExportForPage: P0, _earlierSlugs: P1): R;
    metadataAndExportForPages<R = unknown, P0 = unknown>(_metadataAndExportForPages: P0): R;
    createManifest<R = unknown>(): R;
    initWithDocument<R = unknown, P0 = unknown>(_initWithDocument: P0): R;
    usePageIfMissingArtboard<R = boolean>(): R;
    setUsePageIfMissingArtboard<R = void, P0 = boolean>(_v: P0): R;
    selectiveExport<R = boolean>(): R;
    setSelectiveExport<R = void, P0 = boolean>(_v: P0): R;
    fileURL<R = NSURL>(): R;
    setFileURL<R = void, P0 = NSURL>(_v: P0): R;
    name<R = NSString>(): R;
    setName<R = void, P0 = NSString>(_v: P0): R;
    cacheManager<R = MSCacheManager>(): R;
    setCacheManager<R = void, P0 = MSCacheManager>(_v: P0): R;
    documentData<R = MSImmutableDocumentData>(): R;
  }
  namespace MSManifestMaker {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSManifestMaker>(): R;
      new: <R = MSManifestMaker>() => R;
      keyForFlowAnimationType<R = unknown, P0 = number>(_keyForFlowAnimationType: P0): R;
      manifestValueForColorSpace<R = unknown, P0 = number>(_manifestValueForColorSpace: P0): R;
    }
  }
}

declare const MSManifestMaker: cocoa.MSManifestMaker.CLASS;
