/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToolsMenuAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
  }
  namespace MSToolsMenuAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSToolsMenuAction>(): R;
      new: <R = MSToolsMenuAction>() => R;
    }
  }
}

declare const MSToolsMenuAction: cocoa.MSToolsMenuAction.CLASS;
