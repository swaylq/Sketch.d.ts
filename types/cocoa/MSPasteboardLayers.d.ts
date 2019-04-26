/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardLayers<T0 = void, T1 = void, T2 = void> extends NSObject, MSLayerTraitsProtocol {
    cxx_destruct<R = void>(): R;
    suggestedRect<R = CGRect>(): R;
    insertInGroup_atPosition_afterLayer_viewport_fitToParent<R = unknown, P0 = unknown, P1 = CGPoint, P2 = unknown, P3 = unknown, P4 = boolean>(_insertInGroup: P0, _atPosition: P1, _afterLayer: P2, _viewport: P3, _fitToParent: P4): R;
    insertOnPage_viewport_hint<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_insertOnPage: P0, _viewport: P1, _hint: P2): R;
    layerPositionsRelativeToUnion<R = unknown>(): R;
    unionSize<R = CGSize>(): R;
    canBeContainedInLayer<R = boolean, P0 = unknown>(_canBeContainedInLayer: P0): R;
    parentTraits<R = number>(): R;
    setParentTraits<R = void, P0 = number>(_v: P0): R;
    suggestedPosition<R = CGPoint>(): R;
    setSuggestedPosition<R = void, P0 = CGPoint>(_v: P0): R;
    foreignSymbols<R = NSDictionary>(): R;
    setForeignSymbols<R = void, P0 = NSDictionary>(_v: P0): R;
    localSymbols<R = NSDictionary>(): R;
    setLocalSymbols<R = void, P0 = NSDictionary>(_v: P0): R;
    sharedStyles<R = NSArray>(): R;
    setSharedStyles<R = void, P0 = NSArray>(_v: P0): R;
    layers<R = MSLayerArray>(): R;
    setLayers<R = void, P0 = MSLayerArray>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSPasteboardLayers {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSLayerTraitsProtocol {
      alloc<R = MSPasteboardLayers>(): R;
      new: <R = MSPasteboardLayers>() => R;
      originForLayer_rootIsPage<R = CGPoint, P0 = unknown, P1 = boolean>(_originForLayer: P0, _rootIsPage: P1): R;
      suggestedOriginForLayers_rootIsPage<R = CGPoint, P0 = unknown, P1 = boolean>(_suggestedOriginForLayers: P0, _rootIsPage: P1): R;
      parentTraitsForLayers<R = number, P0 = unknown>(_parentTraitsForLayers: P0): R;
      pasteboardLayersWithLayers<R = unknown, P0 = unknown>(_pasteboardLayersWithLayers: P0): R;
      pasteboardLayersWithForeignLayers<R = unknown, P0 = unknown>(_pasteboardLayersWithForeignLayers: P0): R;
      traitsForPropertyName<R = number, P0 = unknown>(_traitsForPropertyName: P0): R;
    }
  }
}

declare const MSPasteboardLayers: cocoa.MSPasteboardLayers.CLASS;
