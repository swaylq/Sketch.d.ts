/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAddExportFormatAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    validate<R = boolean>(): R;
    addExportFormatToLayer<R = void, P0 = unknown>(_addExportFormatToLayer: P0): R;
    label<R = unknown>(): R;
    hasDynamicTitle<R = boolean>(): R;
    addExportFormat<R = void, P0 = unknown>(_addExportFormat: P0): R;
  }
  namespace MSAddExportFormatAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSAddExportFormatAction>(): R;
      new: <R = MSAddExportFormatAction>() => R;
    }
  }
}

declare const MSAddExportFormatAction: cocoa.MSAddExportFormatAction.CLASS;
