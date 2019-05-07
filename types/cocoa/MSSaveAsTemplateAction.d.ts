/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSaveAsTemplateAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    saveAsTemplate<R = void, P0 = unknown>(_saveAsTemplate: P0): R;
  }
  namespace MSSaveAsTemplateAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSSaveAsTemplateAction>(): R;
      new: <R = MSSaveAsTemplateAction>() => R;
    }
  }
}

declare const MSSaveAsTemplateAction: cocoa.MSSaveAsTemplateAction.CLASS;
