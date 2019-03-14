/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDocument<T0 = void, T1 = void, T2 = void> extends NSDocument, MSCloudExportableDocumentProtocol, MSSidebarControllerDelegateProtocol, BCSideBarViewControllerDelegateProtocol, NSMenuDelegateProtocol, NSToolbarDelegateProtocol, NSWindowDelegateProtocol, MSEventHandlerManagerDelegateProtocol, MSDocumentDataDelegateProtocol, MSMenuBuilderDelegateProtocol {
    cxx_destruct<R = void>(): R;
    installedFontsDidChange<R = void>(): R;
    returnToDefaultFirstResponder<R = void>(): R;
    warnIfPluginsDisabled<R = void>(): R;
    warnIfEditingLibrary<R = void>(): R;
    isLibraryDocument<R = boolean>(): R;
    showNonDefaultColorSpaceWarningIfApplicable<R = void>(): R;
    symbolReferenceForRecipe<R = unknown, P0 = unknown>(_symbolReferenceForRecipe: P0): R;
    localObjectForObjectReference<R = unknown, P0 = unknown>(_localObjectForObjectReference: P0): R;
    refreshWindowBadge<R = void>(): R;
    reloadTouchBars<R = void>(): R;
    libraryControllerDidChange<R = void, P0 = unknown>(_libraryControllerDidChange: P0): R;
    setFileURL<R = void, P0 = unknown>(_setFileURL: P0): R;
    visitSymbolMasterWithID<R = void, P0 = unknown>(_visitSymbolMasterWithID: P0): R;
    openLibrariesForForeignObjects<R = void, P0 = unknown>(_openLibrariesForForeignObjects: P0): R;
    visitArtboardForInstance<R = void, P0 = unknown>(_visitArtboardForInstance: P0): R;
    removeViewportForArtboard<R = void, P0 = unknown>(_removeViewportForArtboard: P0): R;
    canRestoreViewportAfterArtboardEdit<R = boolean, P0 = unknown>(_canRestoreViewportAfterArtboardEdit: P0): R;
    restoreViewportAfterArtboardEdit<R = void, P0 = unknown>(_restoreViewportAfterArtboardEdit: P0): R;
    storeViewport_andInstance_forArtboard<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_storeViewport: P0, _andInstance: P1, _forArtboard: P2): R;
    isShowingMeasurements<R = boolean>(): R;
    resetHiddenSelectionHandles<R = void>(): R;
    documentData_immediatelyShowSelectionForLayer<R = void, P0 = unknown, P1 = unknown>(_documentData: P0, _immediatelyShowSelectionForLayer: P1): R;
    temporarilyDisableSelectionHidingDuringBlock<R = void, P0 = CDUnknownBlockType>(_temporarilyDisableSelectionHidingDuringBlock: P0): R;
    shouldDrawSelectionForLayer<R = boolean, P0 = unknown>(_shouldDrawSelectionForLayer: P0): R;
    flagsChangedNotification<R = void, P0 = unknown>(_flagsChangedNotification: P0): R;
    refreshInspectorIfNecessary<R = void, P0 = unknown>(_refreshInspectorIfNecessary: P0): R;
    refreshLayerListIfNecessary<R = void, P0 = unknown>(_refreshLayerListIfNecessary: P0): R;
    scheduleSupplementaryViewRefresh<R = void>(): R;
    refreshSidebarWithMask<R = void, P0 = number>(_refreshSidebarWithMask: P0): R;
    debugRunJSAPIUnitTests<R = void, P0 = unknown>(_debugRunJSAPIUnitTests: P0): R;
    debugCountObject_counts<R = void, P0 = unknown, P1 = unknown>(_debugCountObject: P0, _counts: P1): R;
    debugCountObjects<R = void, P0 = unknown>(_debugCountObjects: P0): R;
    pageTreeLayoutDidChange<R = void>(): R;
    currentArtboardDidChange<R = void>(): R;
    layerPositionPossiblyChanged<R = void>(): R;
    addBlankPage<R = unknown>(): R;
    toggleClickThrough<R = void, P0 = unknown>(_toggleClickThrough: P0): R;
    isInspectorVisible<R = boolean>(): R;
    isLayerListVisible<R = boolean>(): R;
    isRulersVisible<R = boolean>(): R;
    pages<R = unknown>(): R;
    layerStyles<R = unknown>(): R;
    removePage<R = void, P0 = unknown>(_removePage: P0): R;
    setCurrentPage<R = void, P0 = unknown>(_setCurrentPage: P0): R;
    artboards<R = unknown>(): R;
    normalHandler<R = unknown>(): R;
    toggleHandlerClass<R = unknown, P0 = unknown>(_toggleHandlerClass: P0): R;
    scheduleReloadInspector<R = void>(): R;
    reloadInspector<R = void>(): R;
    reloadView<R = void>(): R;
    deleteSymbolMasters<R = void, P0 = unknown>(_deleteSymbolMasters: P0): R;
    actionForMenu<R = unknown, P0 = unknown>(_actionForMenu: P0): R;
    checkForTextLayerChanges<R = void, P0 = unknown>(_checkForTextLayerChanges: P0): R;
    historyMakerDidProgressHistory<R = void, P0 = unknown>(_historyMakerDidProgressHistory: P0): R;
    historyMakerDidRevertHistory<R = void, P0 = unknown>(_historyMakerDidRevertHistory: P0): R;
    historyMaker_didApplyHistoryUpdate<R = void, P0 = unknown, P1 = number>(_historyMaker: P0, _didApplyHistoryUpdate: P1): R;
    registerHistoryMomentTitle<R = void, P0 = unknown>(_registerHistoryMomentTitle: P0): R;
    updateSelectionFollowingChangeToImmutableDocumentData<R = void>(): R;
    changeToImmutableDocumentData_selecting_onPage<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_changeToImmutableDocumentData: P0, _selecting: P1, _onPage: P2): R;
    commitHistoryIfNecessary<R = void, P0 = unknown>(_commitHistoryIfNecessary: P0): R;
    flushCachesIfNecessary<R = void>(): R;
    currentVerticalRulerData<R = unknown>(): R;
    currentHorizontalRulerData<R = unknown>(): R;
    zoomValueDidChange<R = void>(): R;
    performPostPageSwitchUpdates<R = void>(): R;
    inspectorIsMain<R = boolean>(): R;
    selectToolbarItemWithIdentifier<R = void, P0 = unknown>(_selectToolbarItemWithIdentifier: P0): R;
    closestVisibleIdentifierInToolbarForIdentifier<R = unknown, P0 = unknown>(_closestVisibleIdentifierInToolbarForIdentifier: P0): R;
    isSeparatorIdentifier<R = boolean, P0 = unknown>(_isSeparatorIdentifier: P0): R;
    flagsChanged<R = void, P0 = unknown>(_flagsChanged: P0): R;
    currentHandlerKey<R = unknown>(): R;
    currentHandler<R = unknown>(): R;
    updateFilterSettings<R = void>(): R;
    onFilterChanged<R = void, P0 = unknown>(_onFilterChanged: P0): R;
    validateMenuItemTitleAndState<R = void, P0 = unknown>(_validateMenuItemTitleAndState: P0): R;
    hasArtboards<R = boolean>(): R;
    layerWouldOverlapExistingLayer_inGroup<R = boolean, P0 = unknown, P1 = unknown>(_layerWouldOverlapExistingLayer: P0, _inGroup: P1): R;
    offsetLayerIfNecessary_forInsertingInGroup<R = void, P0 = unknown, P1 = unknown>(_offsetLayerIfNecessary: P0, _forInsertingInGroup: P1): R;
    addLayer_changeName<R = void, P0 = unknown, P1 = boolean>(_addLayer: P0, _changeName: P1): R;
    addLayer<R = void, P0 = unknown>(_addLayer: P0): R;
    findCurrentArtboardGroup<R = unknown>(): R;
    setCurrentArtboard<R = void, P0 = unknown>(_setCurrentArtboard: P0): R;
    coalescedDetermineArtboardNotification<R = void, P0 = unknown>(_coalescedDetermineArtboardNotification: P0): R;
    putSelectionBackInCanvasIfPossible<R = void>(): R;
    updateHistoryWithSelection<R = void>(): R;
    layerSelectionDidChange<R = void>(): R;
    hasLayerSelectionChanged<R = boolean>(): R;
    selectedLayers<R = unknown>(): R;
    currentPage<R = unknown>(): R;
    exportSliceLayers<R = void, P0 = unknown>(_exportSliceLayers: P0): R;
    allExportableLayers<R = unknown>(): R;
    returnToNormalHandler<R = void>(): R;
    currentHandlerChanged<R = void>(): R;
    windowNibName<R = unknown>(): R;
    toolbar<R = unknown>(): R;
    shouldCreateToolbar<R = boolean>(): R;
    loadLayerListPanel<R = void>(): R;
    resetDocumentData<R = void, P0 = unknown>(_resetDocumentData: P0): R;
    loadInspectorPanel<R = void>(): R;
    awakeFromNib<R = void>(): R;
    updateCountDownButton<R = void>(): R;
    wireDocumentDataToUI<R = void>(): R;
    contentDrawView<R = unknown>(): R;
    notifyIfDocumentResignedCurrent<R = void>(): R;
    notifyIfDocumentBecameCurrent<R = void>(): R;
    window<R = unknown>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    setViewsToNil<R = void>(): R;
    setViewControllersToNil<R = void>(): R;
    setDelegatesToNil<R = void>(): R;
    createActions<R = void>(): R;
    cloudDocumentKey<R = unknown>(): R;
    hudDocumentData<R = unknown>(): R;
    hudSetMonitor<R = void, P0 = unknown>(_hudSetMonitor: P0): R;
    hudClientName<R = unknown>(): R;
    saveDocumentToURL_saveMode_context_callback<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = unknown>(_saveDocumentToURL: P0, _saveMode: P1, _context: P2, _callback: P3): R;
    showMessage<R = void, P0 = unknown>(_showMessage: P0): R;
    dataForRequest_ofType<R = unknown, P0 = unknown, P1 = unknown>(_dataForRequest: P0, _ofType: P1): R;
    saveExportRequest_toFile<R = void, P0 = unknown, P1 = unknown>(_saveExportRequest: P0, _toFile: P1): R;
    exportRequestWithName_rect<R = unknown, P0 = unknown, P1 = CGRect>(_exportRequestWithName: P0, _rect: P1): R;
    exportRequestForArtboardOrSlice<R = unknown, P0 = unknown>(_exportRequestForArtboardOrSlice: P0): R;
    saveArtboardOrSlice_toFile<R = void, P0 = unknown, P1 = unknown>(_saveArtboardOrSlice: P0, _toFile: P1): R;
    askForUserInput_ofType_initialValue<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_askForUserInput: P0, _ofType: P1, _initialValue: P2): R;
    askForUserInput_initialValue<R = unknown, P0 = unknown, P1 = unknown>(_askForUserInput: P0, _initialValue: P1): R;
    pluginContext<R = unknown>(): R;
    askToOpenDocumentRepairingMetadata<R = boolean>(): R;
    askToOpenDocumentWithMissingFonts_savingWillChangeFonts<R = boolean, P0 = unknown, P1 = boolean>(_askToOpenDocumentWithMissingFonts: P0, _savingWillChangeFonts: P1): R;
    alertDocumentCorruptionWasDetected<R = boolean>(): R;
    contactSupportAction<R = void, P0 = unknown>(_contactSupportAction: P0): R;
    handleNewerDocument_error<R = boolean, P0 = unknown, P1 = unknown>(_handleNewerDocument: P0, _error: P1): R;
    askToOpenNewerDocument<R = number>(): R;
    resetImportedDocument<R = void, P0 = unknown>(_resetImportedDocument: P0): R;
    readImageFromPath_error<R = boolean, P0 = unknown, P1 = unknown>(_readImageFromPath: P0, _error: P1): R;
    addLayerFromImageAtURL_toGroup_fitPixels_error<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean, P3 = unknown>(_addLayerFromImageAtURL: P0, _toGroup: P1, _fitPixels: P2, _error: P3): R;
    migrateUIMetadataWithDocumentData<R = void, P0 = unknown>(_migrateUIMetadataWithDocumentData: P0): R;
    readFromDocumentWrapper_ofType_corruptionDetected_error<R = boolean, P0 = unknown, P1 = unknown, P2 = string, P3 = unknown>(_readFromDocumentWrapper: P0, _ofType: P1, _corruptionDetected: P2, _error: P3): R;
    validateDocument_error<R = boolean, P0 = unknown, P1 = unknown>(_validateDocument: P0, _error: P1): R;
    readDocumentFromURL_ofType_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_readDocumentFromURL: P0, _ofType: P1, _error: P2): R;
    readEPSFromURL_error<R = boolean, P0 = unknown, P1 = unknown>(_readEPSFromURL: P0, _error: P1): R;
    readPDFFromURL_error<R = boolean, P0 = unknown, P1 = unknown>(_readPDFFromURL: P0, _error: P1): R;
    readSVGFromURL_error<R = boolean, P0 = unknown, P1 = unknown>(_readSVGFromURL: P0, _error: P1): R;
    reportSaveActionAtURL_wasAutosave<R = void, P0 = unknown, P1 = boolean>(_reportSaveActionAtURL: P0, _wasAutosave: P1): R;
    prepareForSaveOperation<R = void, P0 = number>(_prepareForSaveOperation: P0): R;
    actionClasses<R = unknown>(): R;
    previousSelectedLayers<R = MSLayerArray>(): R;
    setPreviousSelectedLayers<R = void, P0 = MSLayerArray>(_v: P0): R;
    hasScheduledInspectorReload<R = boolean>(): R;
    setHasScheduledInspectorReload<R = void, P0 = boolean>(_v: P0): R;
    hasScheduledDocumentDidChange<R = boolean>(): R;
    setHasScheduledDocumentDidChange<R = void, P0 = boolean>(_v: P0): R;
    originalViewportsForEditedSymbols<R = NSMutableDictionary>(): R;
    setOriginalViewportsForEditedSymbols<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    backButtonController<R = MSBackButtonController>(): R;
    setBackButtonController<R = void, P0 = MSBackButtonController>(_v: P0): R;
    mutableUIMetadata<R = NSMutableDictionary>(): R;
    setMutableUIMetadata<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    cacheFlushInProgress<R = boolean>(): R;
    setCacheFlushInProgress<R = void, P0 = boolean>(_v: P0): R;
    mostRecentCacheFlushingTime<R = number>(): R;
    setMostRecentCacheFlushingTime<R = void, P0 = number>(_v: P0): R;
    resetHiddenSelectionHandlesTimer<R = NSTimer>(): R;
    setResetHiddenSelectionHandlesTimer<R = void, P0 = NSTimer>(_v: P0): R;
    layersWithHiddenSelectionHandles<R = NSMutableSet>(): R;
    setLayersWithHiddenSelectionHandles<R = void, P0 = NSMutableSet>(_v: P0): R;
    temporarilyDisableSelectionHiding<R = boolean>(): R;
    setTemporarilyDisableSelectionHiding<R = void, P0 = boolean>(_v: P0): R;
    supplementaryViewRefreshIsScheduled<R = boolean>(): R;
    setSupplementaryViewRefreshIsScheduled<R = void, P0 = boolean>(_v: P0): R;
    documentDataUsedForSupplementaryViews<R = MSImmutableDocumentData>(): R;
    setDocumentDataUsedForSupplementaryViews<R = void, P0 = MSImmutableDocumentData>(_v: P0): R;
    editingLibraryWarning<R = unknown>(): R;
    setEditingLibraryWarning<R = void, P0 = unknown>(_v: P0): R;
    colorSpaceMismatchWarning<R = unknown>(): R;
    setColorSpaceMismatchWarning<R = void, P0 = unknown>(_v: P0): R;
    hasOpenedImageFile<R = boolean>(): R;
    setHasOpenedImageFile<R = void, P0 = boolean>(_v: P0): R;
    nextReadFromURLIsReload<R = boolean>(): R;
    setNextReadFromURLIsReload<R = void, P0 = boolean>(_v: P0): R;
    currentContentViewController<R = MSContentDrawViewController>(): R;
    setCurrentContentViewController<R = void, P0 = MSContentDrawViewController>(_v: P0): R;
    sidebarController<R = BCSideBarViewController>(): R;
    setSidebarController<R = void, P0 = BCSideBarViewController>(_v: P0): R;
    inspectorController<R = MSInspectorController>(): R;
    setInspectorController<R = void, P0 = MSInspectorController>(_v: P0): R;
    historyMaker<R = MSHistoryMaker>(): R;
    setHistoryMaker<R = void, P0 = MSHistoryMaker>(_v: P0): R;
    cacheManager<R = MSCacheManager>(): R;
    eventHandlerManager<R = MSEventHandlerManager>(): R;
    setEventHandlerManager<R = void, P0 = MSEventHandlerManager>(_v: P0): R;
    documentData<R = MSDocumentData>(): R;
    setDocumentData<R = void, P0 = MSDocumentData>(_v: P0): R;
    badgeController<R = MSBadgeController>(): R;
    setBadgeController<R = void, P0 = MSBadgeController>(_v: P0): R;
    actionsController<R = MSActionController>(): R;
    setActionsController<R = void, P0 = MSActionController>(_v: P0): R;
    toolbarConstructor<R = MSToolbarConstructor>(): R;
    setToolbarConstructor<R = void, P0 = MSToolbarConstructor>(_v: P0): R;
    canvasPlaceholderView<R = NSView>(): R;
    setCanvasPlaceholderView<R = void, P0 = NSView>(_v: P0): R;
    inspectorPlaceholderView<R = NSView>(): R;
    setInspectorPlaceholderView<R = void, P0 = NSView>(_v: P0): R;
    splitViewController<R = MSMainSplitViewController>(): R;
    setSplitViewController<R = void, P0 = MSMainSplitViewController>(_v: P0): R;
    messageView<R = NSView>(): R;
    setMessageView<R = void, P0 = NSView>(_v: P0): R;
    documentWindow<R = NSWindow>(): R;
    setDocumentWindow<R = void, P0 = NSWindow>(_v: P0): R;
    pageListCollapsed<R = boolean>(): R;
    setPageListCollapsed<R = void, P0 = boolean>(_v: P0): R;
    pageListHeight<R = number>(): R;
    setPageListHeight<R = void, P0 = number>(_v: P0): R;
    UIMetadata<R = NSDictionary>(): R;
    setUIMetadata<R = void, P0 = NSDictionary>(_v: P0): R;
    exportableLayerSelection<R = NSArray>(): R;
    setExportableLayerSelection<R = void, P0 = NSArray>(_v: P0): R;
    zoomValue<R = number>(): R;
    setZoomValue<R = void, P0 = number>(_v: P0): R;
    scrollOrigin<R = CGPoint>(): R;
    setScrollOrigin<R = void, P0 = CGPoint>(_v: P0): R;
    immutableDocumentData<R = MSImmutableDocumentData>(): R;
    defaultFirstResponder<R = NSResponder>(): R;
    isCurrent<R = boolean>(): R;
    canvasColorSpace<R = NSColorSpace>(): R;
    documentColorSpace<R = NSColorSpace>(): R;
    colorSpace<R = NSColorSpace>(): R;
    cloudShare<R = SCKShare>(): R;
    setCloudShare<R = void, P0 = SCKShare>(_v: P0): R;
    cloudName<R = NSString>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSDocument {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDocument, MSCloudExportableDocumentProtocol, MSSidebarControllerDelegateProtocol, BCSideBarViewControllerDelegateProtocol, NSMenuDelegateProtocol, NSToolbarDelegateProtocol, NSWindowDelegateProtocol, MSEventHandlerManagerDelegateProtocol, MSDocumentDataDelegateProtocol, MSMenuBuilderDelegateProtocol {
      alloc<R = MSDocument>(): R;
      new: <R = MSDocument>() => R;
      currentDocument<R = unknown>(): R;
      windowForSheet<R = unknown>(): R;
    }
  }
}

declare const MSDocument: cocoa.MSDocument.CLASS;
