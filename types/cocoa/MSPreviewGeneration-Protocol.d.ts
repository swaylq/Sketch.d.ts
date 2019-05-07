/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPreviewGenerationProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    generatePreviewWithImageSize_previewSize_colorSpace_backingScale_completionBlock<R = void, P0 = CGSize, P1 = CGSize, P2 = NSColorSpace, P3 = number, P4 = CDUnknownBlockType>(_generatePreviewWithImageSize: P0, _previewSize: P1, _colorSpace: P2, _backingScale: P3, _completionBlock: P4): R;
  }
  namespace MSPreviewGenerationProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
