/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerContainmentProtocol<T0 = void, T1 = void, T2 = void> {
    enumerateLayersWithOptions_block<R = boolean, P0 = number, P1 = CDUnknownBlockType>(_enumerateLayersWithOptions: P0, _block: P1): R;
    enumerateLayers<R = void, P0 = CDUnknownBlockType>(_enumerateLayers: P0): R;
    indexOfLayer<R = number, P0 = unknown>(_indexOfLayer: P0): R;
    layerAtIndex<R = unknown, P0 = number>(_layerAtIndex: P0): R;
    containsMultipleLayers<R = boolean>(): R;
    containsOneLayer<R = boolean>(): R;
    containsLayers<R = boolean>(): R;
    containsNoOrOneLayers<R = boolean>(): R;
    lastLayer<R = unknown>(): R;
    firstLayer<R = unknown>(): R;
    containedLayersCount<R = number>(): R;
    containedLayers<R = NSArray>(): R;
  }
  namespace MSLayerContainmentProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
