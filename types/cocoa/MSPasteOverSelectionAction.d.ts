/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteOverSelectionAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    pasteOverSelection<R = void, P0 = unknown>(_pasteOverSelection: P0): R;
    validate<R = boolean>(): R;
  }
  namespace MSPasteOverSelectionAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSPasteOverSelectionAction>(): R;
      new: <R = MSPasteOverSelectionAction>() => R;
    }
  }
}

declare const MSPasteOverSelectionAction: cocoa.MSPasteOverSelectionAction.CLASS;
