/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSXPCConnectionExpectedReplies<T0 = void, T1 = void, T2 = void> extends NSObject {
    progressForSequence<R = unknown, P0 = number>(_progressForSequence: P0): R;
    removeProgressSequence<R = void, P0 = number>(_removeProgressSequence: P0): R;
    sequenceForProgress<R = number, P0 = unknown>(_sequenceForProgress: P0): R;
    dealloc<R = void>(): R;
  }
  namespace _NSXPCConnectionExpectedReplies {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSXPCConnectionExpectedReplies>(): R;
      new: <R = _NSXPCConnectionExpectedReplies>() => R;
    }
  }
}
