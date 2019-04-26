/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseInsertAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    validate<R = boolean>(): R;
  }
  namespace MSBaseInsertAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSBaseInsertAction>(): R;
      new: <R = MSBaseInsertAction>() => R;
    }
  }
}

declare const MSBaseInsertAction: cocoa.MSBaseInsertAction.CLASS;
