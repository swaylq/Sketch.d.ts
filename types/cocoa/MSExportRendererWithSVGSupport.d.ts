/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportRendererWithSVGSupport<T0 = void, T1 = void, T2 = void> extends MSExporter {}
  namespace MSExportRendererWithSVGSupport {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSExporter {
      alloc<R = MSExportRendererWithSVGSupport>(): R;
      new: <R = MSExportRendererWithSVGSupport>() => R;
    }
  }
}

declare const MSExportRendererWithSVGSupport: cocoa.MSExportRendererWithSVGSupport.CLASS;
