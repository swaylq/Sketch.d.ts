/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerPaster<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    removeDisconnectedFlowsFromLayers<R = void, P0 = unknown>(_removeDisconnectedFlowsFromLayers: P0): R;
    propertiesAreEqualBetweenPasteboardSymbol_andSymbol<R = boolean, P0 = unknown, P1 = unknown>(_propertiesAreEqualBetweenPasteboardSymbol: P0, _andSymbol: P1): R;
    addForeignSymbolsToDocument<R = void, P0 = unknown>(_addForeignSymbolsToDocument: P0): R;
    pasteSymbol_fromInstanceReferenceToDocument<R = unknown, P0 = unknown, P1 = unknown>(_pasteSymbol: P0, _fromInstanceReferenceToDocument: P1): R;
    symbolMatching_inDocument<R = unknown, P0 = unknown, P1 = unknown>(_symbolMatching: P0, _inDocument: P1): R;
    addSymbolMastersToDocument<R = void, P0 = unknown>(_addSymbolMastersToDocument: P0): R;
    updateOverrides<R = void>(): R;
    ensureSymbolMastersIn_haveUniqueIDInDocument<R = void, P0 = unknown, P1 = unknown>(_ensureSymbolMastersIn: P0, _haveUniqueIDInDocument: P1): R;
    addSharedStylesInDocument<R = void, P0 = unknown>(_addSharedStylesInDocument: P0): R;
    rightmostArtboardOnPage_intersectingRect<R = unknown, P0 = unknown, P1 = CGRect>(_rightmostArtboardOnPage: P0, _intersectingRect: P1): R;
    findFirstAvailablePositionForSize_nextToArtboardsOnPage_inAllowedRect<R = CGPoint, P0 = CGSize, P1 = unknown, P2 = CGRect>(_findFirstAvailablePositionForSize: P0, _nextToArtboardsOnPage: P1, _inAllowedRect: P2): R;
    wouldArtboardWithRect_intersectOtherArtboardsOnPage<R = boolean, P0 = CGRect, P1 = unknown>(_wouldArtboardWithRect: P0, _intersectOtherArtboardsOnPage: P1): R;
    fitCombinedRectForLayers_parent_viewport<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_fitCombinedRectForLayers: P0, _parent: P1, _viewport: P2): R;
    setCombinedOrigin_forLayers<R = void, P0 = CGPoint, P1 = unknown>(_setCombinedOrigin: P0, _forLayers: P1): R;
    insertPagePasteboardDataIntoDocument_afterPage<R = unknown, P0 = unknown, P1 = unknown>(_insertPagePasteboardDataIntoDocument: P0, _afterPage: P1): R;
    insertPasteboardDataIntoParent_beforeLayer<R = unknown, P0 = unknown, P1 = unknown>(_insertPasteboardDataIntoParent: P0, _beforeLayer: P1): R;
    insertPasteboardDataIntoParent_atPosition_afterLayer_viewport_fitToParent<R = unknown, P0 = unknown, P1 = CGPoint, P2 = unknown, P3 = unknown, P4 = boolean>(_insertPasteboardDataIntoParent: P0, _atPosition: P1, _afterLayer: P2, _viewport: P3, _fitToParent: P4): R;
    fixupAfterPastingLayers_intoParent<R = unknown, P0 = unknown, P1 = unknown>(_fixupAfterPastingLayers: P0, _intoParent: P1): R;
    prepareToInsertLayers_intoDocument<R = unknown, P0 = unknown, P1 = unknown>(_prepareToInsertLayers: P0, _intoDocument: P1): R;
    centerSize_inAllowedRect<R = CGRect, P0 = CGSize, P1 = CGRect>(_centerSize: P0, _inAllowedRect: P1): R;
    allowedRectForViewport_root<R = CGRect, P0 = unknown, P1 = unknown>(_allowedRectForViewport: P0, _root: P1): R;
    rectByMaintainingOriginalPositionInRoot<R = CGRect, P0 = unknown>(_rectByMaintainingOriginalPositionInRoot: P0): R;
    targetRectForPasteboardDataInViewPort_root_canMoveViewport<R = CGRect, P0 = unknown, P1 = unknown, P2 = string>(_targetRectForPasteboardDataInViewPort: P0, _root: P1, _canMoveViewport: P2): R;
    parentForDataWithHint_page<R = unknown, P0 = unknown, P1 = unknown>(_parentForDataWithHint: P0, _page: P1): R;
    parentForDataWithHint_page_viewPort<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_parentForDataWithHint: P0, _page: P1, _viewPort: P2): R;
    insertPasteboardDataOnPage_withHint_viewPort<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_insertPasteboardDataOnPage: P0, _withHint: P1, _viewPort: P2): R;
    initWithPasteboardLayers<R = unknown, P0 = unknown>(_initWithPasteboardLayers: P0): R;
    pasteboardLayers<R = MSPasteboardLayers>(): R;
    insertedSymbolMasters<R = NSMutableArray>(): R;
    objectIDMap<R = NSMutableDictionary>(): R;
  }
  namespace MSLayerPaster {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSLayerPaster>(): R;
      new: <R = MSLayerPaster>() => R;
      duplicateLayers<R = unknown, P0 = unknown>(_duplicateLayers: P0): R;
      parentForData_hint_page<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_parentForData: P0, _hint: P1, _page: P2): R;
      parentForData_hint_page_viewPort<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_parentForData: P0, _hint: P1, _page: P2, _viewPort: P3): R;
      insertPasteboardData_intoParent_atPosition_afterLayer_viewport_fitToParent<R = unknown, P0 = unknown, P1 = unknown, P2 = CGPoint, P3 = unknown, P4 = unknown, P5 = boolean>(_insertPasteboardData: P0, _intoParent: P1, _atPosition: P2, _afterLayer: P3, _viewport: P4, _fitToParent: P5): R;
      insertPagePasteboardData_intoDocument_afterPage<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_insertPagePasteboardData: P0, _intoDocument: P1, _afterPage: P2): R;
      insertPasteboardData_intoParent_beforeLayer<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_insertPasteboardData: P0, _intoParent: P1, _beforeLayer: P2): R;
      insertPasteboardData_onPage_withHint_viewPort<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_insertPasteboardData: P0, _onPage: P1, _withHint: P2, _viewPort: P3): R;
    }
  }
}

declare const MSLayerPaster: cocoa.MSLayerPaster.CLASS;
