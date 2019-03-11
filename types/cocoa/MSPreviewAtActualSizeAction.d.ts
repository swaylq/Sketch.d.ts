/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPreviewAtActualSizeAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
  }
  namespace classes {
    export interface MSPreviewAtActualSizeAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSPreviewAtActualSizeAction>(): R;
      new: <R = MSPreviewAtActualSizeAction>() => R;
    }
  }
}

declare const MSPreviewAtActualSizeAction: cocoa.classes.MSPreviewAtActualSizeAction;
