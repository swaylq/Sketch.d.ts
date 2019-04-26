/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayer<T0 = void, T1 = void, T2 = void> extends _MSLayer, MSInterfaceImageOwnerProtocol, MSLayerPreviewabilityProtocol, MSHoverableItemProtocol, MSSnappableProtocol, MSLayerListLayerExtensionsProtocol, MSLayerContainmentProtocol, MSLayerProtocol, NSCopyingProtocol, MSRectDelegateProtocol {
    changeObservers<R = NSHashTable>(): R;
    setChangeObservers<R = void, P0 = NSHashTable>(_v: P0): R;
    absoluteRect<R = MSAbsoluteRect>(): R;
    setAbsoluteRect<R = void, P0 = MSAbsoluteRect>(_v: P0): R;
    // + MSLayer(AdjustAfterInsert): 
    adjustAfterInsert<R = void>(): R;
    // + MSLayer(DotRectType): 
    cornerRectType<R = number>(): R;
    // + MSLayer(Editing): 
    handlerClass<R = unknown>(): R;
    handleDoubleClick<R = boolean>(): R;
    // + MSLayer(ExportRequestBackground): 
    configureBackgroundOfRequest<R = void, P0 = unknown>(_configureBackgroundOfRequest: P0): R;
    // + MSLayer(Flow): 
    shouldRefreshOverlayForFlows<R = boolean>(): R;
    // + MSLayer(HUD): 
    hudDescription<R = unknown>(): R;
    // + MSLayer(Hiding): 
    canBeHidden<R = boolean>(): R;
    // + MSLayer(Hover): 
    canBeHoveredOnPage<R = boolean, P0 = unknown>(_canBeHoveredOnPage: P0): R;
    pathForHoverInBounds<R = unknown>(): R;
    drawHoverWithZoom_color_cache<R = void, P0 = number, P1 = unknown, P2 = unknown>(_drawHoverWithZoom: P0, _color: P1, _cache: P2): R;
    // + MSLayer(Inspector): 
    minimumAdjustedRectForValue_axis_anchor<R = CGRect, P0 = number, P1 = number, P2 = number>(_minimumAdjustedRectForValue: P0, _axis: P1, _anchor: P2): R;
    boundsOfParentLayer<R = CGRect>(): R;
    layerDidResizeFromInspector<R = void, P0 = number>(_layerDidResizeFromInspector: P0): R;
    // + MSLayer(InspectorSections): 
    inspectorSections<R = unknown>(): R;
    // + MSLayer(LayerList): 
    childrenForLayerList<R = unknown>(): R;
    cloneDictionaryReplacingImages<R = unknown, P0 = unknown>(_cloneDictionaryReplacingImages: P0): R;
    addMastersForInstancesToDocument<R = void, P0 = unknown>(_addMastersForInstancesToDocument: P0): R;
    moveToLayer_beforeLayer<R = void, P0 = unknown, P1 = unknown>(_moveToLayer: P0, _beforeLayer: P1): R;
    isMasked<R = boolean>(): R;
    updateLayerListPreviewIfRequiredWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_updateLayerListPreviewIfRequiredWithCompletionHandler: P0): R;
    handleBadgeClickWithAltState<R = void, P0 = boolean>(_handleBadgeClickWithAltState: P0): R;
    canCopyToLayer_beforeLayer<R = boolean, P0 = unknown, P1 = unknown>(_canCopyToLayer: P0, _beforeLayer: P1): R;
    canMoveToLayer_beforeLayer<R = boolean, P0 = unknown, P1 = unknown>(_canMoveToLayer: P0, _beforeLayer: P1): R;
    validateNodeName_error<R = boolean, P0 = unknown, P1 = unknown>(_validateNodeName: P0, _error: P1): R;
    badgeMenuConfigurator<R = unknown>(): R;
    maskIconWithState<R = unknown, P0 = number>(_maskIconWithState: P0): R;
    previewIconWithState<R = unknown, P0 = number>(_previewIconWithState: P0): R;
    // + MSLayer(LayerSelectionDrawing): 
    drawOverrideSelectionAt_requiresTransform<R = void, P0 = number, P1 = boolean>(_drawOverrideSelectionAt: P0, _requiresTransform: P1): R;
    // + MSLayer(MSFillAndBorderColorScreenPicker): 
    applyScreenPickerColor_preferredStyleName<R = void, P0 = unknown, P1 = unknown>(_applyScreenPickerColor: P0, _preferredStyleName: P1): R;
    // + MSLayer(Outlines): 
    canConvertToOutlines<R = boolean>(): R;
    layersByConvertingToOutlines<R = unknown>(): R;
    // + MSLayer(Preview): 
    contextualMenuPreviewTemplateImage<R = unknown>(): R;
    cachedImageForKey<R = unknown, P0 = unknown>(_cachedImageForKey: P0): R;
    unselectedPreviewTemplateImage<R = unknown>(): R;
    selectedPreviewTemplateImage<R = unknown>(): R;
    // + MSLayer(QLDebug): 
    debugQuickLookObject<R = unknown>(): R;
    // + MSLayer(ReplaceWithSymbol): 
    replaceWithInstanceOfSymbol<R = unknown, P0 = unknown>(_replaceWithInstanceOfSymbol: P0): R;
    // + MSLayer(Scripting): 
    writeBitmapImageToFile<R = void, P0 = unknown>(_writeBitmapImageToFile: P0): R;
    // + MSLayer(ScriptingLegacy): 
    select_byExpandingSelection_showSelection<R = void, P0 = boolean, P1 = boolean, P2 = boolean>(_select: P0, _byExpandingSelection: P1, _showSelection: P2): R;
    select_byExpandingSelection<R = void, P0 = boolean, P1 = boolean>(_select: P0, _byExpandingSelection: P1): R;
    duplicate<R = unknown>(): R;
    // + MSLayer(ShouldDrawSelection): 
    shouldDrawSelectionStroke<R = boolean>(): R;
    shouldDrawSelection<R = boolean>(): R;
    // + MSLayer(ShouldFlattenAfterRotate): 
    shouldFlattenAfterRotate<R = boolean>(): R;
    // + MSLayer(SmartRotate): 
    canSmartRotate<R = boolean>(): R;
    // + MSLayer(SnapSupport): 
    shouldDrawDistanceOnSnapTo<R = boolean, P0 = unknown>(_shouldDrawDistanceOnSnapTo: P0): R;
    canSnap_toLayer<R = boolean, P0 = number, P1 = unknown>(_canSnap: P0, _toLayer: P1): R;
    distanceRectangleToItem_axis<R = CGRect, P0 = unknown, P1 = number>(_distanceRectangleToItem: P0, _axis: P1): R;
    boundsRect<R = CGRect>(): R;
    textCorrectionTransform<R = CGAffineTransform>(): R;
    anchorsForSnappingOnAxes<R = unknown, P0 = number>(_anchorsForSnappingOnAxes: P0): R;
    enumerateAnchorsForSnappingOnAxes_includingCenter_usingBlock<R = void, P0 = number, P1 = boolean, P2 = CDUnknownBlockType>(_enumerateAnchorsForSnappingOnAxes: P0, _includingCenter: P1, _usingBlock: P2): R;
    snapItemClass<R = unknown>(): R;
    // + MSLayer(StyleForBoolean): 
    styleForBooleanOperation<R = unknown>(): R;
    // + MSLayer(UISupport): 
    parentForInsertingLayers<R = unknown>(): R;
    displayName<R = unknown>(): R;
    changeColor<R = void, P0 = unknown>(_changeColor: P0): R;
    supportsMultipleShadows<R = boolean>(): R;
    supportsInnerOuterBorders<R = boolean>(): R;
    // + MSLayer(CanChangeBooleanOperation):
    canChangeBooleanOperation<R = boolean>(): R;
    // + MSLayer(Hover):
    hoveredLayer<R = MSLayer>(): R;
    // + MSLayer(InterfaceImageOwner):
    cacheOwner<R = unknown>(): R;
    interfaceImageIdentifier<R = NSString>(): R;
    // + MSLayer(LayerList):
    isExportableViaDragAndDrop<R = boolean>(): R;
    lockedOnCanvas<R = boolean>(): R;
    containedByHiddenAncestorNode<R = boolean>(): R;
    hiddenOnCanvas<R = boolean>(): R;
    isSelectedInLayerList<R = boolean>(): R;
    expandableInLayerList<R = boolean>(): R;
    outlineViewNodeIdentifier<R = NSString>(): R;
    nodeName<R = NSString>(): R;
    setNodeName<R = void, P0 = NSString>(_v: P0): R;
    previewShouldIndicateSharedStyle<R = boolean>(): R;
    badgeImages<R = MSTintedImages>(): R;
    hasBadgedIcon<R = boolean>(): R;
    isEditableInLayerList<R = boolean>(): R;
    isActive<R = boolean>(): R;
    filterTypeMask<R = number>(): R;
    displayType<R = number>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    isExpanded<R = boolean>(): R;
    layerListExpandedType<R = number>(): R;
    setLayerListExpandedType<R = void, P0 = number>(_v: P0): R;
    superclass<R = unknown>(): R;
    // + MSLayer(Preview):
    badgeType<R = number>(): R;
    // + MSLayer(ShareableObject):
    MSSharedObjectStyling<R = BCSortable>(): R;
    shareableObjectType<R = number>(): R;
    // + MSLayer(SnapSupport):
    coordinateSpace<R = MSLayer>(): R;
    rectForSnapping<R = CGRect>(): R;
    snapItemForDrawing<R = MSSnappable>(): R;
    midXHeightAnchor<R = MSLayoutPosition>(): R;
    baselineAnchor<R = MSLayoutPosition>(): R;
    heightAnchor<R = MSLayoutDimension>(): R;
    widthAnchor<R = MSLayoutDimension>(): R;
    centerYAnchor<R = MSLayoutPosition>(): R;
    centerXAnchor<R = MSLayoutPosition>(): R;
    bottomAnchor<R = MSLayoutPosition>(): R;
    topAnchor<R = MSLayoutPosition>(): R;
    rightAnchor<R = MSLayoutPosition>(): R;
    leftAnchor<R = MSLayoutPosition>(): R;
    name<R = NSString>(): R;
  }
  namespace MSLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSLayer, MSInterfaceImageOwnerProtocol, MSLayerPreviewabilityProtocol, MSHoverableItemProtocol, MSSnappableProtocol, MSLayerListLayerExtensionsProtocol, MSLayerContainmentProtocol, MSLayerProtocol, NSCopyingProtocol, MSRectDelegateProtocol {
      alloc<R = MSLayer>(): R;
      new: <R = MSLayer>() => R;
      makeLayerNamesUnique_withOptions<R = void, P0 = unknown, P1 = number>(_makeLayerNamesUnique: P0, _withOptions: P1): R;
      layerWithPath<R = unknown, P0 = unknown>(_layerWithPath: P0): R;
      alignLayers_toValue_forKey<R = void, P0 = unknown, P1 = number, P2 = unknown>(_alignLayers: P0, _toValue: P1, _forKey: P2): R;
      alignmentRectForLayers<R = CGRect, P0 = unknown>(_alignmentRectForLayers: P0): R;
      alignLayers_withMode_toKey_pixelFit<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = boolean>(_alignLayers: P0, _withMode: P1, _toKey: P2, _pixelFit: P3): R;
      keyPathsForValuesAffectingBadgeMap<R = unknown>(): R;
      keyPathsForValuesAffectingNodeName<R = unknown>(): R;
      keyPathsForValuesAffectingUserVisibleRotation<R = unknown>(): R;
      rotationForUserVisibleRotation<R = number, P0 = number>(_rotationForUserVisibleRotation: P0): R;
      userVisibleRotationForRotation<R = number, P0 = number>(_userVisibleRotationForRotation: P0): R;
      // + MSLayer(Alignment): 
      alignLayers_toValue_forKey<R = void, P0 = unknown, P1 = number, P2 = unknown>(_alignLayers: P0, _toValue: P1, _forKey: P2): R;
      alignmentRectForLayers<R = CGRect, P0 = unknown>(_alignmentRectForLayers: P0): R;
      alignLayers_withMode_toKey_pixelFit<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = boolean>(_alignLayers: P0, _withMode: P1, _toKey: P2, _pixelFit: P3): R;
      // + MSLayer(LayerList): 
      keyPathsForValuesAffectingBadgeMap<R = unknown>(): R;
      keyPathsForValuesAffectingNodeName<R = unknown>(): R;
    }
  }
}

declare const MSLayer: cocoa.MSLayer.CLASS;
