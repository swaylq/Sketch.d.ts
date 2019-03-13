/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseInsertAction<T = any> extends MSDocumentAction {
    validate<R = boolean>(): R;
  }
  namespace classes {
    export interface MSBaseInsertAction<T = any> extends MSDocumentAction {
      alloc<R = MSBaseInsertAction>(): R;
      new: <R = MSBaseInsertAction>() => R;
    }
  }
}

declare const MSBaseInsertAction: cocoa.classes.MSBaseInsertAction;