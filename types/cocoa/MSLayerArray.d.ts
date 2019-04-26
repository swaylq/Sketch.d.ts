/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerArray<T0 = void, T1 = void, T2 = void> extends NSObject, MSLayerContainmentProtocol, NSFastEnumerationProtocol {
    cxx_destruct<R = void>(): R;
    hash<R = number>(): R;
    description<R = unknown>(): R;
    sortedArrayByUsingComparator<R = unknown, P0 = CDUnknownBlockType>(_sortedArrayByUsingComparator: P0): R;
    filter<R = unknown, P0 = CDUnknownBlockType>(_filter: P0): R;
    map<R = unknown, P0 = CDUnknownBlockType>(_map: P0): R;
    commonArtboard<R = unknown>(): R;
    layerToInsertAfter<R = unknown>(): R;
    effectiveArtboard<R = unknown>(): R;
    effectivePage<R = unknown>(): R;
    uniqueParents<R = unknown>(): R;
    parentOfFirstLayer<R = unknown>(): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    initWithLayers<R = unknown, P0 = unknown>(_initWithLayers: P0): R;
    flowConnection<R = unknown>(): R;
    removeUnusedStylePartsOfType<R = void, P0 = number>(_removeUnusedStylePartsOfType: P0): R;
    addStylePartsOfType<R = unknown, P0 = number>(_addStylePartsOfType: P0): R;
    indexOfLayerWithID<R = number, P0 = unknown>(_indexOfLayerWithID: P0): R;
    updateFlowDestinationsWithMapping<R = void, P0 = unknown>(_updateFlowDestinationsWithMapping: P0): R;
    copyByGivingNewObjectIDs<R = unknown>(): R;
    layers<R = NSArray>(): R;
    setLayers<R = void, P0 = NSArray>(_v: P0): R;
    // + MSLayerArray(FlowConnection): 
    flowConnection<R = unknown>(): R;
    // + MSLayerArray(Styled): 
    removeUnusedStylePartsOfType<R = void, P0 = number>(_removeUnusedStylePartsOfType: P0): R;
    addStylePartsOfType<R = unknown, P0 = number>(_addStylePartsOfType: P0): R;
  }
  namespace MSLayerArray {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSLayerContainmentProtocol, NSFastEnumerationProtocol {
      alloc<R = MSLayerArray>(): R;
      new: <R = MSLayerArray>() => R;
      emptyArray<R = unknown>(): R;
      arrayWithLayers<R = unknown, P0 = unknown>(_arrayWithLayers: P0): R;
      arrayWithLayer<R = unknown, P0 = unknown>(_arrayWithLayer: P0): R;
  
  }
  }
}

declare const MSLayerArray: cocoa.MSLayerArray.CLASS;
