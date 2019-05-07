/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextPreviewLayerData<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    findPageWithTitle<R = CGPDFPage, P0 = unknown>(_findPageWithTitle: P0): R;
    dealloc<R = void>(): R;
    initWithPDFData<R = unknown, P0 = unknown>(_initWithPDFData: P0): R;
  }
  namespace MSTextPreviewLayerData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSTextPreviewLayerData>(): R;
      new: <R = MSTextPreviewLayerData>() => R;
    }
  }
}

declare const MSTextPreviewLayerData: cocoa.MSTextPreviewLayerData.CLASS;
