/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSXPCConnectionRequestedReplies<T0 = void, T1 = void, T2 = void> extends NSObject {
    progressForSequence<R = unknown, P0 = number>(_progressForSequence: P0): R;
    beginTransactionForSequence_reply_withProgress<R = void, P0 = number, P1 = unknown, P2 = unknown>(_beginTransactionForSequence: P0, _reply: P1, _withProgress: P2): R;
    endTransactionForSequence_completionHandler<R = void, P0 = number, P1 = CDUnknownBlockType>(_endTransactionForSequence: P0, _completionHandler: P1): R;
    invalidate<R = void>(): R;
    dealloc<R = void>(): R;
  }
  namespace _NSXPCConnectionRequestedReplies {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSXPCConnectionRequestedReplies>(): R;
      new: <R = _NSXPCConnectionRequestedReplies>() => R;
    }
  }
}
