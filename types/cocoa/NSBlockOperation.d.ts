/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBlockOperation<T0 = void, T1 = void, T2 = void> extends NSOperation {
    addExecutionBlock<R = void, P0 = CDUnknownBlockType>(_addExecutionBlock: P0): R;
    initWithBlock<R = unknown, P0 = CDUnknownBlockType>(_initWithBlock: P0): R;
    executionBlocks<R = NSArray>(): R;
  }
  namespace NSBlockOperation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSOperation {
      alloc<R = NSBlockOperation>(): R;
      new: <R = NSBlockOperation>() => R;
      blockOperationWithBlock<R = unknown, P0 = CDUnknownBlockType>(_blockOperationWithBlock: P0): R;
    }
  }
}

declare const NSBlockOperation: cocoa.NSBlockOperation.CLASS;
