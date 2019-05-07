/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutablePage<T0 = void, T1 = void, T2 = void> extends _MSImmutablePage, MSWebExportableRootLayerProtocol, MSImmutableRootLayerProtocol {
    rulerBase<R = CGPoint>(): R;
    archiveReferenceIdentifier_bc<R = unknown>(): R;
    shouldDiffSublayersForDifferingLayer<R = boolean, P0 = unknown>(_shouldDiffSublayersForDifferingLayer: P0): R;
    migratePropertiesFromV79OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV79OrEarlierWithUnarchiver: P0): R;
    selectedLayerIDs<R = NSSet>(): R;
    symbols<R = NSArray>(): R;
    hasArtboards<R = boolean>(): R;
    artboards<R = NSArray>(): R;
    containsFixedLayers<R = boolean>(): R;
    preset<R = MSArtboardPreset>(): R;
    isFlowHome<R = boolean>(): R;
    webExporterShouldIncludeBackgroundColor<R = boolean>(): R;
    webExporterBackgoundColor<R = MSImmutableColor>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    grid<R = MSImmutableSimpleGrid>(): R;
    hash<R = number>(): R;
    horizontalRulerData<R = MSImmutableRulerData>(): R;
    layout<R = MSImmutableLayoutGrid>(): R;
    superclass<R = unknown>(): R;
    verticalRulerData<R = MSImmutableRulerData>(): R;
    // + MSImmutablePage(Rendering): 
    prepareDrawingInContext_inBlock<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_prepareDrawingInContext: P0, _inBlock: P1): R;
    transparencyLayerUseRectCondition<R = number>(): R;
    shouldSkipDrawingInContext<R = boolean, P0 = unknown>(_shouldSkipDrawingInContext: P0): R;
    shouldRenderInTransparencyLayer<R = boolean>(): R;
    // + MSImmutablePage(SVGExport): 
    svgStyle<R = unknown, P0 = unknown>(_svgStyle: P0): R;
    shouldIncludeInSVGExport<R = boolean, P0 = unknown>(_shouldIncludeInSVGExport: P0): R;
    appendBaseTranslation_exporter<R = void, P0 = unknown, P1 = unknown>(_appendBaseTranslation: P0, _exporter: P1): R;
    layerOffsetWithExporter<R = CGPoint, P0 = unknown>(_layerOffsetWithExporter: P0): R;
    // + MSImmutablePage(WebExporter): 
    rectInFixedViewportWithRect_fromFixingLayer<R = CGRect, P0 = CGRect, P1 = unknown>(_rectInFixedViewportWithRect: P0, _fromFixingLayer: P1): R;
    webExportLayerBehaviorWithRect_fromLayer<R = number, P0 = CGRect, P1 = unknown>(_webExportLayerBehaviorWithRect: P0, _fromLayer: P1): R;
    // + MSImmutablePage(WebExporter):
    containsFixedLayers<R = boolean>(): R;
    preset<R = MSArtboardPreset>(): R;
    isFlowHome<R = boolean>(): R;
    webExporterShouldIncludeBackgroundColor<R = boolean>(): R;
    webExporterBackgoundColor<R = MSImmutableColor>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    grid<R = MSImmutableSimpleGrid>(): R;
    hash<R = number>(): R;
    horizontalRulerData<R = MSImmutableRulerData>(): R;
    layout<R = MSImmutableLayoutGrid>(): R;
    superclass<R = unknown>(): R;
    verticalRulerData<R = MSImmutableRulerData>(): R;
  }
  namespace MSImmutablePage {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutablePage, MSWebExportableRootLayerProtocol, MSImmutableRootLayerProtocol {
      alloc<R = MSImmutablePage>(): R;
      new: <R = MSImmutablePage>() => R;
  
  }
  }
}

declare const MSImmutablePage: cocoa.MSImmutablePage.CLASS;
