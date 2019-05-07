/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPDFBookExporter<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSPDFBookExporter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSPDFBookExporter>(): R;
      new: <R = MSPDFBookExporter>() => R;
      pdfFromArtboard<R = unknown, P0 = unknown>(_pdfFromArtboard: P0): R;
      exportPages_defaultFilename<R = void, P0 = unknown, P1 = unknown>(_exportPages: P0, _defaultFilename: P1): R;
    }
  }
}

declare const MSPDFBookExporter: cocoa.MSPDFBookExporter.CLASS;
