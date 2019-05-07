/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardPathsReader<T0 = void, T1 = void, T2 = void> extends NSObject, MSPasteboardReaderProtocol {
    imageImportMode<R = number>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSPasteboardPathsReader {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSPasteboardReaderProtocol {
      alloc<R = MSPasteboardPathsReader>(): R;
      new: <R = MSPasteboardPathsReader>() => R;
    }
  }
}

declare const MSPasteboardPathsReader: cocoa.MSPasteboardPathsReader.CLASS;
