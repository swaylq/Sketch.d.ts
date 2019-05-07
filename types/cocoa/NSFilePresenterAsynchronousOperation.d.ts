/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFilePresenterAsynchronousOperation<T0 = void, T1 = void, T2 = void> extends NSOperation {
    finish<R = void>(): R;
    isFinished<R = boolean>(): R;
    isExecuting<R = boolean>(): R;
    isAsynchronous<R = boolean>(): R;
  }
  namespace NSFilePresenterAsynchronousOperation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSOperation {
      alloc<R = NSFilePresenterAsynchronousOperation>(): R;
      new: <R = NSFilePresenterAsynchronousOperation>() => R;
      operationWithBlock<R = unknown, P0 = CDUnknownBlockType>(_operationWithBlock: P0): R;
    }
  }
}

declare const NSFilePresenterAsynchronousOperation: cocoa.NSFilePresenterAsynchronousOperation.CLASS;
