/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPDFImporter<T0 = void, T1 = void, T2 = void> extends NSObject, MSImporterProtocol {
    cxx_destruct<R = void>(): R;
    unwrappedLayer<R = unknown, P0 = unknown>(_unwrappedLayer: P0): R;
    name<R = unknown>(): R;
    type<R = NSString>(): R;
    setType<R = void, P0 = NSString>(_v: P0): R;
    scanner<R = MSPDFScanner>(): R;
    setScanner<R = void, P0 = MSPDFScanner>(_v: P0): R;
    parser<R = PDFParser>(): R;
    setParser<R = void, P0 = PDFParser>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSPDFImporter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSImporterProtocol {
      alloc<R = MSPDFImporter>(): R;
      new: <R = MSPDFImporter>() => R;
      epsImporter<R = unknown>(): R;
      pdfImporter<R = unknown>(): R;
    }
  }
}

declare const MSPDFImporter: cocoa.MSPDFImporter.CLASS;
