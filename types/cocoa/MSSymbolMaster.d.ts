/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSymbolMaster<T0 = void, T1 = void, T2 = void> extends _MSSymbolMaster, MSPreviewGenerationProtocol, MSLayerPreviewabilityProtocol, MSSharedObjectStylingProtocol, BCSortableProtocol {
    limitsSelectionToBounds<R = boolean>(): R;
    parentSymbol<R = unknown>(): R;
    ancestorIDsForLayerNamed_skip<R = unknown, P0 = unknown, P1 = unknown>(_ancestorIDsForLayerNamed: P0, _skip: P1): R;
    ancestorIDsForLayerNamed<R = unknown, P0 = unknown>(_ancestorIDsForLayerNamed: P0): R;
    isSafeToDelete<R = boolean>(): R;
    removeFromParentAndDetachAllInstances<R = void>(): R;
    detachAllInstances<R = void>(): R;
    ensureSymbolIDUniqueInDocument<R = boolean, P0 = unknown>(_ensureSymbolIDUniqueInDocument: P0): R;
    canInsertInstanceIntoGroupWithoutInfiniteRecursion<R = boolean, P0 = unknown>(_canInsertInstanceIntoGroupWithoutInfiniteRecursion: P0): R;
    hasInstances<R = boolean>(): R;
    nestedSymbolsSkipping<R = unknown, P0 = unknown>(_nestedSymbolsSkipping: P0): R;
    newSymbolInstance<R = unknown>(): R;
    copyWithIDMapping<R = unknown, P0 = unknown>(_copyWithIDMapping: P0): R;
    invalidateModifiedSymbolCache<R = void>(): R;
    initWithFrame<R = unknown, P0 = CGRect>(_initWithFrame: P0): R;
    canSnap_toLayer<R = boolean, P0 = number, P1 = unknown>(_canSnap: P0, _toLayer: P1): R;
    shareableObjectReferenceClass_bc<R = unknown>(): R;
    generatePreviewWithImageSize_previewSize_backingScale_shadow_colorSpace_completionBlock<R = void, P0 = CGSize, P1 = CGSize, P2 = number, P3 = boolean, P4 = unknown, P5 = CDUnknownBlockType>(_generatePreviewWithImageSize: P0, _previewSize: P1, _backingScale: P2, _shadow: P3, _colorSpace: P4, _completionBlock: P5): R;
    isDirty<R = boolean>(): R;
    setIsDirty<R = void, P0 = boolean>(_v: P0): R;
    changeIdentifier<R = number>(): R;
    setChangeIdentifier<R = void, P0 = number>(_v: P0): R;
    allInfluencedInstances<R = NSArray>(): R;
    nestedSymbols<R = NSSet>(): R;
    allInstances<R = NSArray>(): R;
    availableOverrides<R = NSArray>(): R;
    badgeType<R = number>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    name<R = NSString>(): R;
    superclass<R = unknown>(): R;
    // + MSSymbolMaster(InspectorSections): 
    inspectorSections<R = unknown>(): R;
    // + MSSymbolMaster(LayerList): 
    previewShouldIndicateSharedStyle<R = boolean>(): R;
    // + MSSymbolMaster(MSPreviewGeneration): 
    generatePreviewWithImageSize_previewSize_colorSpace_backingScale_completionBlock<R = void, P0 = CGSize, P1 = CGSize, P2 = unknown, P3 = number, P4 = CDUnknownBlockType>(_generatePreviewWithImageSize: P0, _previewSize: P1, _colorSpace: P2, _backingScale: P3, _completionBlock: P4): R;
    // + MSSymbolMaster(MSShareableObjectReferenceExtention): 
    shareableObjectReferenceClass_bc<R = unknown>(): R;
    // + MSSymbolMaster(MSSharedObjectStyling): 
    applyStyleToMenuItem_withColorSpace<R = void, P0 = unknown, P1 = unknown>(_applyStyleToMenuItem: P0, _withColorSpace: P1): R;
    generatePreviewWithImageSize_previewSize_backingScale_shadow_colorSpace_completionBlock<R = void, P0 = CGSize, P1 = CGSize, P2 = number, P3 = boolean, P4 = unknown, P5 = CDUnknownBlockType>(_generatePreviewWithImageSize: P0, _previewSize: P1, _backingScale: P2, _shadow: P3, _colorSpace: P4, _completionBlock: P5): R;
    generatePreviewForSyncSheetWithSize_backingScale_shadow_colorSpace_completionBlock<R = void, P0 = CGSize, P1 = number, P2 = boolean, P3 = unknown, P4 = CDUnknownBlockType>(_generatePreviewForSyncSheetWithSize: P0, _backingScale: P1, _shadow: P2, _colorSpace: P3, _completionBlock: P4): R;
    generatePreviewForManageSheetWithBackingScale_completionBlock<R = unknown, P0 = number, P1 = CDUnknownBlockType>(_generatePreviewForManageSheetWithBackingScale: P0, _completionBlock: P1): R;
    generatePreviewForPopup_backingScale_completionBlock<R = unknown, P0 = unknown, P1 = number, P2 = CDUnknownBlockType>(_generatePreviewForPopup: P0, _backingScale: P1, _completionBlock: P2): R;
    generatePreviewForMenuItem_withColorSpace_backingScale_completionBlock<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = CDUnknownBlockType>(_generatePreviewForMenuItem: P0, _withColorSpace: P1, _backingScale: P2, _completionBlock: P3): R;
    // + MSSymbolMaster(OptimalSize): 
    optimalBoundingBox<R = CGRect>(): R;
    // + MSSymbolMaster(Preview): 
    unselectedPreviewTemplateImage<R = unknown>(): R;
    selectedPreviewTemplateImage<R = unknown>(): R;
    // + MSSymbolMaster(SnapSupport): 
    canSnap_toLayer<R = boolean, P0 = number, P1 = unknown>(_canSnap: P0, _toLayer: P1): R;
    // + MSSymbolMaster(MSPreviewGeneration):
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
    // + MSSymbolMaster(Preview):
    badgeType<R = number>(): R;
  }
  namespace MSSymbolMaster {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSSymbolMaster, MSPreviewGenerationProtocol, MSLayerPreviewabilityProtocol, MSSharedObjectStylingProtocol, BCSortableProtocol {
      alloc<R = MSSymbolMaster>(): R;
      new: <R = MSSymbolMaster>() => R;
      copyPropertiesFrom_to<R = void, P0 = unknown, P1 = unknown>(_copyPropertiesFrom: P0, _to: P1): R;
      convertSymbolToArtboard<R = unknown, P0 = unknown>(_convertSymbolToArtboard: P0): R;
      convertArtboardToSymbol<R = unknown, P0 = unknown>(_convertArtboardToSymbol: P0): R;
  
  }
  }
}

declare const MSSymbolMaster: cocoa.MSSymbolMaster.CLASS;
