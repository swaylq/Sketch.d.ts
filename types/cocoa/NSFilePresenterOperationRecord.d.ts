/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFilePresenterOperationRecord<T0 = void, T1 = void, T2 = void> extends NSObject {
    description<R = unknown>(): R;
    _reactorQueue<R = unknown>(): R;
    didEnd<R = void>(): R;
    willEnd<R = void>(): R;
    didBegin<R = void>(): R;
    dealloc<R = void>(): R;
    reactor<R = unknown>(): R;
    setReactor<R = void, P0 = unknown>(_v: P0): R;
    state<R = number>(): R;
    operationDescription<R = NSString>(): R;
  }
  namespace NSFilePresenterOperationRecord {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSFilePresenterOperationRecord>(): R;
      new: <R = NSFilePresenterOperationRecord>() => R;
      operationRecordWithDescription<R = unknown, P0 = unknown>(_operationRecordWithDescription: P0): R;
    }
  }
}

declare const NSFilePresenterOperationRecord: cocoa.NSFilePresenterOperationRecord.CLASS;
