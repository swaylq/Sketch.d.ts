/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSViewMenuAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
  }
  namespace MSViewMenuAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSViewMenuAction>(): R;
      new: <R = MSViewMenuAction>() => R;
    }
  }
}

declare const MSViewMenuAction: cocoa.MSViewMenuAction.CLASS;
