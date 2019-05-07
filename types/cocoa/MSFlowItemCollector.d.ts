/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlowItemCollector<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    pushSymbolMaster_onStackInBlock<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_pushSymbolMaster: P0, _onStackInBlock: P1): R;
    collectFlowForLayer_destinationArtboardAncestry_flowInfo_clipToRects_mayDrawHotspotBounds<R = unknown, P0 = unknown, P1 = unknown, P2 = MSFlowInfo, P3 = unknown, P4 = boolean>(_collectFlowForLayer: P0, _destinationArtboardAncestry: P1, _flowInfo: P2, _clipToRects: P3, _mayDrawHotspotBounds: P4): R;
    destinationArtboardAncestryForFlow<R = unknown, P0 = unknown>(_destinationArtboardAncestryForFlow: P0): R;
    recursivelyCollectFlowsForLayer_ancestors_mayDrawHotspotBounds_existingFlows<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean, P3 = unknown>(_recursivelyCollectFlowsForLayer: P0, _ancestors: P1, _mayDrawHotspotBounds: P2, _existingFlows: P3): R;
    flowKeyForLayerAncestry_destinationArtboardAncestry_clipToRects<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_flowKeyForLayerAncestry: P0, _destinationArtboardAncestry: P1, _clipToRects: P2): R;
    artboardRectsIntersectingSegmentBounds_excludingArtboards<R = unknown, P0 = CGRect, P1 = unknown>(_artboardRectsIntersectingSegmentBounds: P0, _excludingArtboards: P1): R;
    collectFlows<R = unknown, P0 = unknown>(_collectFlows: P0): R;
    shouldInvalidateCollectedFlowsWithDiff<R = boolean, P0 = unknown>(_shouldInvalidateCollectedFlowsWithDiff: P0): R;
    initWithLayers_onPage_document<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithLayers: P0, _onPage: P1, _document: P2): R;
    symbolMasterStack<R = NSMutableArray>(): R;
    setSymbolMasterStack<R = void, P0 = NSMutableArray>(_v: P0): R;
    artboardsByRect<R = NSArray>(): R;
    setArtboardsByRect<R = void, P0 = NSArray>(_v: P0): R;
    artboardsByID<R = NSDictionary>(): R;
    setArtboardsByID<R = void, P0 = NSDictionary>(_v: P0): R;
    collectedFlows<R = NSDictionary>(): R;
    setCollectedFlows<R = void, P0 = NSDictionary>(_v: P0): R;
    document<R = MSImmutableDocumentData>(): R;
    setDocument<R = void, P0 = MSImmutableDocumentData>(_v: P0): R;
    page<R = MSImmutablePage>(): R;
    setPage<R = void, P0 = MSImmutablePage>(_v: P0): R;
  }
  namespace MSFlowItemCollector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSFlowItemCollector>(): R;
      new: <R = MSFlowItemCollector>() => R;
    }
  }
}

declare const MSFlowItemCollector: cocoa.MSFlowItemCollector.CLASS;
