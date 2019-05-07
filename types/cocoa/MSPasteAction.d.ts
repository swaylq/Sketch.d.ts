/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    paste<R = void, P0 = unknown>(_paste: P0): R;
  }
  namespace MSPasteAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSPasteAction>(): R;
      new: <R = MSPasteAction>() => R;
    }
  }
}

declare const MSPasteAction: cocoa.MSPasteAction.CLASS;
