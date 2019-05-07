/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardLayerListReaderWriter<T0 = void, T1 = void, T2 = void> extends MSPasteboardLayersReaderWriter {}
  namespace MSPasteboardLayerListReaderWriter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSPasteboardLayersReaderWriter {
      alloc<R = MSPasteboardLayerListReaderWriter>(): R;
      new: <R = MSPasteboardLayerListReaderWriter>() => R;
    }
  }
}

declare const MSPasteboardLayerListReaderWriter: cocoa.MSPasteboardLayerListReaderWriter.CLASS;
