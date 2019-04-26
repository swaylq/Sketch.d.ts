/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableSymbolMaster<T0 = void, T1 = void, T2 = void> extends _MSImmutableSymbolMaster {
    availableOverridesWithDocument<R = unknown, P0 = unknown>(_availableOverridesWithDocument: P0): R;
    influenceRectPaddingForInstancesInDocument_visitedSymbols<R = BCEdgePaddings, P0 = unknown, P1 = unknown>(_influenceRectPaddingForInstancesInDocument: P0, _visitedSymbols: P1): R;
    preserveFlexibleWidthTextLayersInMutableMaster_inBlock<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_preserveFlexibleWidthTextLayersInMutableMaster: P0, _inBlock: P1): R;
    modifiedMasterByApplyingInstance_inDocument<R = unknown, P0 = unknown, P1 = unknown>(_modifiedMasterByApplyingInstance: P0, _inDocument: P1): R;
    calculateAvailableOverridesWithDocument<R = unknown, P0 = unknown>(_calculateAvailableOverridesWithDocument: P0): R;
    availableOverridesWithParent_overrideValues_inDocument<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_availableOverridesWithParent: P0, _overrideValues: P1, _inDocument: P2): R;
    mergeNestedOverridesTo_withParent<R = void, P0 = unknown, P1 = unknown>(_mergeNestedOverridesTo: P0, _withParent: P1): R;
    canAddOverridesForMaster_toParent<R = boolean, P0 = unknown, P1 = unknown>(_canAddOverridesForMaster: P0, _toParent: P1): R;
    modifiedMasterCache<R = BCCache>(): R;
    changeIdentifier<R = number>(): R;
    // + MSImmutableSymbolMaster(MSRenderPreparation): 
    gatherForRenderPreparation<R = void, P0 = unknown>(_gatherForRenderPreparation: P0): R;
    // + MSImmutableSymbolMaster(Rendering): 
    shouldDrawBackgroundInContext<R = boolean, P0 = unknown>(_shouldDrawBackgroundInContext: P0): R;
    // + MSImmutableSymbolMaster(SVGExport): 
    svgStyle<R = unknown, P0 = unknown>(_svgStyle: P0): R;
    addTransformAttributes_exporter<R = void, P0 = unknown, P1 = unknown>(_addTransformAttributes: P0, _exporter: P1): R;
  }
  namespace MSImmutableSymbolMaster {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableSymbolMaster {
      alloc<R = MSImmutableSymbolMaster>(): R;
      new: <R = MSImmutableSymbolMaster>() => R;
  
  }
  }
}

declare const MSImmutableSymbolMaster: cocoa.MSImmutableSymbolMaster.CLASS;
