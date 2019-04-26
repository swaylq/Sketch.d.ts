/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPDFExporter<T0 = void, T1 = void, T2 = void> extends MSExporter {}
  namespace MSPDFExporter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSExporter {
      alloc<R = MSPDFExporter>(): R;
      new: <R = MSPDFExporter>() => R;
    }
  }
}

declare const MSPDFExporter: cocoa.MSPDFExporter.CLASS;
