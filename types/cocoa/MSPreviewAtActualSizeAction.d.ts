/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPreviewAtActualSizeAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
  }
  namespace MSPreviewAtActualSizeAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSPreviewAtActualSizeAction>(): R;
      new: <R = MSPreviewAtActualSizeAction>() => R;
    }
  }
}

declare const MSPreviewAtActualSizeAction: cocoa.MSPreviewAtActualSizeAction.CLASS;
