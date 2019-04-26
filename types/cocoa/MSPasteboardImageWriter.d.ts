/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardImageWriter<T0 = void, T1 = void, T2 = void> extends NSObject, MSPasteboardWriterProtocol {
    includedObjectIDsForLayers<R = unknown, P0 = unknown>(_includedObjectIDsForLayers: P0): R;
    containsSingleArtboard<R = boolean, P0 = unknown>(_containsSingleArtboard: P0): R;
    bitmapRectForLayers<R = CGRect, P0 = unknown>(_bitmapRectForLayers: P0): R;
    exportRequestForPasteboardLayers<R = unknown, P0 = unknown>(_exportRequestForPasteboardLayers: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSPasteboardImageWriter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSPasteboardWriterProtocol {
      alloc<R = MSPasteboardImageWriter>(): R;
      new: <R = MSPasteboardImageWriter>() => R;
    }
  }
}

declare const MSPasteboardImageWriter: cocoa.MSPasteboardImageWriter.CLASS;
