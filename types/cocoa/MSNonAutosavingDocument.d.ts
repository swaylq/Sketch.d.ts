/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNonAutosavingDocument<T0 = void, T1 = void, T2 = void> extends MSDocument {
    fileType<R = unknown>(): R;
  }
  namespace MSNonAutosavingDocument {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocument {
      alloc<R = MSNonAutosavingDocument>(): R;
      new: <R = MSNonAutosavingDocument>() => R;
    }
  }
}

declare const MSNonAutosavingDocument: cocoa.MSNonAutosavingDocument.CLASS;
