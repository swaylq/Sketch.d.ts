/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardInternalImageReader<T0 = void, T1 = void, T2 = void> extends MSPasteboardImagesReader {}
  namespace MSPasteboardInternalImageReader {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSPasteboardImagesReader {
      alloc<R = MSPasteboardInternalImageReader>(): R;
      new: <R = MSPasteboardInternalImageReader>() => R;
    }
  }
}

declare const MSPasteboardInternalImageReader: cocoa.MSPasteboardInternalImageReader.CLASS;
