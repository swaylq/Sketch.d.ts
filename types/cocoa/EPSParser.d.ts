/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface EPSParser<T0 = void, T1 = void, T2 = void> extends NSObject, PDFParserProtocol {
    cxx_destruct<R = void>(): R;
    debugConvertedFile<R = void, P0 = unknown>(_debugConvertedFile: P0): R;
    parser<R = PDFParser>(): R;
    setParser<R = void, P0 = PDFParser>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace EPSParser {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, PDFParserProtocol {
      alloc<R = EPSParser>(): R;
      new: <R = EPSParser>() => R;
    }
  }
}

declare const EPSParser: cocoa.EPSParser.CLASS;
