/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDocumentRevisionsLoadingOperation<T0 = void, T1 = void, T2 = void> extends NSOperation {
    setCompletionBlock<R = void, P0 = CDUnknownBlockType>(_setCompletionBlock: P0): R;
    addDocumentConsumer<R = void, P0 = CDUnknownBlockType>(_addDocumentConsumer: P0): R;
    _documentLoadingDidComplete<R = void>(): R;
    initWithVersion<R = unknown, P0 = unknown>(_initWithVersion: P0): R;
    document<R = NSDocument>(): R;
    setDocument<R = void, P0 = NSDocument>(_v: P0): R;
  }
  namespace _NSDocumentRevisionsLoadingOperation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSOperation {
      alloc<R = _NSDocumentRevisionsLoadingOperation>(): R;
      new: <R = _NSDocumentRevisionsLoadingOperation>() => R;
    }
  }
}
