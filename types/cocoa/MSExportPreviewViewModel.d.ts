/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportPreviewViewModel<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    imageDataInFormat<R = unknown, P0 = unknown>(_imageDataInFormat: P0): R;
    initWithPreviewImage_cachedExportRequest_ancestry<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithPreviewImage: P0, _cachedExportRequest: P1, _ancestry: P2): R;
    previewFrame<R = CGRect>(): R;
    setPreviewFrame<R = void, P0 = CGRect>(_v: P0): R;
    isVectorFormat<R = boolean>(): R;
    defaultExportFormat<R = NSString>(): R;
    layerName<R = NSString>(): R;
    cachedExportRequest<R = MSExportRequest>(): R;
    setCachedExportRequest<R = void, P0 = MSExportRequest>(_v: P0): R;
    previewImage<R = NSImage>(): R;
    setPreviewImage<R = void, P0 = NSImage>(_v: P0): R;
  }
  namespace MSExportPreviewViewModel {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSExportPreviewViewModel>(): R;
      new: <R = MSExportPreviewViewModel>() => R;
    }
  }
}

declare const MSExportPreviewViewModel: cocoa.MSExportPreviewViewModel.CLASS;
