/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextStyle<T0 = void, T1 = void, T2 = void> extends _MSTextStyle {
    resetDecodedAttributes<R = void>(): R;
    syncOwningTextLayerWithThisStyle<R = void>(): R;
    updateAttributesWithoutSyncingOwningTextLayer<R = void, P0 = unknown>(_updateAttributesWithoutSyncingOwningTextLayer: P0): R;
    generatePreviewWithText_imageSize_previewSize_colorSpace_backingScale_completionBlock<R = void, P0 = unknown, P1 = CGSize, P2 = CGSize, P3 = unknown, P4 = number, P5 = CDUnknownBlockType>(_generatePreviewWithText: P0, _imageSize: P1, _previewSize: P2, _colorSpace: P3, _backingScale: P4, _completionBlock: P5): R;
    decodedAttributes<R = NSDictionary>(): R;
    setDecodedAttributes<R = void, P0 = NSDictionary>(_v: P0): R;
    attributes<R = NSDictionary>(): R;
    setAttributes<R = void, P0 = NSDictionary>(_v: P0): R;
    fontPostscriptName<R = NSString>(): R;
    isRequiredFontAvailable<R = boolean>(): R;
    // + MSTextStyle(MSPreviewGeneration): 
    debugQuickLookObject<R = unknown>(): R;
    generatePreviewWithText_imageSize_previewSize_colorSpace_backingScale_completionBlock<R = void, P0 = unknown, P1 = CGSize, P2 = CGSize, P3 = unknown, P4 = number, P5 = CDUnknownBlockType>(_generatePreviewWithText: P0, _imageSize: P1, _previewSize: P2, _colorSpace: P3, _backingScale: P4, _completionBlock: P5): R;
  }
  namespace MSTextStyle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSTextStyle {
      alloc<R = MSTextStyle>(): R;
      new: <R = MSTextStyle>() => R;
      styleWithAttributes<R = unknown, P0 = unknown>(_styleWithAttributes: P0): R;
  
  }
  }
}

declare const MSTextStyle: cocoa.MSTextStyle.CLASS;
