/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableDocumentData<T0 = void, T1 = void, T2 = void> extends _MSImmutableDocumentData, MSLayerContainmentProtocol, MSDocumentDataProtocol {
    pagesAndArtboardsMetadata<R = unknown>(): R;
    allSymbols<R = unknown>(): R;
    localSymbols<R = unknown>(): R;
    allArtboards<R = unknown>(): R;
    wasSavedByTestVersion<R = boolean>(): R;
    wasSavedByOldVersion<R = boolean>(): R;
    usedFontNames<R = unknown>(): R;
    artboardWithID_page<R = unknown, P0 = unknown, P1 = unknown>(_artboardWithID: P0, _page: P1): R;
    layerStyleWithID<R = unknown, P0 = unknown>(_layerStyleWithID: P0): R;
    textStyleWithID<R = unknown, P0 = unknown>(_textStyleWithID: P0): R;
    allLayerStyles<R = unknown>(): R;
    allTextStyles<R = unknown>(): R;
    artboardWithID<R = unknown, P0 = unknown>(_artboardWithID: P0): R;
    symbolWithID<R = unknown, P0 = unknown>(_symbolWithID: P0): R;
    pageWithID<R = unknown, P0 = unknown>(_pageWithID: P0): R;
    defaultPagesArray<R = unknown>(): R;
    newPageForMigratedSymbols<R = unknown, P0 = unknown>(_newPageForMigratedSymbols: P0): R;
    arrangeMigratedSymbolsInGrid<R = void, P0 = unknown>(_arrangeMigratedSymbolsInGrid: P0): R;
    stripRedundantOverridesFromInstances_ofSymbol<R = void, P0 = unknown, P1 = unknown>(_stripRedundantOverridesFromInstances: P0, _ofSymbol: P1): R;
    stripRedundantOverridesFromInstancesOfSymbols<R = void, P0 = unknown>(_stripRedundantOverridesFromInstancesOfSymbols: P0): R;
    migratedSymbolFromSymbol_group<R = unknown, P0 = unknown, P1 = unknown>(_migratedSymbolFromSymbol: P0, _group: P1): R;
    migratedSymbolsFromOldSymbols<R = unknown, P0 = unknown>(_migratedSymbolsFromOldSymbols: P0): R;
    migratePropertiesFromV91OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV91OrEarlierWithUnarchiver: P0): R;
    regenerateObjectIDOnSymbolMaster<R = void, P0 = unknown>(_regenerateObjectIDOnSymbolMaster: P0): R;
    migratePropertiesFromV78OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV78OrEarlierWithUnarchiver: P0): R;
    migratePropertiesFromV62OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV62OrEarlierWithUnarchiver: P0): R;
    migratePropertiesFromV60OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV60OrEarlierWithUnarchiver: P0): R;
    migratePropertiesFromV54OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV54OrEarlierWithUnarchiver: P0): R;
    symbolsChangedSincePreviousDocument<R = boolean, P0 = unknown>(_symbolsChangedSincePreviousDocument: P0): R;
    subObjectsForTreeDiff<R = unknown>(): R;
    trackColors_withinHierarchyOf_excludeForeignSymbols<R = void, P0 = unknown, P1 = unknown, P2 = boolean>(_trackColors: P0, _withinHierarchyOf: P1, _excludeForeignSymbols: P2): R;
    trackColors_excludeForeignSymbols<R = void, P0 = unknown, P1 = boolean>(_trackColors: P0, _excludeForeignSymbols: P1): R;
    colorFinderQueue<R = unknown>(): R;
    findFrequentColorsForUse_maximumColorCount_ignoreAlpha_excludeForeignSymbols_completionHandler<R = void, P0 = number, P1 = number, P2 = boolean, P3 = boolean, P4 = CDUnknownBlockType>(_findFrequentColorsForUse: P0, _maximumColorCount: P1, _ignoreAlpha: P2, _excludeForeignSymbols: P3, _completionHandler: P4): R;
    prepareForRender<R = void, P0 = unknown>(_prepareForRender: P0): R;
    symbolsIndexedByID<R = NSDictionary>(): R;
    setSymbolsIndexedByID<R = void, P0 = NSDictionary>(_v: P0): R;
    selectedOverrides<R = NSArray>(): R;
    metadata<R = NSDictionary>(): R;
    setMetadata<R = void, P0 = NSDictionary>(_v: P0): R;
    currentPage<R = MSImmutablePage>(): R;
    containsUnavailableFontNames<R = boolean>(): R;
    unavailableFontNames<R = NSSet>(): R;
    fontNames<R = NSSet>(): R;
    pages<R = NSArray>(): R;
    // + MSImmutableDocumentData(MSRenderPreparation): 
    prepareForRender<R = void, P0 = unknown>(_prepareForRender: P0): R;
  }
  namespace MSImmutableDocumentData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableDocumentData, MSLayerContainmentProtocol, MSDocumentDataProtocol {
      alloc<R = MSImmutableDocumentData>(): R;
      new: <R = MSImmutableDocumentData>() => R;
      loadDocumentDataWithMetadata_loadBlock<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_loadDocumentDataWithMetadata: P0, _loadBlock: P1): R;
  
  }
  }
}

declare const MSImmutableDocumentData: cocoa.MSImmutableDocumentData.CLASS;
