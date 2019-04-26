/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableShapeGroup<T0 = void, T1 = void, T2 = void> extends _MSImmutableShapeGroup, MSImmutableLayerPreviewabilityProtocol, MSShapeGroupProtocol, MSImmutablePathLayerProtocol {
    interfaceImageIdentifier<R = unknown>(): R;
    cacheOwner<R = unknown>(): R;
    migratePropertiesFromV110OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV110OrEarlierWithUnarchiver: P0): R;
    calculateInfluenceRectForBoundsInDocumentPre108<R = CGRect>(): R;
    migratePropertiesFromV103OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV103OrEarlierWithUnarchiver: P0): R;
    migratePropertiesFromV51OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV51OrEarlierWithUnarchiver: P0): R;
    migratePropertiesFromV106OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV106OrEarlierWithUnarchiver: P0): R;
    addDecorationToParent_exporter<R = void, P0 = unknown, P1 = unknown>(_addDecorationToParent: P0, _exporter: P1): R;
    addMaskToElement_exporter<R = unknown, P0 = unknown, P1 = unknown>(_addMaskToElement: P0, _exporter: P1): R;
    isPartOfClippingMask<R = boolean>(): R;
    hasMarkers<R = boolean>(): R;
    CGTransformForFrame<R = CGAffineTransform>(): R;
    bounds<R = CGRect>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hasTransforms<R = boolean>(): R;
    hash<R = number>(): R;
    influenceRectEdgePaddingsThatCascadeToContainedLayers<R = BCEdgePaddings>(): R;
    isFlippedHorizontal<R = boolean>(): R;
    isFlippedVertical<R = boolean>(): R;
    isLayerExportable<R = boolean>(): R;
    isVisible<R = boolean>(): R;
    objectID<R = NSString>(): R;
    origin<R = CGPoint>(): R;
    rect<R = CGRect>(): R;
    rotation<R = number>(): R;
    style<R = MSImmutableStyle>(): R;
    superclass<R = unknown>(): R;
    // + MSImmutableShapeGroup(InterfaceImageOwner): 
    interfaceImageIdentifier<R = unknown>(): R;
    cacheOwner<R = unknown>(): R;
    // + MSImmutableShapeGroup(Preview): 
    refreshPreviewImagesWithDocumentData_forOwner<R = void, P0 = unknown, P1 = unknown>(_refreshPreviewImagesWithDocumentData: P0, _forOwner: P1): R;
    previewImagesRequireRefreshWithDocumentData_forOwner<R = boolean, P0 = unknown, P1 = unknown>(_previewImagesRequireRefreshWithDocumentData: P0, _forOwner: P1): R;
    // + MSImmutableShapeGroup(SVGExport): 
    addContentToElement_attributes_exporter<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_addContentToElement: P0, _attributes: P1, _exporter: P2): R;
    addGroupContentToElement_attributes_exporter<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_addGroupContentToElement: P0, _attributes: P1, _exporter: P2): R;
    addSVGAttributes_exporter<R = void, P0 = unknown, P1 = unknown>(_addSVGAttributes: P0, _exporter: P1): R;
    addDecorationToParent_exporter<R = void, P0 = unknown, P1 = unknown>(_addDecorationToParent: P0, _exporter: P1): R;
    addMaskToElement_exporter<R = unknown, P0 = unknown, P1 = unknown>(_addMaskToElement: P0, _exporter: P1): R;
    simplifyPathElement_exporter_inset<R = void, P0 = unknown, P1 = unknown, P2 = number>(_simplifyPathElement: P0, _exporter: P1, _inset: P2): R;
    appendBaseTranslation_exporter<R = void, P0 = unknown, P1 = unknown>(_appendBaseTranslation: P0, _exporter: P1): R;
    requiresPathDefinition<R = boolean, P0 = unknown>(_requiresPathDefinition: P0): R;
    svgStyle<R = unknown, P0 = unknown>(_svgStyle: P0): R;
  }
  namespace MSImmutableShapeGroup {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableShapeGroup, MSImmutableLayerPreviewabilityProtocol, MSShapeGroupProtocol, MSImmutablePathLayerProtocol {
      alloc<R = MSImmutableShapeGroup>(): R;
      new: <R = MSImmutableShapeGroup>() => R;
  
  }
  }
}

declare const MSImmutableShapeGroup: cocoa.MSImmutableShapeGroup.CLASS;
