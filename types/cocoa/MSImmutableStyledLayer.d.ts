/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableStyledLayer<T0 = void, T1 = void, T2 = void> extends _MSImmutableStyledLayer, MSImmutableLayerPreviewabilityProtocol, MSStyledLayerProtocol {
    hasMarkers<R = boolean>(): R;
    decoratedPathInBoundsInDocument_asSubpath<R = unknown, P0 = unknown, P1 = boolean>(_decoratedPathInBoundsInDocument: P0, _asSubpath: P1): R;
    influenceRectEdgePaddingsThatDoNotCascade<R = BCEdgePaddings>(): R;
    applyPropertiesToBezier<R = void, P0 = unknown>(_applyPropertiesToBezier: P0): R;
    shouldBeIncludedInParentPath<R = boolean>(): R;
    imageFillForOverridePoint_applyingStyleOverridesFrom_inDocument<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_imageFillForOverridePoint: P0, _applyingStyleOverridesFrom: P1, _inDocument: P2): R;
    bezierPathForEndDecorationOnPath<R = unknown, P0 = unknown>(_bezierPathForEndDecorationOnPath: P0): R;
    bezierPathForStartDecorationOnPath<R = unknown, P0 = unknown>(_bezierPathForStartDecorationOnPath: P0): R;
    roundDecorationTypeIfNecessary<R = number, P0 = number>(_roundDecorationTypeIfNecessary: P0): R;
    updateSharedStyleIDFromMigration<R = void, P0 = unknown>(_updateSharedStyleIDFromMigration: P0): R;
    trackColorsForBasicFill_tracker<R = void, P0 = unknown, P1 = unknown>(_trackColorsForBasicFill: P0, _tracker: P1): R;
    trackColors<R = void, P0 = unknown>(_trackColors: P0): R;
    strokeStyleForDecoratedPath<R = unknown>(): R;
    fillStyleForDecoratedPath<R = unknown>(): R;
    fillPathWithDecorations<R = unknown, P0 = unknown>(_fillPathWithDecorations: P0): R;
    prepareDrawingInContext_inBlock<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_prepareDrawingInContext: P0, _inBlock: P1): R;
    svgPathAttribute<R = unknown, P0 = unknown>(_svgPathAttribute: P0): R;
    pathWithExporter_border<R = unknown, P0 = unknown, P1 = unknown>(_pathWithExporter: P0, _border: P1): R;
    shadowsFollowRotation<R = boolean>(): R;
    allowsBlur<R = boolean>(): R;
    influenceRectEdgePaddingsThatCascadeToContainedLayers<R = BCEdgePaddings>(): R;
    shouldRasterize<R = boolean>(): R;
    CGTransformForFrame<R = CGAffineTransform>(): R;
    bounds<R = CGRect>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hasTransforms<R = boolean>(): R;
    hash<R = number>(): R;
    isFlippedHorizontal<R = boolean>(): R;
    isFlippedVertical<R = boolean>(): R;
    isLayerExportable<R = boolean>(): R;
    isVisible<R = boolean>(): R;
    objectID<R = NSString>(): R;
    origin<R = CGPoint>(): R;
    rect<R = CGRect>(): R;
    rotation<R = number>(): R;
    superclass<R = unknown>(): R;
    // + MSImmutableStyledLayer(BlurEffect): 
    renderBitmapEffects<R = unknown, P0 = unknown>(_renderBitmapEffects: P0): R;
    // + MSImmutableStyledLayer(FrequentColors): 
    trackColorsForBasicFill_enumeratorBlock<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_trackColorsForBasicFill: P0, _enumeratorBlock: P1): R;
    enumerateColors<R = void, P0 = CDUnknownBlockType>(_enumerateColors: P0): R;
    // + MSImmutableStyledLayer(OverrideUI): 
    overrideViewControllerClassForOverridePoint<R = unknown, P0 = unknown>(_overrideViewControllerClassForOverridePoint: P0): R;
    // + MSImmutableStyledLayer(Preview): 
    hasSharedStyleInDocumentData<R = boolean, P0 = unknown>(_hasSharedStyleInDocumentData: P0): R;
    // + MSImmutableStyledLayer(Rendering): 
    strokeStyleForDecoratedPath<R = unknown>(): R;
    fillStyleForDecoratedPath<R = unknown>(): R;
    fillPathWithDecorations<R = unknown, P0 = unknown>(_fillPathWithDecorations: P0): R;
    shouldSkipDrawingInContext<R = boolean, P0 = unknown>(_shouldSkipDrawingInContext: P0): R;
    shouldRenderInTransparencyLayer<R = boolean>(): R;
    prepareDrawingInContext_inBlock<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_prepareDrawingInContext: P0, _inBlock: P1): R;
    // + MSImmutableStyledLayer(SVGExport): 
    addPathDefinitionToDocument<R = void, P0 = unknown>(_addPathDefinitionToDocument: P0): R;
    svgPathAttribute<R = unknown, P0 = unknown>(_svgPathAttribute: P0): R;
    pathWithExporter_border<R = unknown, P0 = unknown, P1 = unknown>(_pathWithExporter: P0, _border: P1): R;
    addGroupContentToElement_attributes_exporter<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_addGroupContentToElement: P0, _attributes: P1, _exporter: P2): R;
    addGradientsToDocument<R = void, P0 = unknown>(_addGradientsToDocument: P0): R;
    // + MSImmutableStyledLayer(Rendering):
    shouldRasterize<R = boolean>(): R;
  }
  namespace MSImmutableStyledLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableStyledLayer, MSImmutableLayerPreviewabilityProtocol, MSStyledLayerProtocol {
      alloc<R = MSImmutableStyledLayer>(): R;
      new: <R = MSImmutableStyledLayer>() => R;
      initialize<R = void>(): R;
      filledSquareRoundedDecoration<R = unknown>(): R;
      filledSquareDecoration<R = unknown>(): R;
      openSquareDecoration<R = unknown>(): R;
      filledCircleDecoration<R = unknown>(): R;
      openCircleDecoration<R = unknown>(): R;
      lineDecoration<R = unknown>(): R;
      openArrowDecoration<R = unknown>(): R;
      filledArrowDecoration<R = unknown>(): R;
      filledArrowRoundedDecoration<R = unknown>(): R;
      roundedPath_cornerRadius<R = unknown, P0 = unknown, P1 = number>(_roundedPath: P0, _cornerRadius: P1): R;
      pathForDecorationType<R = unknown, P0 = number>(_pathForDecorationType: P0): R;
      cacheDecorations<R = void>(): R;
      transformedPath_atPoint_rotation_scale_flipped<R = unknown, P0 = unknown, P1 = CGPoint, P2 = number, P3 = CGSize, P4 = boolean>(_transformedPath: P0, _atPoint: P1, _rotation: P2, _scale: P3, _flipped: P4): R;
      adjustPath_forDecotationType_strokeWidth_scale<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = CGSize>(_adjustPath: P0, _forDecotationType: P1, _strokeWidth: P2, _scale: P3): R;
      orderedIntersectionsForContour_withSegment<R = unknown, P0 = unknown, P1 = unknown>(_orderedIntersectionsForContour: P0, _withSegment: P1): R;
      intersectionPolygonForDecoration_atPoint_scale_strokeWidth<R = unknown, P0 = unknown, P1 = CGPoint, P2 = number, P3 = number>(_intersectionPolygonForDecoration: P0, _atPoint: P1, _scale: P2, _strokeWidth: P3): R;
      bezierPathForEndDecorationOnPath_strokeWidth_lineCap_decorationType<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = number>(_bezierPathForEndDecorationOnPath: P0, _strokeWidth: P1, _lineCap: P2, _decorationType: P3): R;
      bezierPathForStartDecorationOnPath_strokeWidth_lineCap_decorationType<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = number>(_bezierPathForStartDecorationOnPath: P0, _strokeWidth: P1, _lineCap: P2, _decorationType: P3): R;
      scaleForDecoration_stokeWidth<R = CGSize, P0 = number, P1 = number>(_scaleForDecoration: P0, _stokeWidth: P1): R;
  
  }
  }
}

declare const MSImmutableStyledLayer: cocoa.MSImmutableStyledLayer.CLASS;
