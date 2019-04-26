/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SketchSVGExporter<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    layerIsIncluded<R = boolean, P0 = unknown>(_layerIsIncluded: P0): R;
    isDrawingSymbol<R = boolean>(): R;
    drawSymbolInstance_inBlock<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_drawSymbolInstance: P0, _inBlock: P1): R;
    performWithParent_block<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_performWithParent: P0, _block: P1): R;
    popParent<R = unknown>(): R;
    pushParent<R = void, P0 = unknown>(_pushParent: P0): R;
    parentForLayer<R = unknown, P0 = unknown>(_parentForLayer: P0): R;
    ancestorsForLayer<R = unknown, P0 = unknown>(_ancestorsForLayer: P0): R;
    radialGradientAttributes_inRect<R = unknown, P0 = unknown, P1 = unknown>(_radialGradientAttributes: P0, _inRect: P1): R;
    linearGradientAttributes_inRect<R = unknown, P0 = unknown, P1 = unknown>(_linearGradientAttributes: P0, _inRect: P1): R;
    stopsForGradient<R = unknown, P0 = unknown>(_stopsForGradient: P0): R;
    gradientElement_inRect<R = unknown, P0 = unknown, P1 = unknown>(_gradientElement: P0, _inRect: P1): R;
    addGradient_inRect<R = void, P0 = unknown, P1 = unknown>(_addGradient: P0, _inRect: P1): R;
    hashForGradient_inRect<R = unknown, P0 = unknown, P1 = unknown>(_hashForGradient: P0, _inRect: P1): R;
    endFilterGroup<R = boolean>(): R;
    beginFilterGroup<R = unknown>(): R;
    addDefinitionWithName_children_attributes<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_addDefinitionWithName: P0, _children: P1, _attributes: P2): R;
    uniqueIDForElementWithName<R = unknown, P0 = unknown>(_uniqueIDForElementWithName: P0): R;
    setDescription<R = void, P0 = unknown>(_setDescription: P0): R;
    setTitle<R = void, P0 = unknown>(_setTitle: P0): R;
    description<R = unknown>(): R;
    isDescElement<R = boolean, P0 = unknown>(_isDescElement: P0): R;
    exportLayers<R = unknown, P0 = unknown>(_exportLayers: P0): R;
    initWithName_exportRequest<R = unknown, P0 = unknown, P1 = unknown>(_initWithName: P0, _exportRequest: P1): R;
    initWithImmutableDocument_exportRect_layerIDs_includeBackground<R = unknown, P0 = unknown, P1 = CGRect, P2 = unknown, P3 = boolean>(_initWithImmutableDocument: P0, _exportRect: P1, _layerIDs: P2, _includeBackground: P3): R;
    setupCommonElementsWithName<R = void, P0 = unknown>(_setupCommonElementsWithName: P0): R;
    setRootSVGElementAttributes<R = void>(): R;
    includeSketchCredit<R = boolean>(): R;
    includedLayerIDs<R = NSSet>(): R;
    parentStack<R = NSMutableArray>(): R;
    nextUniqueID<R = number>(): R;
    setNextUniqueID<R = void, P0 = number>(_v: P0): R;
    gradients<R = NSMutableDictionary>(): R;
    root<R = NSXMLElement>(): R;
    defs<R = NSXMLElement>(): R;
    doc<R = NSXMLDocument>(): R;
    includeArtboardBackground<R = boolean>(): R;
    currentSymbolInstance<R = MSImmutableSymbolInstance>(): R;
    setCurrentSymbolInstance<R = void, P0 = MSImmutableSymbolInstance>(_v: P0): R;
    currentFilterGroup<R = MSSVGFilter>(): R;
    setCurrentFilterGroup<R = void, P0 = MSSVGFilter>(_v: P0): R;
    document<R = MSImmutableDocumentData>(): R;
    setDocument<R = void, P0 = MSImmutableDocumentData>(_v: P0): R;
    currentShapeDef<R = NSString>(): R;
    setCurrentShapeDef<R = void, P0 = NSString>(_v: P0): R;
    mask<R = NSString>(): R;
    setMask<R = void, P0 = NSString>(_v: P0): R;
    exportBounds<R = CGRect>(): R;
    defsIndexInRoot<R = number>(): R;
    hasDefs<R = boolean>(): R;
  }
  namespace SketchSVGExporter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = SketchSVGExporter>(): R;
      new: <R = SketchSVGExporter>() => R;
    }
  }
}

declare const SketchSVGExporter: cocoa.SketchSVGExporter.CLASS;
