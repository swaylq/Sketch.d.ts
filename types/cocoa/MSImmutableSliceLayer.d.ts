/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableSliceLayer<T0 = void, T1 = void, T2 = void> extends _MSImmutableSliceLayer, MSImmutableLayerPreviewabilityProtocol, MSLayerWithBackgroundColorProtocol {
    shouldBeIncludedInParentPath<R = boolean>(): R;
    isLayerExportable<R = boolean>(): R;
    interfaceImageIdentifier<R = unknown>(): R;
    cacheOwner<R = unknown>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hasBackgroundColor<R = boolean>(): R;
    setHasBackgroundColor<R = void, P0 = boolean>(_v: P0): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
    // + MSImmutableSliceLayer(ExportFormatRequestBackground): 
    configureBackgroundOfRequest<R = void, P0 = unknown>(_configureBackgroundOfRequest: P0): R;
    // + MSImmutableSliceLayer(InterfaceImageOwner): 
    interfaceImageIdentifier<R = unknown>(): R;
    cacheOwner<R = unknown>(): R;
    // + MSImmutableSliceLayer(Preview): 
    refreshPreviewImagesWithDocumentData_forOwner<R = void, P0 = unknown, P1 = unknown>(_refreshPreviewImagesWithDocumentData: P0, _forOwner: P1): R;
    previewImagesRequireRefreshWithDocumentData_forOwner<R = boolean, P0 = unknown, P1 = unknown>(_previewImagesRequireRefreshWithDocumentData: P0, _forOwner: P1): R;
    drawPreviewInRect_selected_bezier<R = void, P0 = CGRect, P1 = boolean, P2 = unknown>(_drawPreviewInRect: P0, _selected: P1, _bezier: P2): R;
  }
  namespace MSImmutableSliceLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableSliceLayer, MSImmutableLayerPreviewabilityProtocol, MSLayerWithBackgroundColorProtocol {
      alloc<R = MSImmutableSliceLayer>(): R;
      new: <R = MSImmutableSliceLayer>() => R;
  
  }
  }
}

declare const MSImmutableSliceLayer: cocoa.MSImmutableSliceLayer.CLASS;
