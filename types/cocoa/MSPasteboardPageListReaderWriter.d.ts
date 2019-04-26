/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardPageListReaderWriter<T0 = void, T1 = void, T2 = void> extends MSPasteboardLayersReaderWriter {}
  namespace MSPasteboardPageListReaderWriter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSPasteboardLayersReaderWriter {
      alloc<R = MSPasteboardPageListReaderWriter>(): R;
      new: <R = MSPasteboardPageListReaderWriter>() => R;
    }
  }
}

declare const MSPasteboardPageListReaderWriter: cocoa.MSPasteboardPageListReaderWriter.CLASS;
