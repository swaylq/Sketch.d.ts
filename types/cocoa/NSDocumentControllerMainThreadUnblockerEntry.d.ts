/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentControllerMainThreadUnblockerEntry<T0 = void, T1 = void, T2 = void> extends NSObject {
    transferBlockingInterruptersToUnblocker<R = void, P0 = unknown>(_transferBlockingInterruptersToUnblocker: P0): R;
    whenPendingInterruptersHaveCompletedInvokeBlock<R = void, P0 = CDUnknownBlockType>(_whenPendingInterruptersHaveCompletedInvokeBlock: P0): R;
    enqueueBlockingInterrupter<R = void, P0 = CDUnknownBlockType>(_enqueueBlockingInterrupter: P0): R;
    _invokeInterrupter<R = void, P0 = CDUnknownBlockType>(__invokeInterrupter: P0): R;
    dealloc<R = void>(): R;
    suspended<R = boolean>(): R;
    setSuspended<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSDocumentControllerMainThreadUnblockerEntry {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSDocumentControllerMainThreadUnblockerEntry>(): R;
      new: <R = NSDocumentControllerMainThreadUnblockerEntry>() => R;
      entryWithUnblocker_queue<R = unknown, P0 = CDUnknownBlockType, P1 = unknown>(_entryWithUnblocker: P0, _queue: P1): R;
    }
  }
}

declare const NSDocumentControllerMainThreadUnblockerEntry: cocoa.NSDocumentControllerMainThreadUnblockerEntry.CLASS;
