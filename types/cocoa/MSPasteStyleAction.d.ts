/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteStyleAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    pasteStyle<R = void, P0 = unknown>(_pasteStyle: P0): R;
  }
  namespace MSPasteStyleAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSPasteStyleAction>(): R;
      new: <R = MSPasteStyleAction>() => R;
    }
  }
}

declare const MSPasteStyleAction: cocoa.MSPasteStyleAction.CLASS;
