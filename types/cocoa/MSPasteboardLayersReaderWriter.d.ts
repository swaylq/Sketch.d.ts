/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardLayersReaderWriter<T0 = void, T1 = void, T2 = void> extends NSObject, MSPasteboardReaderProtocol, MSPasteboardWriterProtocol {
    writeData_toPasteboard_withType<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_writeData: P0, _toPasteboard: P1, _withType: P2): R;
    readDataFromPasteboard<R = unknown, P0 = unknown>(_readDataFromPasteboard: P0): R;
    readDataFromPasteboard_withType<R = unknown, P0 = unknown, P1 = unknown>(_readDataFromPasteboard: P0, _withType: P1): R;
    tempFileTypeForType<R = unknown, P0 = unknown>(_tempFileTypeForType: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSPasteboardLayersReaderWriter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSPasteboardReaderProtocol, MSPasteboardWriterProtocol {
      alloc<R = MSPasteboardLayersReaderWriter>(): R;
      new: <R = MSPasteboardLayersReaderWriter>() => R;
    }
  }
}

declare const MSPasteboardLayersReaderWriter: cocoa.MSPasteboardLayersReaderWriter.CLASS;
