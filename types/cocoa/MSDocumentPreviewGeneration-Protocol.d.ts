/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDocumentPreviewGenerationProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    generatePreviewsForDocument<R = NSDictionary, P0 = MSImmutableDocumentData>(_generatePreviewsForDocument: P0): R;
  }
  namespace MSDocumentPreviewGenerationProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
