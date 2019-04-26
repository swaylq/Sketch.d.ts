/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableLayer<T0 = void, T1 = void, T2 = void> extends _MSImmutableLayer, MSInterfaceImageOwnerProtocol, MSImmutableLayerPreviewabilityProtocol, MSLayerContainmentProtocol, MSFlowContainmentCheckProtocol, MSLayerProtocol, MSLayerTraitsProtocol {
    parentShapeInAncestors<R = unknown, P0 = unknown>(_parentShapeInAncestors: P0): R;
    canSkipAdvancedClipForStrokes<R = boolean>(): R;
    calculateInfluenceRectForBoundsInDocument_visitedSymbols<R = CGRect, P0 = unknown, P1 = unknown>(_calculateInfluenceRectForBoundsInDocument: P0, _visitedSymbols: P1): R;
    pathInFrameWithTransformsInDocument_asSubpath<R = unknown, P0 = unknown, P1 = boolean>(_pathInFrameWithTransformsInDocument: P0, _asSubpath: P1): R;
    pathInFrameInDocument_asSubpath<R = unknown, P0 = unknown, P1 = boolean>(_pathInFrameInDocument: P0, _asSubpath: P1): R;
    calculatePathInBoundsInDocument_asSubpath<R = unknown, P0 = unknown, P1 = boolean>(_calculatePathInBoundsInDocument: P0, _asSubpath: P1): R;
    pathInBoundsInDocument_asSubpath<R = unknown, P0 = unknown, P1 = boolean>(_pathInBoundsInDocument: P0, _asSubpath: P1): R;
    influenceRectForBoundsOrCalculateInBlock<R = CGRect, P0 = CDUnknownBlockType>(_influenceRectForBoundsOrCalculateInBlock: P0): R;
    influenceRectForBoundsInDocument_visitedSymbols<R = CGRect, P0 = unknown, P1 = unknown>(_influenceRectForBoundsInDocument: P0, _visitedSymbols: P1): R;
    influenceRectForFrameInDocument_visitedSymbols<R = CGRect, P0 = unknown, P1 = unknown>(_influenceRectForFrameInDocument: P0, _visitedSymbols: P1): R;
    influenceRectForBoundsInDocument<R = CGRect, P0 = unknown>(_influenceRectForBoundsInDocument: P0): R;
    influenceRectForFrameInDocument<R = CGRect, P0 = unknown>(_influenceRectForFrameInDocument: P0): R;
    isLine<R = boolean>(): R;
    rectByTransformingRect_andPaddingWithAncestors<R = CGRect, P0 = CGRect, P1 = unknown>(_rectByTransformingRect: P0, _andPaddingWithAncestors: P1): R;
    transformRectToParentCoordinates<R = CGRect, P0 = CGRect>(_transformRectToParentCoordinates: P0): R;
    absoluteOverlayInfluenceRectForAncestorGroups<R = CGRect, P0 = unknown>(_absoluteOverlayInfluenceRectForAncestorGroups: P0): R;
    absoluteInfluenceRectForAncestorGroups_document<R = CGRect, P0 = unknown, P1 = unknown>(_absoluteInfluenceRectForAncestorGroups: P0, _document: P1): R;
    bezierBoundsInAbsoluteCoordinatesWithAncestors<R = unknown, P0 = unknown>(_bezierBoundsInAbsoluteCoordinatesWithAncestors: P0): R;
    absoluteRectForAncestorGroups<R = CGRect, P0 = unknown>(_absoluteRectForAncestorGroups: P0): R;
    canBreakMaskChain<R = boolean>(): R;
    hasClippingMask<R = boolean>(): R;
    overrideViewControllerClassForOverridePoint<R = unknown, P0 = unknown>(_overrideViewControllerClassForOverridePoint: P0): R;
    overridePreviewImageInDocument<R = unknown, P0 = unknown>(_overridePreviewImageInDocument: P0): R;
    addPreviewWithBezier_documentData_forOwner<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_addPreviewWithBezier: P0, _documentData: P1, _forOwner: P2): R;
    previewImageWithBezier_documentData_selected<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean>(_previewImageWithBezier: P0, _documentData: P1, _selected: P2): R;
    hasSharedStyleInDocumentData<R = boolean, P0 = unknown>(_hasSharedStyleInDocumentData: P0): R;
    drawPreviewInRect_documentData_selected_bezier<R = void, P0 = CGRect, P1 = unknown, P2 = boolean, P3 = unknown>(_drawPreviewInRect: P0, _documentData: P1, _selected: P2, _bezier: P3): R;
    badgeTypeInDocumentData<R = number, P0 = unknown>(_badgeTypeInDocumentData: P0): R;
    descendantsToLayerWithID<R = unknown, P0 = unknown>(_descendantsToLayerWithID: P0): R;
    enumerateLayersWithOptions_classFilter_block<R = boolean, P0 = number, P1 = unknown, P2 = CDUnknownBlockType>(_enumerateLayersWithOptions: P0, _classFilter: P1, _block: P2): R;
    enumerateImmutableWithOptions_passingTest_parentCreatorBlock_inBlock<R = void, P0 = number, P1 = CDUnknownBlockType, P2 = CDUnknownBlockType, P3 = CDUnknownBlockType>(_enumerateImmutableWithOptions: P0, _passingTest: P1, _parentCreatorBlock: P2, _inBlock: P3): R;
    firstFlowWithSymbolsFromDocument_visited<R = unknown, P0 = unknown, P1 = unknown>(_firstFlowWithSymbolsFromDocument: P0, _visited: P1): R;
    enumeratorWithOptions<R = unknown, P0 = number>(_enumeratorWithOptions: P0): R;
    overridePointsWithParent_overrides_document<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_overridePointsWithParent: P0, _overrides: P1, _document: P2): R;
    defaultValueForOverridePoint_relatedOverrides_document<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_defaultValueForOverridePoint: P0, _relatedOverrides: P1, _document: P2): R;
    canOverridePoint_withAncestors<R = boolean, P0 = unknown, P1 = unknown>(_canOverridePoint: P0, _withAncestors: P1): R;
    shouldSkipDrawingInContext<R = boolean, P0 = unknown>(_shouldSkipDrawingInContext: P0): R;
    transparencyLayerUseRectCondition<R = number>(): R;
    shouldRenderInTransparencyLayer<R = boolean>(): R;
    configureBackgroundOfRequest<R = void, P0 = unknown>(_configureBackgroundOfRequest: P0): R;
    prepareSymbolCachesInDocument_withWorkerQueue<R = void, P0 = unknown, P1 = unknown>(_prepareSymbolCachesInDocument: P0, _withWorkerQueue: P1): R;
    prepareForRenderInDocument_withWorkerQueue<R = void, P0 = unknown, P1 = unknown>(_prepareForRenderInDocument: P0, _withWorkerQueue: P1): R;
    renderBitmapEffects<R = unknown, P0 = unknown>(_renderBitmapEffects: P0): R;
    addDefaultFillAttributes_exporter<R = void, P0 = unknown, P1 = unknown>(_addDefaultFillAttributes: P0, _exporter: P1): R;
    writeSVGToElement_withExporter<R = void, P0 = unknown, P1 = unknown>(_writeSVGToElement: P0, _withExporter: P1): R;
    addTransformAttributes_exporter<R = void, P0 = unknown, P1 = unknown>(_addTransformAttributes: P0, _exporter: P1): R;
    appendBaseTranslation_exporter<R = void, P0 = unknown, P1 = unknown>(_appendBaseTranslation: P0, _exporter: P1): R;
    relativeRectWithExporter<R = CGRect, P0 = unknown>(_relativeRectWithExporter: P0): R;
    layerOffsetWithExporter<R = CGPoint, P0 = unknown>(_layerOffsetWithExporter: P0): R;
    addSVGAttributes_exporter<R = void, P0 = unknown, P1 = unknown>(_addSVGAttributes: P0, _exporter: P1): R;
    svgStyle<R = unknown, P0 = unknown>(_svgStyle: P0): R;
    addPathDefinitionToDocument<R = void, P0 = unknown>(_addPathDefinitionToDocument: P0): R;
    simplifyPathElement_exporter_inset<R = void, P0 = unknown, P1 = unknown, P2 = number>(_simplifyPathElement: P0, _exporter: P1, _inset: P2): R;
    addGradientsToDocument<R = void, P0 = unknown>(_addGradientsToDocument: P0): R;
    addChildrenToElement_exporter<R = void, P0 = unknown, P1 = unknown>(_addChildrenToElement: P0, _exporter: P1): R;
    addGroupContentToElement_attributes_exporter<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_addGroupContentToElement: P0, _attributes: P1, _exporter: P2): R;
    addContentToElement_attributes_exporter<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_addContentToElement: P0, _attributes: P1, _exporter: P2): R;
    shouldIncludeInSVGExport<R = boolean, P0 = unknown>(_shouldIncludeInSVGExport: P0): R;
    requiresPathDefinition<R = boolean, P0 = unknown>(_requiresPathDefinition: P0): R;
    influenceRectForFrame<R = CGRect>(): R;
    traits<R = number>(): R;
    influenceRectEdgePaddingsThatDoNotCascade<R = BCEdgePaddings>(): R;
    influenceRectEdgePaddingsThatCascadeToContainedLayers<R = BCEdgePaddings>(): R;
    hasCalculatedInfluenceRectForBounds<R = boolean>(): R;
    frameForTransforms<R = CGRect>(): R;
    transform<R = NSAffineTransform>(): R;
    CGTransformForFrame<R = CGAffineTransform>(): R;
    center<R = CGPoint>(): R;
    origin<R = CGPoint>(): R;
    rect<R = CGRect>(): R;
    bounds<R = CGRect>(): R;
    hasEnabledBackgroundBlur<R = boolean>(): R;
    hasTransforms<R = boolean>(): R;
    isLayerExportable<R = boolean>(): R;
    shouldBeIncludedInParentPath<R = boolean>(): R;
    cacheOwner<R = unknown>(): R;
    interfaceImageIdentifier<R = NSString>(): R;
    dataSupplierIdentifier<R = NSString>(): R;
    unavailableFontNames<R = NSSet>(): R;
    fontNames<R = NSSet>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    isFlippedHorizontal<R = boolean>(): R;
    isFlippedVertical<R = boolean>(): R;
    isVisible<R = boolean>(): R;
    objectID<R = NSString>(): R;
    rotation<R = number>(): R;
    superclass<R = unknown>(): R;
    // + MSImmutableLayer(CoreImageEffects): 
    renderBitmapEffects<R = unknown, P0 = unknown>(_renderBitmapEffects: P0): R;
    // + MSImmutableLayer(ExportFormatRequestBackground): 
    configureBackgroundOfRequest<R = void, P0 = unknown>(_configureBackgroundOfRequest: P0): R;
    // + MSImmutableLayer(MSOverrideManagementItem): 
    previewImageForOverrideManagementByTintingImageWithName<R = unknown, P0 = unknown>(_previewImageForOverrideManagementByTintingImageWithName: P0): R;
    // + MSImmutableLayer(MSOverrideRepresentationPreview): 
    overridePreviewImageInDocument<R = unknown, P0 = unknown>(_overridePreviewImageInDocument: P0): R;
    // + MSImmutableLayer(MSRenderPreparation): 
    prepareForRender<R = void, P0 = unknown>(_prepareForRender: P0): R;
    gatherForRenderPreparation<R = void, P0 = unknown>(_gatherForRenderPreparation: P0): R;
    // + MSImmutableLayer(OverrideUI): 
    overrideViewControllerClassForOverridePoint<R = unknown, P0 = unknown>(_overrideViewControllerClassForOverridePoint: P0): R;
    // + MSImmutableLayer(Preview): 
    addPreviewWithPath_documentData_forOwner<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_addPreviewWithPath: P0, _documentData: P1, _forOwner: P2): R;
    bezierForDrawingPreviewFromPath<R = unknown, P0 = unknown>(_bezierForDrawingPreviewFromPath: P0): R;
    previewImageWithBezier_documentData_selected<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean>(_previewImageWithBezier: P0, _documentData: P1, _selected: P2): R;
    hasSharedStyleInDocumentData<R = boolean, P0 = unknown>(_hasSharedStyleInDocumentData: P0): R;
    drawPreviewInRect_selected_bezier<R = void, P0 = CGRect, P1 = boolean, P2 = unknown>(_drawPreviewInRect: P0, _selected: P1, _bezier: P2): R;
    refreshPreviewImagesWithDocumentData_forOwner<R = void, P0 = unknown, P1 = unknown>(_refreshPreviewImagesWithDocumentData: P0, _forOwner: P1): R;
    previewImagesRequireRefreshWithDocumentData_forOwner<R = boolean, P0 = unknown, P1 = unknown>(_previewImagesRequireRefreshWithDocumentData: P0, _forOwner: P1): R;
    badgeTypeInDocumentData<R = number, P0 = unknown>(_badgeTypeInDocumentData: P0): R;
    // + MSImmutableLayer(Rendering): 
    shouldSkipDrawingInContext<R = boolean, P0 = unknown>(_shouldSkipDrawingInContext: P0): R;
    transparencyLayerUseRectCondition<R = number>(): R;
    shouldRenderInTransparencyLayer<R = boolean>(): R;
    // + MSImmutableLayer(SVGExport): 
    addDefaultFillAttributes_exporter<R = void, P0 = unknown, P1 = unknown>(_addDefaultFillAttributes: P0, _exporter: P1): R;
    writeSVGToElement_withExporter<R = void, P0 = unknown, P1 = unknown>(_writeSVGToElement: P0, _withExporter: P1): R;
    addTransformAttributes_exporter<R = void, P0 = unknown, P1 = unknown>(_addTransformAttributes: P0, _exporter: P1): R;
    appendBaseTranslation_exporter<R = void, P0 = unknown, P1 = unknown>(_appendBaseTranslation: P0, _exporter: P1): R;
    relativeRectWithExporter<R = CGRect, P0 = unknown>(_relativeRectWithExporter: P0): R;
    layerOffsetWithExporter<R = CGPoint, P0 = unknown>(_layerOffsetWithExporter: P0): R;
    addSVGAttributes_exporter<R = void, P0 = unknown, P1 = unknown>(_addSVGAttributes: P0, _exporter: P1): R;
    svgStyle<R = unknown, P0 = unknown>(_svgStyle: P0): R;
    addPathDefinitionToDocument<R = void, P0 = unknown>(_addPathDefinitionToDocument: P0): R;
    simplifyPathElement_exporter_inset<R = void, P0 = unknown, P1 = unknown, P2 = number>(_simplifyPathElement: P0, _exporter: P1, _inset: P2): R;
    addGradientsToDocument<R = void, P0 = unknown>(_addGradientsToDocument: P0): R;
    addChildrenToElement_exporter<R = void, P0 = unknown, P1 = unknown>(_addChildrenToElement: P0, _exporter: P1): R;
    addGroupContentToElement_attributes_exporter<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_addGroupContentToElement: P0, _attributes: P1, _exporter: P2): R;
    addContentToElement_attributes_exporter<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_addContentToElement: P0, _attributes: P1, _exporter: P2): R;
    shouldIncludeInSVGExport<R = boolean, P0 = unknown>(_shouldIncludeInSVGExport: P0): R;
    requiresPathDefinition<R = boolean, P0 = unknown>(_requiresPathDefinition: P0): R;
    // + MSImmutableLayer(InterfaceImageOwner):
    cacheOwner<R = unknown>(): R;
    interfaceImageIdentifier<R = NSString>(): R;
    // + MSImmutableLayer(MSOverrideManagementItem):
    previewImageForOverrideManagement<R = NSImage>(): R;
  }
  namespace MSImmutableLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableLayer, MSInterfaceImageOwnerProtocol, MSImmutableLayerPreviewabilityProtocol, MSLayerContainmentProtocol, MSFlowContainmentCheckProtocol, MSLayerProtocol, MSLayerTraitsProtocol {
      alloc<R = MSImmutableLayer>(): R;
      new: <R = MSImmutableLayer>() => R;
  
  }
  }
}

declare const MSImmutableLayer: cocoa.MSImmutableLayer.CLASS;
