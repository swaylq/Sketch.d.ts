/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDocumentTextPreviewsProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    createPreviewPDFDataForTextLayers_document<R = NSData, P0 = NSSet, P1 = MSImmutableDocumentData>(_createPreviewPDFDataForTextLayers: P0, _document: P1): R;
  }
  namespace MSDocumentTextPreviewsProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
