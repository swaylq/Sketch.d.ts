/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOverrideRepresentation<T0 = void, T1 = void, T2 = void> extends MSOverrideRepresentationBase, BCOutlineViewNodeProtocol, MSLayerListLayerExtensionsProtocol, MSInterfaceImageOwnerProtocol, MSHoverableItemProtocol {
    updateExpandedStateAfterSelection<R = void>(): R;
    transformForConvertingToInstance<R = unknown>(): R;
    calculateTransformAndPath<R = void>(): R;
    dealloc<R = void>(): R;
    initWithParent<R = unknown, P0 = unknown>(_initWithParent: P0): R;
    overrideRepresentation<R = unknown>(): R;
    placeholderIdentifier<R = unknown>(): R;
    overrideViewControllerHeightWithLayers_shouldShowLabel_indentationLevel<R = number, P0 = unknown, P1 = boolean, P2 = number>(_overrideViewControllerHeightWithLayers: P0, _shouldShowLabel: P1, _indentationLevel: P2): R;
    createOverrideViewController<R = unknown>(): R;
    hasHighlight<R = boolean>(): R;
    hudDescription<R = unknown>(): R;
    selectionHitTest<R = unknown, P0 = CGPoint>(_selectionHitTest: P0): R;
    layerListExpandedType<R = number>(): R;
    setLayerListExpandedType<R = void, P0 = number>(_v: P0): R;
    previousSibling<R = MSOverrideRepresentation>(): R;
    setPreviousSibling<R = void, P0 = MSOverrideRepresentation>(_v: P0): R;
    parent<R = MSOverrideRepresentationBase>(): R;
    availableOverride<R = MSAvailableOverride>(): R;
    setAvailableOverride<R = void, P0 = MSAvailableOverride>(_v: P0): R;
    description<R = NSString>(): R;
    pathInInstance<R = CGPath>(): R;
    setPathInInstance<R = void, P0 = CGPath>(_v: P0): R;
    modifiedParentMaster<R = MSImmutableSymbolMaster>(): R;
    isEditable<R = boolean>(): R;
    isAtRootLevel<R = boolean>(): R;
    selectionID<R = NSString>(): R;
    previewShouldIndicateSharedStyle<R = boolean>(): R;
    isExportableViaDragAndDrop<R = boolean>(): R;
    containedByHiddenAncestorNode<R = boolean>(): R;
    lockedOnCanvas<R = boolean>(): R;
    hiddenOnCanvas<R = boolean>(): R;
    selectedInLayerList<R = boolean>(): R;
    expandableInLayerList<R = boolean>(): R;
    badgeImages<R = MSTintedImages>(): R;
    hasBadgedIcon<R = boolean>(): R;
    isEditableInLayerList<R = boolean>(): R;
    isActive<R = boolean>(): R;
    nodeName<R = NSString>(): R;
    setNodeName<R = void, P0 = NSString>(_v: P0): R;
    filterTypeMask<R = number>(): R;
    displayType<R = number>(): R;
    interfaceImageIdentifier<R = NSString>(): R;
    cacheOwner<R = unknown>(): R;
    hoveredLayer<R = MSLayer>(): R;
    debugDescription<R = NSString>(): R;
    hash<R = number>(): R;
    isExpanded<R = boolean>(): R;
    superclass<R = unknown>(): R;
    // + MSOverrideRepresentation(HUD): 
    hudDescription<R = unknown>(): R;
    // + MSOverrideRepresentation(Hoverable): 
    refreshOverlay<R = void>(): R;
    drawHoverWithZoom_color_cache<R = void, P0 = number, P1 = unknown, P2 = unknown>(_drawHoverWithZoom: P0, _color: P1, _cache: P2): R;
    canBeHoveredOnPage<R = boolean, P0 = unknown>(_canBeHoveredOnPage: P0): R;
    // + MSOverrideRepresentation(LayerList): 
    updateLayerListPreviewIfRequiredWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_updateLayerListPreviewIfRequiredWithCompletionHandler: P0): R;
    moveToLayer_beforeLayer<R = void, P0 = unknown, P1 = unknown>(_moveToLayer: P0, _beforeLayer: P1): R;
    handleBadgeClickWithAltState<R = void, P0 = boolean>(_handleBadgeClickWithAltState: P0): R;
    canMoveToLayer_beforeLayer<R = boolean, P0 = unknown, P1 = unknown>(_canMoveToLayer: P0, _beforeLayer: P1): R;
    canCopyToLayer_beforeLayer<R = boolean, P0 = unknown, P1 = unknown>(_canCopyToLayer: P0, _beforeLayer: P1): R;
    addMastersForInstancesToDocument<R = void, P0 = unknown>(_addMastersForInstancesToDocument: P0): R;
    selfOrChildrenSelected<R = boolean>(): R;
    badgeMenuConfigurator<R = unknown>(): R;
    maskIconWithState<R = unknown, P0 = number>(_maskIconWithState: P0): R;
    previewIconWithState<R = unknown, P0 = number>(_previewIconWithState: P0): R;
    hasHighlight<R = boolean>(): R;
    // + MSOverrideRepresentation(MSOverrideViewController): 
    overrideViewControllerHeightWithLayers_shouldShowLabel_indentationLevel<R = number, P0 = unknown, P1 = boolean, P2 = number>(_overrideViewControllerHeightWithLayers: P0, _shouldShowLabel: P1, _indentationLevel: P2): R;
    createOverrideViewController<R = unknown>(): R;
    // + MSOverrideRepresentation(OverrideInspector): 
    overrideRepresentation<R = unknown>(): R;
    placeholderIdentifier<R = unknown>(): R;
    // + MSOverrideRepresentation(Hoverable):
    hoveredLayer<R = MSLayer>(): R;
    // + MSOverrideRepresentation(LayerList):
    previewShouldIndicateSharedStyle<R = boolean>(): R;
    isExportableViaDragAndDrop<R = boolean>(): R;
    containedByHiddenAncestorNode<R = boolean>(): R;
    lockedOnCanvas<R = boolean>(): R;
    hiddenOnCanvas<R = boolean>(): R;
    isSelectedInLayerList<R = boolean>(): R;
    expandableInLayerList<R = boolean>(): R;
    badgeImages<R = MSTintedImages>(): R;
    hasBadgedIcon<R = boolean>(): R;
    isEditableInLayerList<R = boolean>(): R;
    isActive<R = boolean>(): R;
    nodeName<R = NSString>(): R;
    setNodeName<R = void, P0 = NSString>(_v: P0): R;
    filterTypeMask<R = number>(): R;
    displayType<R = number>(): R;
    outlineViewNodeIdentifier<R = NSString>(): R;
    interfaceImageIdentifier<R = NSString>(): R;
    cacheOwner<R = unknown>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    isExpanded<R = boolean>(): R;
    layerListExpandedType<R = number>(): R;
    setLayerListExpandedType<R = void, P0 = number>(_v: P0): R;
    superclass<R = unknown>(): R;
    // + MSOverrideRepresentation(OverrideInspector):
    isAtRootLevel<R = boolean>(): R;
  }
  namespace MSOverrideRepresentation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSOverrideRepresentationBase, BCOutlineViewNodeProtocol, MSLayerListLayerExtensionsProtocol, MSInterfaceImageOwnerProtocol, MSHoverableItemProtocol {
      alloc<R = MSOverrideRepresentation>(): R;
      new: <R = MSOverrideRepresentation>() => R;
  
  }
  }
}

declare const MSOverrideRepresentation: cocoa.MSOverrideRepresentation.CLASS;
