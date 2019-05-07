/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface PDFParserProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    name<R = NSString>(): R;
    pageCount<R = number>(): R;
    parsePastedDocument<R = void>(): R;
    parseWithProgress<R = void, P0 = CDUnknownBlockType>(_parseWithProgress: P0): R;
    loadDocumentFromData<R = void, P0 = NSData>(_loadDocumentFromData: P0): R;
    loadDocumentFromURL<R = void, P0 = NSURL>(_loadDocumentFromURL: P0): R;
    initWithScanner<R = unknown, P0 = PDFScanner>(_initWithScanner: P0): R;
  }
  namespace PDFParserProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
