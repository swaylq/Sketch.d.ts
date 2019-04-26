/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPage<T0 = void, T1 = void, T2 = void> extends _MSPage, MSRootLayerProtocol {
    setIsLocked<R = void, P0 = boolean>(_setIsLocked: P0): R;
    isLocked<R = boolean>(): R;
    setIsVisible<R = void, P0 = boolean>(_setIsVisible: P0): R;
    isVisible<R = boolean>(): R;
    originForNewArtboardWithSize<R = CGPoint, P0 = CGSize>(_originForNewArtboardWithSize: P0): R;
    artboardsMatchingWidth<R = unknown, P0 = number>(_artboardsMatchingWidth: P0): R;
    contentIntersectsWithRect<R = boolean, P0 = CGRect>(_contentIntersectsWithRect: P0): R;
    hasClickThrough<R = boolean>(): R;
    limitsSelectionToBounds<R = boolean>(): R;
    moveLayersToArtboards<R = void>(): R;
    rectSizeDidChange<R = void, P0 = unknown>(_rectSizeDidChange: P0): R;
    changeLayerExpandedTypeToAutomaticIfCollapsed<R = void>(): R;
    artboardWithID<R = unknown, P0 = unknown>(_artboardWithID: P0): R;
    parentRoot<R = unknown>(): R;
    ancestorsAndSelfTransforms<R = unknown>(): R;
    parentPage<R = unknown>(): R;
    layers_fitOnArtboard<R = boolean, P0 = unknown, P1 = unknown>(_layers: P0, _fitOnArtboard: P1): R;
    destinationArtboardForLayers_artboards<R = unknown, P0 = unknown, P1 = unknown>(_destinationArtboardForLayers: P0, _artboards: P1): R;
    tryToMoveLayerToArtboard<R = boolean, P0 = unknown>(_tryToMoveLayerToArtboard: P0): R;
    addOrRemoveLayerFromArtboardIfNecessary<R = boolean, P0 = unknown>(_addOrRemoveLayerFromArtboardIfNecessary: P0): R;
    tryToMoveLayer_toArtboards<R = boolean, P0 = unknown, P1 = unknown>(_tryToMoveLayer: P0, _toArtboards: P1): R;
    symbolLayersInGroup<R = unknown, P0 = unknown>(_symbolLayersInGroup: P0): R;
    artboardForSlice_inArtboards<R = unknown, P0 = unknown, P1 = unknown>(_artboardForSlice: P0, _inArtboards: P1): R;
    rulerCoordinateSpace<R = unknown>(): R;
    refreshOverlayInRect<R = void, P0 = CGRect>(_refreshOverlayInRect: P0): R;
    transform<R = unknown>(): R;
    dealloc<R = void>(): R;
    changeSelectionByDeselectingLayers<R = void, P0 = unknown>(_changeSelectionByDeselectingLayers: P0): R;
    changeSelectionBySelectingLayers<R = void, P0 = unknown>(_changeSelectionBySelectingLayers: P0): R;
    changeSelectionUsingBlock<R = void, P0 = CDUnknownBlockType>(_changeSelectionUsingBlock: P0): R;
    isLayerSelected<R = boolean, P0 = unknown>(_isLayerSelected: P0): R;
    layersWithIDs<R = unknown, P0 = unknown>(_layersWithIDs: P0): R;
    layersByObjectID<R = unknown>(): R;
    selectedLayers<R = unknown>(): R;
    parentGroup<R = unknown>(): R;
    resetSelectedLayerIDs<R = void, P0 = unknown>(_resetSelectedLayerIDs: P0): R;
    scrollOriginToCenterContentInViewBounds<R = CGPoint, P0 = CGRect>(_scrollOriginToCenterContentInViewBounds: P0): R;
    adjustRulerDataToTopLeftInViewBounds<R = void>(): R;
    shouldDrawSelection<R = boolean>(): R;
    displayName<R = unknown>(): R;
    isExportableViaDragAndDrop<R = boolean>(): R;
    previewImages<R = unknown>(): R;
    badgeImages<R = unknown>(): R;
    displayType<R = number>(): R;
    isTooSmallForPreciseHitTestingAtZoomValue<R = boolean, P0 = number>(_isTooSmallForPreciseHitTestingAtZoomValue: P0): R;
    containsPoint_zoomValue<R = boolean, P0 = CGPoint, P1 = number>(_containsPoint: P0, _zoomValue: P1): R;
    cachedSelectedLayers<R = MSLayerArray>(): R;
    setCachedSelectedLayers<R = void, P0 = MSLayerArray>(_v: P0): R;
    cachedArtboards<R = NSArray>(): R;
    setCachedArtboards<R = void, P0 = NSArray>(_v: P0): R;
    cachedExportableLayers<R = NSArray>(): R;
    setCachedExportableLayers<R = void, P0 = NSArray>(_v: P0): R;
    currentArtboard<R = MSArtboardGroup>(): R;
    setCurrentArtboard<R = void, P0 = MSArtboardGroup>(_v: P0): R;
    zoomValue<R = number>(): R;
    setZoomValue<R = void, P0 = number>(_v: P0): R;
    scrollOrigin<R = CGPoint>(): R;
    setScrollOrigin<R = void, P0 = CGPoint>(_v: P0): R;
    symbols<R = NSArray>(): R;
    currentVerticalRulerData<R = MSRulerData>(): R;
    currentHorizontalRulerData<R = MSRulerData>(): R;
    artboards<R = NSArray>(): R;
    currentRoot<R = MSRootLayer>(): R;
    contentBounds<R = CGRect>(): R;
    exportableLayers<R = NSArray>(): R;
    rulerBase<R = CGPoint>(): R;
    setRulerBase<R = void, P0 = CGPoint>(_v: P0): R;
    selectedLayerIDs<R = NSMutableSet>(): R;
    setSelectedLayerIDs<R = void, P0 = NSMutableSet>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    grid<R = MSSimpleGrid>(): R;
    setGrid<R = void, P0 = MSSimpleGrid>(_v: P0): R;
    hash<R = number>(): R;
    horizontalRulerData<R = MSRulerData>(): R;
    setHorizontalRulerData<R = void, P0 = MSRulerData>(_v: P0): R;
    layout<R = MSLayoutGrid>(): R;
    setLayout<R = void, P0 = MSLayoutGrid>(_v: P0): R;
    rect<R = CGRect>(): R;
    superclass<R = unknown>(): R;
    verticalRulerData<R = MSRulerData>(): R;
    setVerticalRulerData<R = void, P0 = MSRulerData>(_v: P0): R;
    // + MSPage(Hover): 
    canBeHoveredOnPage<R = boolean, P0 = unknown>(_canBeHoveredOnPage: P0): R;
    // + MSPage(LayerList): 
    isExportableViaDragAndDrop<R = boolean>(): R;
    canCopyToLayer_beforeLayer<R = boolean, P0 = unknown, P1 = unknown>(_canCopyToLayer: P0, _beforeLayer: P1): R;
    previewImages<R = unknown>(): R;
    badgeImages<R = unknown>(): R;
    displayType<R = number>(): R;
    // + MSPage(Scrolling): 
    scrollOriginToCenterContentInViewBounds<R = CGPoint, P0 = CGRect>(_scrollOriginToCenterContentInViewBounds: P0): R;
    adjustRulerDataToTopLeftInViewBounds<R = void>(): R;
    // + MSPage(ShouldDrawSelection): 
    shouldDrawSelection<R = boolean>(): R;
    // + MSPage(UISupport): 
    displayName<R = unknown>(): R;
  }
  namespace MSPage {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSPage, MSRootLayerProtocol {
      alloc<R = MSPage>(): R;
      new: <R = MSPage>() => R;
      defaultSymbolsPageName<R = unknown>(): R;
      page<R = unknown>(): R;
  
  }
  }
}

declare const MSPage: cocoa.MSPage.CLASS;
