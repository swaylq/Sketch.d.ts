/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPersistentUIEncodingQueue<T0 = void, T1 = void, T2 = void> extends NSObject {
    finishEnqueuedImmediatelyWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_finishEnqueuedImmediatelyWithCompletionHandler: P0): R;
    finishEnqueuedWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_finishEnqueuedWithCompletionHandler: P0): R;
    dealloc<R = void>(): R;
    operationQueue<R = NSOperationQueue>(): R;
  }
  namespace NSPersistentUIEncodingQueue {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSPersistentUIEncodingQueue>(): R;
      new: <R = NSPersistentUIEncodingQueue>() => R;
    }
  }
}

declare const NSPersistentUIEncodingQueue: cocoa.NSPersistentUIEncodingQueue.CLASS;
