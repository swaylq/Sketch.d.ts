/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlowRendererCollector<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    pushSymbolMaster_onStackInBlock<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_pushSymbolMaster: P0, _onStackInBlock: P1): R;
    clipPathForFlowFromLayer_toArtboard_path<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_clipPathForFlowFromLayer: P0, _toArtboard: P1, _path: P2): R;
    collectFlowForLayer_mayDrawHotspotBounds<R = void, P0 = unknown, P1 = boolean>(_collectFlowForLayer: P0, _mayDrawHotspotBounds: P1): R;
    collectFlowForLayer_ancestors_options_mayDrawHotspotBounds<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = boolean>(_collectFlowForLayer: P0, _ancestors: P1, _options: P2, _mayDrawHotspotBounds: P3): R;
    recursivelyCollectFlowsForLayer_ancestors_options_mayDrawHotspotBounds<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = boolean>(_recursivelyCollectFlowsForLayer: P0, _ancestors: P1, _options: P2, _mayDrawHotspotBounds: P3): R;
    shouldInvalidateCollectedFlowsWithDiff<R = boolean, P0 = unknown>(_shouldInvalidateCollectedFlowsWithDiff: P0): R;
    initWithLayers_onPage_document_zoomLevel_cache<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number, P4 = unknown>(_initWithLayers: P0, _onPage: P1, _document: P2, _zoomLevel: P3, _cache: P4): R;
    zoomLevel<R = number>(): R;
    setZoomLevel<R = void, P0 = number>(_v: P0): R;
    symbolMasterStack<R = NSMutableArray>(): R;
    setSymbolMasterStack<R = void, P0 = NSMutableArray>(_v: P0): R;
    cache<R = BCCache>(): R;
    setCache<R = void, P0 = BCCache>(_v: P0): R;
    artboardsByID<R = NSDictionary>(): R;
    setArtboardsByID<R = void, P0 = NSDictionary>(_v: P0): R;
    selectedLayerIDs<R = NSSet>(): R;
    setSelectedLayerIDs<R = void, P0 = NSSet>(_v: P0): R;
    mutableRenderers<R = NSMutableArray>(): R;
    setMutableRenderers<R = void, P0 = NSMutableArray>(_v: P0): R;
    document<R = MSImmutableDocumentData>(): R;
    setDocument<R = void, P0 = MSImmutableDocumentData>(_v: P0): R;
    page<R = MSImmutablePage>(): R;
    setPage<R = void, P0 = MSImmutablePage>(_v: P0): R;
    flowRenderers<R = NSArray>(): R;
  }
  namespace MSFlowRendererCollector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSFlowRendererCollector>(): R;
      new: <R = MSFlowRendererCollector>() => R;
    }
  }
}

declare const MSFlowRendererCollector: cocoa.MSFlowRendererCollector.CLASS;
