/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportSelectionWithExportFormatsAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    exportSelection<R = void, P0 = unknown>(_exportSelection: P0): R;
  }
  namespace MSExportSelectionWithExportFormatsAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSExportSelectionWithExportFormatsAction>(): R;
      new: <R = MSExportSelectionWithExportFormatsAction>() => R;
    }
  }
}

declare const MSExportSelectionWithExportFormatsAction: cocoa.MSExportSelectionWithExportFormatsAction.CLASS;
