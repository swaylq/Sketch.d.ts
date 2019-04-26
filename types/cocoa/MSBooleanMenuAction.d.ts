/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBooleanMenuAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
  }
  namespace MSBooleanMenuAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSBooleanMenuAction>(): R;
      new: <R = MSBooleanMenuAction>() => R;
    }
  }
}

declare const MSBooleanMenuAction: cocoa.MSBooleanMenuAction.CLASS;
