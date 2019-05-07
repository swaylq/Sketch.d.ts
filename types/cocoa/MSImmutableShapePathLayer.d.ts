/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableShapePathLayer<T0 = void, T1 = void, T2 = void> extends _MSImmutableShapePathLayer, MSImmutableLayerPreviewabilityProtocol, MSImmutablePathLayerProtocol {
    interfaceImageIdentifier<R = unknown>(): R;
    cacheOwner<R = unknown>(): R;
    migrateByTakingStyleFrom<R = void, P0 = unknown>(_migrateByTakingStyleFrom: P0): R;
    migratePropertiesFromShapeGroup<R = void, P0 = unknown>(_migratePropertiesFromShapeGroup: P0): R;
    migratePropertiesFromV99OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV99OrEarlierWithUnarchiver: P0): R;
    addDecorationToParent_exporter<R = void, P0 = unknown, P1 = unknown>(_addDecorationToParent: P0, _exporter: P1): R;
    addMaskToElement_exporter<R = unknown, P0 = unknown, P1 = unknown>(_addMaskToElement: P0, _exporter: P1): R;
    usedStyle<R = MSImmutableStyle>(): R;
    isEditing<R = boolean>(): R;
    isRectangle<R = boolean>(): R;
    isPolyline<R = boolean>(): R;
    isPolygon<R = boolean>(): R;
    numberOfCurvePoints<R = number>(): R;
    CGTransformForFrame<R = CGAffineTransform>(): R;
    bounds<R = CGRect>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hasMarkers<R = boolean>(): R;
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
    // + MSImmutableShapePathLayer(InterfaceImageOwner): 
    interfaceImageIdentifier<R = unknown>(): R;
    cacheOwner<R = unknown>(): R;
    // + MSImmutableShapePathLayer(Preview): 
    refreshPreviewImagesWithDocumentData_forOwner<R = void, P0 = unknown, P1 = unknown>(_refreshPreviewImagesWithDocumentData: P0, _forOwner: P1): R;
    previewImagesRequireRefreshWithDocumentData_forOwner<R = boolean, P0 = unknown, P1 = unknown>(_previewImagesRequireRefreshWithDocumentData: P0, _forOwner: P1): R;
    // + MSImmutableShapePathLayer(SVGExport): 
    addContentToElement_attributes_exporter<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_addContentToElement: P0, _attributes: P1, _exporter: P2): R;
    addGroupContentToElement_attributes_exporter<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_addGroupContentToElement: P0, _attributes: P1, _exporter: P2): R;
    addSVGAttributes_exporter<R = void, P0 = unknown, P1 = unknown>(_addSVGAttributes: P0, _exporter: P1): R;
    addDecorationToParent_exporter<R = void, P0 = unknown, P1 = unknown>(_addDecorationToParent: P0, _exporter: P1): R;
    addMaskToElement_exporter<R = unknown, P0 = unknown, P1 = unknown>(_addMaskToElement: P0, _exporter: P1): R;
    appendBaseTranslation_exporter<R = void, P0 = unknown, P1 = unknown>(_appendBaseTranslation: P0, _exporter: P1): R;
    requiresPathDefinition<R = boolean, P0 = unknown>(_requiresPathDefinition: P0): R;
    svgStyle<R = unknown, P0 = unknown>(_svgStyle: P0): R;
    relativeRectWithExporter<R = CGRect, P0 = unknown>(_relativeRectWithExporter: P0): R;
    simplifyPathElement_exporter_inset<R = void, P0 = unknown, P1 = unknown, P2 = number>(_simplifyPathElement: P0, _exporter: P1, _inset: P2): R;
  }
  namespace MSImmutableShapePathLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableShapePathLayer, MSImmutableLayerPreviewabilityProtocol, MSImmutablePathLayerProtocol {
      alloc<R = MSImmutableShapePathLayer>(): R;
      new: <R = MSImmutableShapePathLayer>() => R;
  
  }
  }
}

declare const MSImmutableShapePathLayer: cocoa.MSImmutableShapePathLayer.CLASS;
