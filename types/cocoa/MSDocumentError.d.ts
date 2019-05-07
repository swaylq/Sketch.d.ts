/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDocumentError<T0 = void, T1 = void, T2 = void> extends NSError {
    localizedFailureReason<R = unknown>(): R;
  }
  namespace MSDocumentError {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSError {
      alloc<R = MSDocumentError>(): R;
      new: <R = MSDocumentError>() => R;
      errorWithCode<R = unknown, P0 = number>(_errorWithCode: P0): R;
    }
  }
}

declare const MSDocumentError: cocoa.MSDocumentError.CLASS;
