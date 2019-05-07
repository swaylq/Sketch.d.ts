/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardLayersBase<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSPasteboardLayersBase {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSPasteboardLayersBase>(): R;
      new: <R = MSPasteboardLayersBase>() => R;
      usedSymbolsInContainer_document<R = unknown, P0 = unknown, P1 = unknown>(_usedSymbolsInContainer: P0, _document: P1): R;
      usedSymbolsInInstance_document_foundSet<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_usedSymbolsInInstance: P0, _document: P1, _foundSet: P2): R;
      usedSymbolsInSymbolWithID_document_foundSet<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_usedSymbolsInSymbolWithID: P0, _document: P1, _foundSet: P2): R;
      dictionaryFromPasteboardLayers<R = unknown, P0 = unknown>(_dictionaryFromPasteboardLayers: P0): R;
      dataFromPasteboardDictionary<R = unknown, P0 = unknown>(_dataFromPasteboardDictionary: P0): R;
      pasteboardDataFromData<R = unknown, P0 = unknown>(_pasteboardDataFromData: P0): R;
    }
  }
}

declare const MSPasteboardLayersBase: cocoa.MSPasteboardLayersBase.CLASS;
