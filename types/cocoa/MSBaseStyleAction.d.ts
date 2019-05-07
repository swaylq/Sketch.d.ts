/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseStyleAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
  }
  namespace MSBaseStyleAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSBaseStyleAction>(): R;
      new: <R = MSBaseStyleAction>() => R;
    }
  }
}

declare const MSBaseStyleAction: cocoa.MSBaseStyleAction.CLASS;
