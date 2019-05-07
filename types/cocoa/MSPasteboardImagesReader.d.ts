/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardImagesReader<T0 = void, T1 = void, T2 = void> extends NSObject, MSPasteboardReaderProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSPasteboardImagesReader {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSPasteboardReaderProtocol {
      alloc<R = MSPasteboardImagesReader>(): R;
      new: <R = MSPasteboardImagesReader>() => R;
    }
  }
}

declare const MSPasteboardImagesReader: cocoa.MSPasteboardImagesReader.CLASS;
