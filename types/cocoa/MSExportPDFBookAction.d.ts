/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportPDFBookAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    exportPDFBook<R = void, P0 = unknown>(_exportPDFBook: P0): R;
  }
  namespace MSExportPDFBookAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSExportPDFBookAction>(): R;
      new: <R = MSExportPDFBookAction>() => R;
    }
  }
}

declare const MSExportPDFBookAction: cocoa.MSExportPDFBookAction.CLASS;
