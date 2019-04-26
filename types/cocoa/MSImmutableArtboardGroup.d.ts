/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableArtboardGroup<T0 = void, T1 = void, T2 = void> extends _MSImmutableArtboardGroup, MSWebExportableRootLayerProtocol, MSColorUserProtocol, MSLayerWithBackgroundColorProtocol, MSArtboardGroupProtocol, MSImmutableRootLayerProtocol {
    rulerBase<R = CGPoint>(): R;
    updateColorCounter<R = void, P0 = unknown>(_updateColorCounter: P0): R;
    migratePropertiesFromV100OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV100OrEarlierWithUnarchiver: P0): R;
    migratePropertiesFromV79OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV79OrEarlierWithUnarchiver: P0): R;
    migratePropertiesFromV57OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV57OrEarlierWithUnarchiver: P0): R;
    shouldDrawBackgroundInContext<R = boolean, P0 = unknown>(_shouldDrawBackgroundInContext: P0): R;
    unscaledNameSize<R = CGSize>(): R;
    preset<R = MSArtboardPreset>(): R;
    containsFixedLayers<R = boolean>(): R;
    webExporterShouldIncludeBackgroundColor<R = boolean>(): R;
    webExporterBackgoundColor<R = MSImmutableColor>(): R;
    CGTransformForFrame<R = CGAffineTransform>(): R;
    bounds<R = CGRect>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    grid<R = MSImmutableSimpleGrid>(): R;
    hasBackgroundColor<R = boolean>(): R;
    setHasBackgroundColor<R = void, P0 = boolean>(_v: P0): R;
    hasTransforms<R = boolean>(): R;
    hash<R = number>(): R;
    horizontalRulerData<R = MSImmutableRulerData>(): R;
    influenceRectEdgePaddingsThatCascadeToContainedLayers<R = BCEdgePaddings>(): R;
    isFlippedHorizontal<R = boolean>(): R;
    isFlippedVertical<R = boolean>(): R;
    isFlowHome<R = boolean>(): R;
    isLayerExportable<R = boolean>(): R;
    isVisible<R = boolean>(): R;
    layout<R = MSImmutableLayoutGrid>(): R;
    objectID<R = NSString>(): R;
    origin<R = CGPoint>(): R;
    rect<R = CGRect>(): R;
    rotation<R = number>(): R;
    superclass<R = unknown>(): R;
    verticalRulerData<R = MSImmutableRulerData>(): R;
    // + MSImmutableArtboardGroup(FrequentColors): 
    enumerateColors<R = void, P0 = CDUnknownBlockType>(_enumerateColors: P0): R;
    // + MSImmutableArtboardGroup(Rendering): 
    prepareDrawingInContext_inBlock<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_prepareDrawingInContext: P0, _inBlock: P1): R;
    shouldDrawBackgroundInContext<R = boolean, P0 = unknown>(_shouldDrawBackgroundInContext: P0): R;
    // + MSImmutableArtboardGroup(SVGExport): 
    addChildrenToElement_exporter<R = void, P0 = unknown, P1 = unknown>(_addChildrenToElement: P0, _exporter: P1): R;
    appendBaseTranslation_exporter<R = void, P0 = unknown, P1 = unknown>(_appendBaseTranslation: P0, _exporter: P1): R;
    svgStyle<R = unknown, P0 = unknown>(_svgStyle: P0): R;
    // + MSImmutableArtboardGroup(WebExporter): 
    rectInFixedViewportWithRect_fromFixingLayer<R = CGRect, P0 = CGRect, P1 = unknown>(_rectInFixedViewportWithRect: P0, _fromFixingLayer: P1): R;
    webExportLayerBehaviorWithRect_fromLayer<R = number, P0 = CGRect, P1 = unknown>(_webExportLayerBehaviorWithRect: P0, _fromLayer: P1): R;
    // + MSImmutableArtboardGroup(ColorSource):
    colorUserColorUse<R = number>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
    // + MSImmutableArtboardGroup(WebExporter):
    containsFixedLayers<R = boolean>(): R;
    webExporterShouldIncludeBackgroundColor<R = boolean>(): R;
    webExporterBackgoundColor<R = MSImmutableColor>(): R;
    grid<R = MSImmutableSimpleGrid>(): R;
    horizontalRulerData<R = MSImmutableRulerData>(): R;
    isFlowHome<R = boolean>(): R;
    layout<R = MSImmutableLayoutGrid>(): R;
    preset<R = MSArtboardPreset>(): R;
    verticalRulerData<R = MSImmutableRulerData>(): R;
  }
  namespace MSImmutableArtboardGroup {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableArtboardGroup, MSWebExportableRootLayerProtocol, MSColorUserProtocol, MSLayerWithBackgroundColorProtocol, MSArtboardGroupProtocol, MSImmutableRootLayerProtocol {
      alloc<R = MSImmutableArtboardGroup>(): R;
      new: <R = MSImmutableArtboardGroup>() => R;
  
  }
  }
}

declare const MSImmutableArtboardGroup: cocoa.MSImmutableArtboardGroup.CLASS;
