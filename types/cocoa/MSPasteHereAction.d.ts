/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteHereAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    pasteHere<R = void, P0 = unknown>(_pasteHere: P0): R;
  }
  namespace MSPasteHereAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSPasteHereAction>(): R;
      new: <R = MSPasteHereAction>() => R;
    }
  }
}

declare const MSPasteHereAction: cocoa.MSPasteHereAction.CLASS;
