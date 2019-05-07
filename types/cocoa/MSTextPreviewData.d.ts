/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextPreviewData<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    findPreviewPageForDocument_layer<R = CGPDFPage, P0 = unknown, P1 = unknown>(_findPreviewPageForDocument: P0, _layer: P1): R;
    table<R = NSMapTable>(): R;
  }
  namespace MSTextPreviewData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSTextPreviewData>(): R;
      new: <R = MSTextPreviewData>() => R;
      sharedPreviewData<R = unknown>(): R;
    }
  }
}

declare const MSTextPreviewData: cocoa.MSTextPreviewData.CLASS;
