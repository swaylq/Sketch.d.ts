/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDocumentBasicAsyncOperation<T0 = void, T1 = void, T2 = void> extends NSOperation {
    finish<R = void>(): R;
    isFinished<R = boolean>(): R;
    isExecuting<R = boolean>(): R;
  }
  namespace _NSDocumentBasicAsyncOperation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSOperation {
      alloc<R = _NSDocumentBasicAsyncOperation>(): R;
      new: <R = _NSDocumentBasicAsyncOperation>() => R;
    }
  }
}
