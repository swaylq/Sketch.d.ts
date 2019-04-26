/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableLayerPreviewabilityProtocol<T0 = void, T1 = void, T2 = void> {
    refreshPreviewImagesWithDocumentData_forOwner<R = void, P0 = MSImmutableDocumentData, P1 = MSInterfaceImageOwner>(_refreshPreviewImagesWithDocumentData: P0, _forOwner: P1): R;
    previewImagesRequireRefreshWithDocumentData_forOwner<R = boolean, P0 = MSImmutableDocumentData, P1 = MSInterfaceImageOwner>(_previewImagesRequireRefreshWithDocumentData: P0, _forOwner: P1): R;
  }
  namespace MSImmutableLayerPreviewabilityProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
