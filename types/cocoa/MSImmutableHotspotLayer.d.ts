/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableHotspotLayer<T0 = void, T1 = void, T2 = void> extends _MSImmutableHotspotLayer, MSImmutableLayerPreviewabilityProtocol {
    shouldBeIncludedInParentPath<R = boolean>(): R;
    isLayerExportable<R = boolean>(): R;
    interfaceImageIdentifier<R = unknown>(): R;
    cacheOwner<R = unknown>(): R;
    flowDestination<R = unknown>(): R;
    // + MSImmutableHotspotLayer(InterfaceImageOwner): 
    interfaceImageIdentifier<R = unknown>(): R;
    cacheOwner<R = unknown>(): R;
    // + MSImmutableHotspotLayer(MSOverrideManagementItem): 
    previewImageForOverrideManagement<R = unknown>(): R;
    // + MSImmutableHotspotLayer(MSOverrideRepresentationPreview): 
    overridePreviewImageInDocument<R = unknown, P0 = unknown>(_overridePreviewImageInDocument: P0): R;
    // + MSImmutableHotspotLayer(OverrideUI): 
    overrideViewControllerClassForOverridePoint<R = unknown, P0 = unknown>(_overrideViewControllerClassForOverridePoint: P0): R;
    // + MSImmutableHotspotLayer(Preview): 
    refreshPreviewImagesWithDocumentData_forOwner<R = void, P0 = unknown, P1 = unknown>(_refreshPreviewImagesWithDocumentData: P0, _forOwner: P1): R;
    previewImagesRequireRefreshWithDocumentData_forOwner<R = boolean, P0 = unknown, P1 = unknown>(_previewImagesRequireRefreshWithDocumentData: P0, _forOwner: P1): R;
    drawPreviewInRect_selected_bezier<R = void, P0 = CGRect, P1 = boolean, P2 = unknown>(_drawPreviewInRect: P0, _selected: P1, _bezier: P2): R;
  }
  namespace MSImmutableHotspotLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableHotspotLayer, MSImmutableLayerPreviewabilityProtocol {
      alloc<R = MSImmutableHotspotLayer>(): R;
      new: <R = MSImmutableHotspotLayer>() => R;
  
  }
  }
}

declare const MSImmutableHotspotLayer: cocoa.MSImmutableHotspotLayer.CLASS;
