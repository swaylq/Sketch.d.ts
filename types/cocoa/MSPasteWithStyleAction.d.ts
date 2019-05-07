/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteWithStyleAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    pasteWithStyle<R = void, P0 = unknown>(_pasteWithStyle: P0): R;
  }
  namespace MSPasteWithStyleAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSPasteWithStyleAction>(): R;
      new: <R = MSPasteWithStyleAction>() => R;
    }
  }
}

declare const MSPasteWithStyleAction: cocoa.MSPasteWithStyleAction.CLASS;
