/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSymbolPreviewGeneratorOperation<T0 = void, T1 = void, T2 = void> extends NSOperation, MSRenderingContextCacheProviderProtocol {
    cxx_destruct<R = void>(): R;
    renderingCache<R = BCCache>(): R;
    setRenderingCache<R = void, P0 = BCCache>(_v: P0): R;
    imageBlock<R = CDUnknownBlockType>(): R;
    setImageBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    colorSpace<R = NSColorSpace>(): R;
    setColorSpace<R = void, P0 = NSColorSpace>(_v: P0): R;
    size<R = CGSize>(): R;
    setSize<R = void, P0 = CGSize>(_v: P0): R;
    symbolAncestry<R = MSImmutableLayerAncestry>(): R;
    setSymbolAncestry<R = void, P0 = MSImmutableLayerAncestry>(_v: P0): R;
    zoomIndependentCache<R = BCCache>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSSymbolPreviewGeneratorOperation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSOperation, MSRenderingContextCacheProviderProtocol {
      alloc<R = MSSymbolPreviewGeneratorOperation>(): R;
      new: <R = MSSymbolPreviewGeneratorOperation>() => R;
    }
  }
}

declare const MSSymbolPreviewGeneratorOperation: cocoa.MSSymbolPreviewGeneratorOperation.CLASS;
