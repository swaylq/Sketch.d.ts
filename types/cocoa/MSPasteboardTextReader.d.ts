/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardTextReader<T0 = void, T1 = void, T2 = void> extends NSObject, MSPasteboardReaderProtocol {
    attributedStringFromPasteboard_options<R = unknown, P0 = unknown, P1 = number>(_attributedStringFromPasteboard: P0, _options: P1): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSPasteboardTextReader {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSPasteboardReaderProtocol {
      alloc<R = MSPasteboardTextReader>(): R;
      new: <R = MSPasteboardTextReader>() => R;
    }
  }
}

declare const MSPasteboardTextReader: cocoa.MSPasteboardTextReader.CLASS;
