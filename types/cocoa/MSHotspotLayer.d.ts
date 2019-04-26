/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSHotspotLayer<T0 = void, T1 = void, T2 = void> extends _MSHotspotLayer, MSLayerPreviewabilityProtocol {
    resetFlow<R = void>(): R;
    canRotate<R = boolean>(): R;
    canBeTransformed<R = boolean>(): R;
    setFlow<R = void, P0 = unknown>(_setFlow: P0): R;
    shouldDrawSelectionStroke<R = boolean>(): R;
    canChangeBooleanOperation<R = boolean>(): R;
    interfaceImageIdentifier<R = unknown>(): R;
    cacheOwner<R = unknown>(): R;
    isExportableViaDragAndDrop<R = boolean>(): R;
    isActive<R = boolean>(): R;
    filterTypeMask<R = number>(): R;
    applyOverride_document<R = void, P0 = unknown, P1 = unknown>(_applyOverride: P0, _document: P1): R;
    badgeType<R = number>(): R;
    // + MSHotspotLayer(CanChangeBooleanOperation): 
    canChangeBooleanOperation<R = boolean>(): R;
    // + MSHotspotLayer(InterfaceImageOwner): 
    interfaceImageIdentifier<R = unknown>(): R;
    cacheOwner<R = unknown>(): R;
    // + MSHotspotLayer(LayerList): 
    isExportableViaDragAndDrop<R = boolean>(): R;
    isActive<R = boolean>(): R;
    filterTypeMask<R = number>(): R;
    // + MSHotspotLayer(Preview): 
    unselectedPreviewTemplateImage<R = unknown>(): R;
    selectedPreviewTemplateImage<R = unknown>(): R;
    // + MSHotspotLayer(ShouldDrawSelection): 
    shouldDrawSelectionStroke<R = boolean>(): R;
    // + MSHotspotLayer(Preview):
    badgeType<R = number>(): R;
  }
  namespace MSHotspotLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSHotspotLayer, MSLayerPreviewabilityProtocol {
      alloc<R = MSHotspotLayer>(): R;
      new: <R = MSHotspotLayer>() => R;
      hotspotLayerFromLayer<R = unknown, P0 = unknown>(_hotspotLayerFromLayer: P0): R;
  
  }
  }
}

declare const MSHotspotLayer: cocoa.MSHotspotLayer.CLASS;
