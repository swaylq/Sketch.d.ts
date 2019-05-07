/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShowReplaceColorSheetAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    showReplaceColorSheet<R = void, P0 = unknown>(_showReplaceColorSheet: P0): R;
    validate<R = boolean>(): R;
  }
  namespace MSShowReplaceColorSheetAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSShowReplaceColorSheetAction>(): R;
      new: <R = MSShowReplaceColorSheetAction>() => R;
    }
  }
}

declare const MSShowReplaceColorSheetAction: cocoa.MSShowReplaceColorSheetAction.CLASS;
