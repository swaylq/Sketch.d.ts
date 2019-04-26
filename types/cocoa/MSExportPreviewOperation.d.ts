/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportPreviewOperation<T0 = void, T1 = void, T2 = void> extends NSOperation {
    cxx_destruct<R = void>(): R;
    exportingColorSpace<R = unknown>(): R;
    initWithAncestry_imageSize<R = unknown, P0 = unknown, P1 = CGSize>(_initWithAncestry: P0, _imageSize: P1): R;
    previewImage<R = NSImage>(): R;
    setPreviewImage<R = void, P0 = NSImage>(_v: P0): R;
    imageSize<R = CGSize>(): R;
    setImageSize<R = void, P0 = CGSize>(_v: P0): R;
    request<R = MSExportRequest>(): R;
    setRequest<R = void, P0 = MSExportRequest>(_v: P0): R;
    ancestry<R = MSImmutableLayerAncestry>(): R;
    setAncestry<R = void, P0 = MSImmutableLayerAncestry>(_v: P0): R;
    previewViewModel<R = MSExportPreviewViewModel>(): R;
  }
  namespace MSExportPreviewOperation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSOperation {
      alloc<R = MSExportPreviewOperation>(): R;
      new: <R = MSExportPreviewOperation>() => R;
      sharedPreviewRenderQueue<R = unknown>(): R;
    }
  }
}

declare const MSExportPreviewOperation: cocoa.MSExportPreviewOperation.CLASS;
