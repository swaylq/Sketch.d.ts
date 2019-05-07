/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    baseNameForSlice<R = unknown>(): R;
    rectForExportingEntirePage<R = CGRect>(): R;
    determineRectForInitialSliceWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_determineRectForInitialSliceWithCompletionHandler: P0): R;
    createInitialSliceWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_createInitialSliceWithCompletionHandler: P0): R;
    showInspectorPanelIfNecessary<R = void>(): R;
    hasArtboardsWitNoExportFormats<R = boolean>(): R;
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    export<R = void, P0 = unknown>(_export: P0): R;
  }
  namespace MSExportAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSExportAction>(): R;
      new: <R = MSExportAction>() => R;
    }
  }
}

declare const MSExportAction: cocoa.MSExportAction.CLASS;
